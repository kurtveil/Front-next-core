// components/Piano.tsx
"use client";

import { PIANO_KEYS, PianoKey } from "@/src/interfaces/piano/note";


export default function Piano() {
  const handleKeyPress = (key: PianoKey) => {
    // Aquí puedes reproducir audio en el futuro
    console.log(`Nota presionada: ${key.name} (${key.american})`);
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
            <div key={whiteKey.american} className="relative flex flex-1  md:min-w-[60px]">
              {/* Tecla Blanca */}
              <button
                onClick={() => handleKeyPress(whiteKey)}
                className="w-full h-40 md:h-56 bg-white border border-gray-300 rounded-b-md flex flex-col justify-end pb-3 md:pb-4 items-center text-[10px] md:text-xs font-bold text-gray-500 hover:bg-gray-100 active:bg-gray-200 transition-all shadow-[inset_0_-5px_0_#ccc]"
              >
                <span>{whiteKey.name}</span>
                <span className="text-gray-400 font-normal">{whiteKey.american}</span>
              </button>

              {/* Tecla Negra */}
              {blackKeyPositions[whiteKey.american] && (
                <button
                  onClick={() => handleKeyPress(blackKeyPositions[whiteKey.american]!)}
                  className="absolute z-10 w-[55%] h-24 md:h-36 bg-gray-900 border border-black rounded-b-md flex flex-col justify-end pb-2 md:pb-3 items-center text-[8px] md:text-[10px] font-bold text-gray-400 hover:bg-gray-800 active:bg-black transition-all shadow-[0_4px_4px_rgba(0,0,0,0.4)]"
                  style={{
                    left: "72.5%", // Posición exacta porcentual para superponerse entre las blancas
                  }}
                >
                  <span className="truncate max-w-full px-0.5">
                    {blackKeyPositions[whiteKey.american]!.name}
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="text-gray-400 text-center text-xs mt-2 block md:hidden">
        ↔️ Desliza para ver todo el teclado
      </p>
    </div>
  );
}
