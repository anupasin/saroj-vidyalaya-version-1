import type { Subject } from "@/lib/types/course";

const STORAGE_KEY = "saroj-vidyalaya-progress";

interface LessonProgress {
  subject: Subject;
  lessonOrder: number;
  completed: boolean;
  completedAt?: string;
}

interface ProgressData {
  lessons: LessonProgress[];
}

function getProgressData(): ProgressData {
  if (typeof window === "undefined") {
    return { lessons: [] };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as ProgressData;
    }
  } catch (error) {
    console.error("Error reading progress from localStorage:", error);
  }

  return { lessons: [] };
}

function saveProgressData(data: ProgressData): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving progress to localStorage:", error);
  }
}

export function markLessonComplete(
  subject: Subject,
  lessonOrder: number
): void {
  const progress = getProgressData();
  const existingIndex = progress.lessons.findIndex(
    (l) => l.subject === subject && l.lessonOrder === lessonOrder
  );

  const lessonProgress: LessonProgress = {
    subject,
    lessonOrder,
    completed: true,
    completedAt: new Date().toISOString(),
  };

  if (existingIndex >= 0) {
    progress.lessons[existingIndex] = lessonProgress;
  } else {
    progress.lessons.push(lessonProgress);
  }

  saveProgressData(progress);
  
  // Dispatch custom event for same-tab updates
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("progress-updated"));
  }
}

export function markLessonIncomplete(
  subject: Subject,
  lessonOrder: number
): void {
  const progress = getProgressData();
  const existingIndex = progress.lessons.findIndex(
    (l) => l.subject === subject && l.lessonOrder === lessonOrder
  );

  if (existingIndex >= 0) {
    progress.lessons.splice(existingIndex, 1);
    saveProgressData(progress);
    
    // Dispatch custom event for same-tab updates
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("progress-updated"));
    }
  }
}

export function isLessonComplete(
  subject: Subject,
  lessonOrder: number
): boolean {
  const progress = getProgressData();
  return progress.lessons.some(
    (l) => l.subject === subject && l.lessonOrder === lessonOrder && l.completed
  );
}

export function getCourseProgress(
  subject: Subject,
  totalLessons: number
): {
  completed: number;
  total: number;
  percentage: number;
} {
  const progress = getProgressData();
  const subjectLessons = progress.lessons.filter((l) => l.subject === subject);
  const completed = subjectLessons.filter((l) => l.completed).length;
  const percentage = totalLessons > 0 ? (completed / totalLessons) * 100 : 0;

  return {
    completed,
    total: totalLessons,
    percentage: Math.round(percentage),
  };
}

