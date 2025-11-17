import { CourseCard } from "@/components/course-card";
import { getAllCourses } from "@/lib/data/get-all-courses";
import { subjectIcons, subjectColors } from "@/lib/constants/subjects";

function getSubjects() {
  const courses = getAllCourses();
  return courses.map((course) => ({
    title: course.title,
    description: course.description,
    href: `/courses/${course.subject}`,
    color: subjectColors[course.subject] || "bg-gray-200",
    icon: subjectIcons[course.subject] || "📖",
  }));
}

export default function CoursesPage() {
  const subjects = getSubjects();

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

