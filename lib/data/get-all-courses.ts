import type { Course } from "@/lib/types/course";
import { courses } from "./courses";

export function getAllCourses(): Course[] {
  return courses;
}

