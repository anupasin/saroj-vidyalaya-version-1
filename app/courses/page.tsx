import { CourseCard } from "@/components/CourseCard";
import { subjectIcons, subjectColors } from "@/lib/constants/subjects";
import { sanityFetch } from "@/sanity/lib/fetch";
import { COURSES_QUERY } from "@/sanity/lib/queries";
import { type Subject } from "@/lib/types/course";

export default async function CoursesPage() {
  const courses = await sanityFetch<any[]>({ query: COURSES_QUERY });

  const subjects = courses.map((course) => ({
    title: course.title,
    description: course.description,
    href: `/courses/${course.slug.current}`,
    color: subjectColors[course.subject as Subject] || "bg-gray-200",
    icon: subjectIcons[course.subject as Subject] || "📖",
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-nunito text-foreground mb-4">
          All Courses
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
          Explore our collection of interactive courses designed to make learning fun and engaging.
          Choose a subject to begin your learning journey!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {subjects.map((subject) => (
          <CourseCard key={subject.href} {...subject} />
        ))}
      </div>
    </div>
  );
}
