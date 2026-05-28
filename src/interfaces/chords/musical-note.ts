export const TWELVE_NOTES: MusicalNote[] = [
  { id: 1, name: "Do", american: "C", isAlteration: false },
  { id: 2, name: "Do♯ / Re♭", american: "C# / Db", isAlteration: true, sharpName: "Do♯", flatName: "Re♭" },
  { id: 3, name: "Re", american: "D", isAlteration: false },
  { id: 4, name: "Re♯ / Mi♭", american: "D# / Db", isAlteration: true, sharpName: "Re♯", flatName: "Mi♭" },
  { id: 5, name: "Mi", american: "E", isAlteration: false },
  { id: 6, name: "Fa", american: "F", isAlteration: false },
  { id: 7, name: "Fa♯ / Sol♭", american: "F# / Gb", isAlteration: true, sharpName: "Fa♯", flatName: "Sol♭" },
  { id: 8, name: "Sol", american: "G", isAlteration: false },
  { id: 9, name: "Sol♯ / La♭", american: "G# / Ab", isAlteration: true, sharpName: "Sol♯", flatName: "La♭" },
  { id: 10, name: "La", american: "A", isAlteration: false },
  { id: 11, name: "La♯ / Si♭", american: "A# / Bb", isAlteration: true, sharpName: "La♯", flatName: "Si♭" },
  { id: 12, name: "Si", american: "B", isAlteration: false }
];

export interface MusicalNote {
  id: number;
  name: string;
  american: string;
  isAlteration: boolean;
  sharpName?: string;
  flatName?: string;
}