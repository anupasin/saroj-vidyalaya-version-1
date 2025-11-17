import { notFound } from "next/navigation";
import { getCourseBySubject } from "@/lib/data/get-course";
import { isValidSubject } from "@/lib/utils/subject-validation";
import { CourseContent } from "./course-content";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  
  if (!isValidSubject(subject)) {
    notFound();
  }
  
  const course = getCourseBySubject(subject);

  if (!course) {
    notFound();
  }

  return <CourseContent course={course} />;
}
