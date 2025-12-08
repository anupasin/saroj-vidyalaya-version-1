import { notFound } from "next/navigation";
import { client } from "@/lib/sanity.client";
import { CourseContent } from "./course-content";

// GROQ Query to fetch the full course content
// We flatten "subject.current" to just "subject" to match your Typescript interfaces
const query = `
  *[_type == "course" && subject.current == $subject][0] {
    title,
    description,
    "subject": subject.current,
    lessons,
    quiz
  }
`;

export default async function CoursePage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  
  // 1. Fetch from Sanity using the URL parameter
  const course = await client.fetch(query, { subject });

  // 2. If Sanity returns null, show 404 Page
  if (!course) {
    notFound();
  }

  // 3. Pass data to your existing content renderer
  return <CourseContent course={course} />;
}