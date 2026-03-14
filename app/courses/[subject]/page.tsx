import { notFound } from 'next/navigation';
import { client } from '@/lib/sanity.client';
import { CourseContent } from './course-content';
import { auth } from '@clerk/nextjs/server';
import { AuthGate } from '@/components/AuthGate';
import type { Metadata } from 'next';
import { baseUrl } from '@/lib/constants/site';

const query = `
  *[_type == "course" && subject.current == $subject][0] {
    title,
    description,
    "subject": subject.current,
    lessons,
    quiz
  }
`;

export async function generateStaticParams() {
  const courses = await client.fetch(`*[_type == "course"]{ "subject": subject.current }`);
  return courses.map((c: any) => ({ subject: c.subject }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}): Promise<Metadata> {
  const { subject } = await params;
  const course = await client.fetch(query, { subject });

  if (!course) return { title: 'Course Not Found' };

  return {
    title: course.title,
    description: course.description,
    alternates: {
      canonical: `${baseUrl}/courses/${subject}`,
    },
    openGraph: {
      title: course.title,
      description: course.description,
      url: `${baseUrl}/courses/${subject}`,
      type: 'article',
    },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  const course = await client.fetch(query, { subject });

  if (!course) notFound();

  const { userId } = await auth();

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

  return <CourseContent course={course} />;
}