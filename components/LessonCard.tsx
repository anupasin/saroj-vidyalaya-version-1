"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle } from "lucide-react";
import type { Lesson } from "@/lib/types/course";
import { markLessonComplete, isLessonComplete, markLessonIncomplete } from "@/lib/progress";
import type { Subject } from "@/lib/types/course";
import { useState, useEffect } from "react";
import { PortableText } from "./PortableText";

interface LessonCardProps {
  lesson: Lesson;
  subject: Subject;
  lessonNumber: number;
}

export function LessonCard({ lesson, subject, lessonNumber }: LessonCardProps) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(isLessonComplete(subject, lesson.order));
  }, [subject, lesson.order]);

  const handleToggleComplete = () => {
    if (completed) {
      markLessonIncomplete(subject, lesson.order);
      setCompleted(false);
    } else {
      markLessonComplete(subject, lesson.order);
      setCompleted(true);
    }
  };

  return (
    <Card className={`border-2 ${completed ? "bg-primary/5 border-primary/30" : ""}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="font-nunito text-2xl text-primary flex-1">
            Lesson {lessonNumber}: {lesson.title}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleToggleComplete}
            className="shrink-0"
            aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
          >
            {completed ? (
              <CheckCircle2 className="h-5 w-5 text-primary" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-foreground font-sans text-lg leading-relaxed">
          <PortableText value={lesson.content} />
        </div>
        {lesson.analogy && (
          <div className="bg-accent/20 rounded-lg p-4 border-l-4 border-accent">
            <p className="font-nunito font-semibold text-foreground mb-2">
              💡 Think of it this way:
            </p>
            <p className="text-foreground font-sans italic">{lesson.analogy}</p>
          </div>
        )}
        {lesson.example && (
          <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
            <p className="font-nunito font-semibold text-foreground mb-2">
              ✨ Example:
            </p>
            <p className="text-foreground font-sans">{lesson.example}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

