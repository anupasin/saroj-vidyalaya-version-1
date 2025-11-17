import type { Course, Subject } from "@/lib/types/course";
import { courses } from "./courses";

export function getCourseBySubject(subject: Subject): Course | null {
  return courses.find((course) => course.subject === subject) || null;
}

