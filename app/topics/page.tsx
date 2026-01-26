import { CourseCard } from "@/components/CourseCard";
import { client } from "@/lib/sanity.client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Topics",
  description: "Explore deep-dive topics across science, nature, and wonder.",
};

// Query to fetch all topics from Sanity
const query = `
  *[_type == "topic"] | order(order asc) {
    title,
    slug,
    description,
    icon,
    color
  }
`;

export default async function TopicsPage() {
  // Fetch topics from Sanity
  const topics = await client.fetch(query);

  return (
    <div className="container mx-auto px-6 pt-24 pb-12">
      <h1 className="text-3xl md:text-4xl font-nunito font-bold text-brand-gold mb-8 text-center">
        Explore Topics
      </h1>

      {topics.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No topics available yet. Check back soon!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic: any) => (
            <CourseCard
              key={topic.slug.current}
              title={topic.title}
              description={topic.description}
              href={`/topics/${topic.slug.current}`}
              color={topic.color || "bg-gray-100"}
              icon={topic.icon || "📖"}
            />
          ))}
        </div>
      )}
    </div>
  );
}