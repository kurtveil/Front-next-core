// constants/notes.ts
export interface PianoKey {
  name: string;
  american: string;
  isBlack: boolean;
}

export const PIANO_KEYS: PianoKey[] = [
  { name: "Do", american: "C", isBlack: false },
  { name: "Do♯", american: "C#", isBlack: true },
  { name: "Re", american: "D", isBlack: false },
  { name: "Re♯", american: "D#", isBlack: true },
  { name: "Mi", american: "E", isBlack: false },
  { name: "Fa", american: "F", isBlack: false },
  { name: "Fa♯", american: "F#", isBlack: true },
  { name: "Sol", american: "G", isBlack: false },
  { name: "Sol♯", american: "G#", isBlack: true },
  { name: "La", american: "A", isBlack: false },
  { name: "La♯", american: "A#", isBlack: true },
  { name: "Si", american: "B", isBlack: false }
];
