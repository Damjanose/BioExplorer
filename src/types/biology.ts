// Types for the BioExplorer app

export interface BodyPart {
  id: string;
  name: string;
  system: string;
  description: string;
  function: string;
  funFacts: string[];
  image?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Quiz {
  bodyPartId: string;
  questions: QuizQuestion[];
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: number[];
  isComplete: boolean;
}

export interface WikipediaSummary {
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
  content_urls?: {
    desktop: {
      page: string;
    };
  };
}

export interface BodyPartData {
  info: BodyPart;
  wikipedia?: WikipediaSummary;
  isLoading: boolean;
  error?: string;
}
