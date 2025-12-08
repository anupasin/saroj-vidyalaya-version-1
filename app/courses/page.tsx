import { CourseCard } from "@/components/CourseCard";
import { client } from "@/lib/sanity.client";
import { subjectIcons, subjectColors } from "@/lib/constants/subjects";

// Define what we need from Sanity to build the card
const query = `
  *[_type == "course"] {
    title,
    description,
    subject
  }
`;

export default async function CoursesPage() {
  // 1. Fetch data dynamically from Sanity
  const courses = await client.fetch(query);

  // 2. Map the Sanity data to your UI structure
  // We use the subject slug (e.g., "mathematics") to look up the correct icon/color
  const subjects = courses.map((course: any) => {
    const subjectSlug = course.subject.current;
    
    return {
      title: course.title,
      description: course.description,
      href: `/courses/${subjectSlug}`,
      // Use the constant if it exists, otherwise default to gray/book
      color: subjectColors[subjectSlug as keyof typeof subjectColors] || "bg-gray-200",
      icon: subjectIcons[subjectSlug as keyof typeof subjectIcons] || "📖",
    };
  });

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
        {subjects.map((subject: any) => (
          <CourseCard key={subject.href} {...subject} />
        ))}
      </div>
    </div>
  );
}