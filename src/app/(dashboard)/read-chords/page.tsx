"use client";

import Piano from "@/src/components/ui/Piano";
import { PIANO_KEYS } from "@/src/interfaces/piano/note";
import { useEffect, useState } from "react";

export default function page() {
  function getChord() {
    const idx = Math.floor(Math.random() * PIANO_KEYS.length);
    return PIANO_KEYS[idx];
  }

  // avoid using Math.random() during render to prevent SSR/CSR mismatch
  const [chordName, setChordName] = useState("");

  useEffect(() => {
    setChordName(getChord().name);
  }, []);

  return (
    <div>
      <div className="text-white text-center text-5xl">
        <h1>{chordName || "---"}</h1>
      </div>
      {chordName && <Piano chordRam={chordName} onCorrect={() => setChordName(getChord().name)} />}
    </div>
  );
}
