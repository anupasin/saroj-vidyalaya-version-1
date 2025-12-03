import { CourseCard } from "@/components/CourseCard";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { TOPICS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Topics",
  description: "Explore various topics including Electrochemical Cells.",
};

export default async function TopicsPage() {
  const topics = await sanityFetch<any[]>({ query: TOPICS_QUERY });

  return (
    <div className="container mx-auto px-6 pt-24 pb-12">
      <h1 className="text-3xl md:text-4xl font-nunito font-bold text-brand-gold mb-8 text-center">
        Explore Topics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <CourseCard
            key={topic.slug.current}
            title={topic.title}
            description={topic.description}
            href={`/topics/${topic.slug.current}`}
            color="bg-blue-100"
            icon="🔋" // Hardcoded icon for now, could be added to schema
          />
        ))}
      </div>
    </div>
  );
}
