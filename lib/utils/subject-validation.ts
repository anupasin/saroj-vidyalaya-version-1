import type { Subject } from "@/lib/types/course";

const VALID_SUBJECTS: Subject[] = [
  "mathematics",
  "english",
  "coding",
  "geography",
  "general-knowledge",
  "science",
];

export function isValidSubject(subject: string): subject is Subject {
  return VALID_SUBJECTS.includes(subject as Subject);
}

