"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface LessonNavigationProps {
  currentLessonIndex: number;
  totalLessons: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function LessonNavigation({
  currentLessonIndex,
  totalLessons,
  onPrevious,
  onNext,
}: LessonNavigationProps) {
  const isFirstLesson = currentLessonIndex === 0;
  const isLastLesson = currentLessonIndex === totalLessons - 1;

  useEffect(() => {
    // Scroll to top when lesson changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentLessonIndex]);

  return (
    <div className="flex items-center justify-between gap-4 py-4 border-t border-b">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={isFirstLesson}
        className="font-nunito"
      >
        <ChevronLeft className="h-4 w-4 mr-2" />
        Previous Lesson
      </Button>
      <span className="text-sm text-muted-foreground font-sans">
        Lesson {currentLessonIndex + 1} of {totalLessons}
      </span>
      <Button
        variant="outline"
        onClick={onNext}
        disabled={isLastLesson}
        className="font-nunito"
      >
        Next Lesson
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
}

