import { notFound } from "next/navigation";
import { client } from "@/lib/sanity.client";
import { CourseContent } from "./course-content";
import { auth } from '@clerk/nextjs/server';
import { AuthGate } from '@/components/AuthGate';

// GROQ Query to fetch the full course content
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

  const course = await client.fetch(query, { subject });

  if (!course) {
    notFound();
  }

  const { userId } = await auth();

  // If not authenticated, show blurred content WITH auth gate overlay
  if (!userId) {
    return (
      <>
        <div className="blur-sm pointer-events-none select-none">
          <CourseContent course={course} />
        </div>
        <AuthGate lessonTitle={course.title} />
      </>
    );
  }

  // User is authenticated - show content without overlay
  return <CourseContent course={course} />;
}