import React from "react";
import { Quiz } from "@/components/Quiz";
import { sanityFetch } from "@/sanity/lib/fetch";
import { TOPIC_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@/components/PortableText";
import { notFound } from "next/navigation";

export default async function ElectrochemicalCellsPage() {
  const topic = await sanityFetch<any>({
    query: TOPIC_QUERY,
    params: { slug: "electrochemical-cells" },
  });

  if (!topic) {
    // Fallback for when data hasn't been migrated yet
    // In a real production app, this might be a 404, but for smooth transition we can show a message
    // or just return notFound() if we strictly want to rely on CMS
    // For now, let's return a friendly message or the hardcoded content if we wanted to keep it as backup.
    // But the goal is migration, so let's show what's happening.
    return (
      <div className="container mx-auto px-6 pt-24 pb-12 max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-brand-gold mb-4">Content Migrating...</h1>
        <p className="text-gray-600 dark:text-gray-300">
          The content for this page is being moved to our new CMS. Please check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 pt-24 pb-12 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl md:text-5xl font-nunito font-bold text-brand-gold mb-8">
          {topic.title}
        </h1>

        {topic.content && <PortableText value={topic.content} />}

        {topic.quiz && (
          <div className="mt-16">
            <Quiz questions={topic.quiz.questions} title={topic.quiz.title} />
          </div>
        )}
      </div>
    </div>
  );
}
