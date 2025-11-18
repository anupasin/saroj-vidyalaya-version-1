"use client";

import { Card, CardContent } from "@/components/ui/card";
import { getCourseProgress } from "@/lib/progress";
import type { Subject } from "@/lib/types/course";
import { useEffect, useState } from "react";

interface CourseProgressProps {
  subject: Subject;
  totalLessons: number;
}

export function CourseProgress({ subject, totalLessons }: CourseProgressProps) {
  const [progress, setProgress] = useState({
    completed: 0,
    total: totalLessons,
    percentage: 0,
  });

  useEffect(() => {
    const updateProgress = () => {
      const prog = getCourseProgress(subject, totalLessons);
      setProgress(prog);
    };

    updateProgress();
    
    // Update progress when storage changes (other tabs/windows)
    const handleStorageChange = () => {
      updateProgress();
    };

    // Custom event for same-tab updates
    const handleProgressUpdate = () => {
      updateProgress();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("progress-updated", handleProgressUpdate);
    
    // Fallback: check periodically (reduced frequency for better performance)
    const interval = setInterval(updateProgress, 2000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("progress-updated", handleProgressUpdate);
      clearInterval(interval);
    };
  }, [subject, totalLessons]);

  return (
    <Card className="mb-6 border-2">
      <CardContent className="pt-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-nunito font-semibold text-lg text-foreground">
              Course Progress
            </h3>
            <span className="text-sm font-sans text-muted-foreground">
              {progress.completed} of {progress.total} lessons completed
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-300 ease-in-out"
              style={{ width: `${progress.percentage}%` }}
              role="progressbar"
              aria-valuenow={progress.percentage}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${progress.percentage}% complete`}
            />
          </div>
          <p className="text-sm font-sans text-muted-foreground text-center">
            {progress.percentage}% Complete
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

