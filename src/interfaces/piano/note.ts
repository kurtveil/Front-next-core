// constants/notes.ts
export interface PianoKey {
  name: string;
  american: string;
  isBlack: boolean;
  frecuence: number;
}

export const PIANO_KEYS: PianoKey[] = [
  { name: "Do", american: "C", isBlack: false, frecuence: 261.63 },
  { name: "Do♯", american: "C#", isBlack: true, frecuence: 277.18 },
  { name: "Re", american: "D", isBlack: false, frecuence: 293.66 },
  { name: "Re♯", american: "D#", isBlack: true, frecuence: 311.13 },
  { name: "Mi", american: "E", isBlack: false, frecuence: 329.63 },
  { name: "Fa", american: "F", isBlack: false, frecuence: 349.23 },
  { name: "Fa♯", american: "F#", isBlack: true, frecuence: 369.99 },
  { name: "Sol", american: "G", isBlack: false, frecuence: 392.00 },
  { name: "Sol♯", american: "G#", isBlack: true, frecuence: 415.30 },
  { name: "La", american: "A", isBlack: false, frecuence: 440.00 },
  { name: "La♯", american: "A#", isBlack: true, frecuence: 466.16 },
  { name: "Si", american: "B", isBlack: false, frecuence: 493.88 }
];


export const playFrequency = (frecuencia: number) => {
  // 1. Inicializar el contexto de audio del navegador
  const contexto = new AudioContext();

  // 2. Crear el oscilador (el generador de onda) y el control de volumen
  const oscilador = contexto.createOscillator();
  const ganancia = contexto.createGain();

  oscilador.type = "sine"; // Tipo de onda: 'sine', 'square', 'sawtooth', 'triangle'
  oscilador.frequency.setValueAtTime(frecuencia, contexto.currentTime);

  // 3. Crear un efecto de desvanecimiento suave (fade out) para que suene natural
  ganancia.gain.setValueAtTime(0.5, contexto.currentTime); // Volumen inicial
  ganancia.gain.exponentialRampToValueAtTime(0.00001, contexto.currentTime + 1.5); // Se apaga en 1.5 segundos

  // 4. Conectar los nodos y reproducir
  oscilador.connect(ganancia);
  ganancia.connect(contexto.destination);

  oscilador.start();
  oscilador.stop(contexto.currentTime + 1.5); // Detener el oscilador
};
