"use client";

import {
  PIANO_KEYS,
  PianoKey,
  playFrequency,
} from "@/src/interfaces/piano/note";
import { useState, useEffect } from "react";
import { PianoStats } from "@/src/components/ui/PianoStats";

export default function Piano(props: { chordRam: string; onCorrect?: () => void }) {
  const [lastResult, setLastResult] = useState<{ key: string; correct: boolean } | null>(null);
  const [history, setHistory] = useState<Array<{ note: string; correct: boolean }>>([]);
  const [noteStats, setNoteStats] = useState(
    PIANO_KEYS.reduce((acc, key) => {
      acc[key.name] = {
        name: key.name,
        attempts: 0,
        correct: 0,
      };
      return acc;
    }, {} as Record<string, { name: string; attempts: number; correct: number }>)
  );

  const totalAttempts = history.length;
  const correctAttempts = history.filter((entry) => entry.correct).length;
  
  const handleKeyPress = (key: PianoKey) => {
    const correct = props.chordRam === key.name;
    setLastResult({ key: key.name, correct });
    setHistory((prev) => [{ note: key.name, correct }, ...prev].slice(0, 10));
    setNoteStats((prev) => ({
      ...prev,
      [key.name]: {
        ...prev[key.name],
        attempts: prev[key.name].attempts + 1,
        correct: prev[key.name].correct + (correct ? 1 : 0),
      },
    }));
    playFrequency(key.frecuence);
    if (correct) {
      // notify parent to change target
      props.onCorrect?.();
    }
  };

  // clear last result when target changes so UI resets for new target
  useEffect(() => {
    setLastResult(null);
  }, [props.chordRam]);

  const getKeyClasses = (key: PianoKey) => {
    const isSelected = lastResult?.key === key.name;
    const base = key.isBlack
      ? "absolute z-10 w-[55%] h-24 md:h-36 border border-black rounded-b-md flex flex-col justify-end pb-2 md:pb-3 items-center text-[8px] md:text-[10px] font-bold transition-all shadow-[0_4px_4px_rgba(0,0,0,0.4)]"
      : "w-full h-40 md:h-56 border border-gray-300 rounded-b-md flex flex-col justify-end pb-3 md:pb-4 items-center text-[10px] md:text-xs font-bold transition-all shadow-[inset_0_-5px_0_#ccc]";

    if (!isSelected) {
      return key.isBlack
        ? `${base} bg-gray-900 text-gray-400 hover:bg-gray-800`
        : `${base} bg-white text-gray-500 hover:bg-gray-100`;
    }

    return lastResult!.correct
      ? `${base} ${key.isBlack ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-[0_4px_4px_rgba(16,185,129,0.4)]" : "bg-emerald-500 text-white hover:bg-emerald-600 shadow-[inset_0_-5px_0_#4d7c0f]"}`
      : `${base} ${key.isBlack ? "bg-rose-600 text-white hover:bg-rose-700 shadow-[0_4px_4px_rgba(248,113,113,0.4)]" : "bg-rose-600 text-white hover:bg-rose-700 shadow-[inset_0_-5px_0_#991b1b]"}`;
  };

  // Separamos las teclas para el renderizado posicional
  const whiteKeys = PIANO_KEYS.filter((key) => !key.isBlack);

  // Mapeo para saber exactamente después de qué nota blanca va cada tecla negra
  const blackKeyPositions: { [key: string]: PianoKey | undefined } = {
    C: PIANO_KEYS.find((k) => k.american === "C#"),
    D: PIANO_KEYS.find((k) => k.american === "D#"),
    F: PIANO_KEYS.find((k) => k.american === "F#"),
    G: PIANO_KEYS.find((k) => k.american === "G#"),
    A: PIANO_KEYS.find((k) => k.american === "A#"),
  };

  

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">

      {/* Contenedor con scroll horizontal en móviles, fijo y centrado en pantallas grandes */}
      <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-700">
        <div className="relative flex border-4 border-black rounded-b-lg bg-black p-1 shadow-inner  md:min-w-0 md:w-full select-none">
          {whiteKeys.map((whiteKey) => (
            // Cada bloque de tecla blanca + negra crece proporcionalmente usando flex-1 en escritorio
            <div
              key={whiteKey.american}
              className="relative flex flex-1  md:min-w-[60px]"
            >

              {/* Tecla Blanca */}
              <button
                onClick={() => handleKeyPress(whiteKey)}
                className={getKeyClasses(whiteKey)}
              >
               
              </button>

              {/* Tecla Negra */}
              {blackKeyPositions[whiteKey.american] && (
                <button
                  onClick={() =>
                    handleKeyPress(blackKeyPositions[whiteKey.american]!)
                  }
                  className={getKeyClasses(blackKeyPositions[whiteKey.american]!)}
                  style={{
                    left: "72.5%", // Posición exacta porcentual para superponerse entre las blancas
                  }}
                >
                </button>
              )}
              
            </div>
          ))}
        </div>
      </div>
      <p className="text-gray-400 text-center text-xs mt-2 block md:hidden">
        ↔️ Desliza para ver todo el teclado
      </p>

      <PianoStats
        targetNote={props.chordRam}
        totalAttempts={totalAttempts}
        correctAttempts={correctAttempts}
        noteStats={noteStats}
        history={history}
      />
    </div>
  );
}
