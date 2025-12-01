import Image from "next/image";
import { CourseCard } from "@/components/CourseCard";
import { getAllCourses } from "@/lib/data/get-all-courses";
import { subjectIcons, subjectColors } from "@/lib/constants/subjects";
import HeroSection from '@/components/HeroSection';


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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Saroj Vidyalaya, a platform for joyful learning.",
};
export default function Home() {
  const subjects = getSubjects();

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-secondary/20">
      {/* Hero Section - MOVED OUTSIDE container */}
      <HeroSection />
      
      <div className="container mx-auto px-4 py-12">
        {/* In Memory Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold font-nunito text-center mb-6 sm:mb-8 text-foreground">
          In Memory of Saroj Singh
        </h1>

        {/* Dedication Section */}
        <div className="bg-primary/10 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12 max-w-5xl mx-4 sm:mx-auto border border-primary/20 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Portrait Image */}
            <div className="shrink-0">
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-xl overflow-hidden border-4 border-primary/30 shadow-xl">
                <Image
                  src="/saroj-portrait.jpeg"
                  alt="Saroj - A wonderful teacher and loving mother"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-foreground font-nunito text-base sm:text-lg leading-relaxed">
                This platform is a tribute to <span className="font-semibold text-primary">Saroj</span>, 
                a wonderful teacher and loving mother who believed that learning should be joyful, 
                accessible, and filled with wonder. Like the lotus that was her namesake, she believed 
                in rising above challenges and blooming beautifully. Every lesson here carries that 
                spirit forward.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground font-sans mt-4 italic">
                <span className="font-semibold">Saroj</span> means "lotus" — a flower that rises 
                beautifully from the mud, just as learning helps us grow and bloom.
              </p>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="mb-8 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-nunito text-center mb-6 sm:mb-8 text-foreground">
            Choose Your Adventure
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {subjects.map((subject) => (
              <CourseCard key={subject.href} {...subject} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}