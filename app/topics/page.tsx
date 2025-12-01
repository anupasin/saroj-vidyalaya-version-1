import { CourseCard } from "@/components/CourseCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Topics",
  description: "Explore various topics including Electrochemical Cells.",
};

export default function TopicsPage() {
  return (
    <div className="container mx-auto px-6 pt-24 pb-12">
      <h1 className="text-3xl md:text-4xl font-nunito font-bold text-brand-gold mb-8 text-center">
        Explore Topics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CourseCard
          title="Electrochemical Cells"
          description="Dive deep into the world of batteries, fuel cells, and the future of clean energy with natural hydrogen."
          href="/topics/electrochemical-cells"
          color="bg-blue-100"
          icon="🔋"
        />
      </div>
    </div>
  );
}
