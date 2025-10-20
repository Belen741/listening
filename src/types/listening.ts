export type Choice = { id: string; text: string };
export type Question = {
  id: string;
  prompt: string;
  choices: Choice[];
  correctId: string;
  explanation?: string;
};

export type VocabItem = {
  term: string;
  meaning: string;
  example?: string;
};

export type ListeningData = {
  id: string;            // ej. "en-el-supermercado-a1"
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  title: string;
  audioSrc: string;      // ej. "/audios/en-el-supermercado.mp3"
  transcript: string;
  vocab: VocabItem[];
  quiz: Question[];
};
