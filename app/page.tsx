import Image from "next/image";
import { CourseCard } from "@/components/CourseCard";
// DELETED: import { getAllCourses } from "@/lib/data/get-all-courses";
import { client } from "@/lib/sanity.client"; // ADDED: Sanity Client
import { subjectIcons, subjectColors } from "@/lib/constants/subjects";
import HeroSection from '@/components/HeroSection';

// Define the query to fetch courses for the homepage
const query = `
  *[_type == "course"] {
    title,
    description,
    subject
  }
`;

export default async function Home() {
  // 1. Fetch data from Sanity
  const courses = await client.fetch(query);

  // 2. Map Sanity data to your UI structure
  const subjects = courses.map((course: any) => {
    const subjectSlug = course.subject.current;
    
    return {
      title: course.title,
      description: course.description,
      href: `/courses/${subjectSlug}`,
      color: subjectColors[subjectSlug as keyof typeof subjectColors] || "bg-gray-200",
      icon: subjectIcons[subjectSlug as keyof typeof subjectIcons] || "📖",
    };
  });

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      
      {/* Featured Courses Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-nunito text-primary mb-4">
              Start Learning Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of interactive courses designed to make complex topics easy to understand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject: any) => (
              <CourseCard key={subject.href} {...subject} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}