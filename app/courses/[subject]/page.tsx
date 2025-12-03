import { notFound } from "next/navigation";
import { CourseContent } from "./course-content";
import { sanityFetch } from "@/sanity/lib/fetch";
import { COURSE_QUERY } from "@/sanity/lib/queries";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  
  const course = await sanityFetch<any>({
    query: COURSE_QUERY,
    params: { slug: subject },
  });

  if (!course) {
    notFound();
  }

  return <CourseContent course={course} />;
}
