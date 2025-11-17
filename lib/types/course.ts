export type Subject =
  | "mathematics"
  | "english"
  | "coding"
  | "geography"
  | "general-knowledge"
  | "science";

export interface Lesson {
  title: string;
  content: string;
  analogy?: string;
  example?: string;
  order: number;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Course {
  subject: Subject;
  title: string;
  description: string;
  lessons: Lesson[];
  quiz?: {
    title: string;
    questions: QuizQuestion[];
  };
}

