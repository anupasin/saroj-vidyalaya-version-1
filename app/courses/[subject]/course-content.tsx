"use client";

import { useState, useEffect } from "react";
import { Quiz } from "@/components/Quiz";
import { LessonCard } from "@/components/LessonCard";
import { LessonNavigation } from "@/components/LessonNavigation";
import { CourseProgress } from "@/components/CourseProgress";
import type { Course } from "@/lib/types/course";

interface CourseContentProps {
  course: Course;
}

export function CourseContent({ course }: CourseContentProps) {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"all" | "single">("all");

  useEffect(() => {
    // Reset to first lesson when course changes
    setCurrentLessonIndex(0);
  }, [course.subject]);

  const handlePrevious = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentLessonIndex < course.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const currentLesson = course.lessons[currentLessonIndex];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="mb-6 sm:mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold font-nunito text-foreground mb-3 sm:mb-4">
          {course.title}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground font-sans">
          {course.description}
        </p>
      </div>

      <CourseProgress subject={course.subject} totalLessons={course.lessons.length} />

      {/* View Mode Toggle */}
      <div className="mb-6 flex justify-center gap-2">
        <button
          onClick={() => setViewMode("all")}
          className={`px-4 py-2 rounded-md font-nunito text-sm transition-colors ${
            viewMode === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          View All Lessons
        </button>
        <button
          onClick={() => setViewMode("single")}
          className={`px-4 py-2 rounded-md font-nunito text-sm transition-colors ${
            viewMode === "single"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          One Lesson at a Time
        </button>
      </div>

      {viewMode === "all" ? (
        // View all lessons
        <div className="space-y-6">
          {course.lessons.map((lesson, index) => (
            <LessonCard
              key={lesson.order}
              lesson={lesson}
              subject={course.subject}
              lessonNumber={index + 1}
            />
          ))}
        </div>
      ) : (
        // View one lesson at a time
        <div className="space-y-6">
          <LessonNavigation
            currentLessonIndex={currentLessonIndex}
            totalLessons={course.lessons.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
          <LessonCard
            lesson={currentLesson}
            subject={course.subject}
            lessonNumber={currentLessonIndex + 1}
          />
          <LessonNavigation
            currentLessonIndex={currentLessonIndex}
            totalLessons={course.lessons.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>
      )}

      {/* Quiz Section */}
      {course.quiz && (
        <div className="mt-12">
          <Quiz title={course.quiz.title} questions={course.quiz.questions} />
        </div>
      )}
    </div>
  );
}

