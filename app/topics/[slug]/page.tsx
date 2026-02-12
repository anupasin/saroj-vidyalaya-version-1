import React from 'react'
import { client } from '@/lib/sanity.client'
import { CustomPortableText } from '@/components/CustomPortableText'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'
import { AuthGate } from '@/components/AuthGate'

// Query to fetch topic with related topics
const query = `
  *[_type == "topic" && slug.current == $slug][0] {
    title,
    body,
    relatedTopics[]-> {
      title,
      slug,
      description,
      icon
    }
  }
`

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params

  const data = await client.fetch(query, { slug })

  if (!data) {
    return notFound()
  }

  const { userId } = await auth();

  // Define the topic content component
  const TopicContent = () => (
    <div className="container mx-auto px-6 pt-24 pb-12 max-w-4xl">
      <article className="prose prose-lg dark:prose-invert max-w-none">

        {/* The Title */}
        <h1 className="text-4xl md:text-5xl font-nunito font-bold text-brand-gold mb-8">
          {data.title}
        </h1>

        {/* The Content */}
        <CustomPortableText value={data.body} />

      </article>

      {/* Related Topics Section */}
      {data.relatedTopics && data.relatedTopics.length > 0 && (
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-nunito font-semibold text-foreground mb-6">
            Continue Exploring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.relatedTopics.map((topic: any) => (
              <Link
                key={topic.slug.current}
                href={`/topics/${topic.slug.current}`}
                className="group block p-6 bg-secondary/10 hover:bg-secondary/20 rounded-lg border border-secondary/30 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{topic.icon || "📖"}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-nunito font-semibold text-foreground group-hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // If not authenticated, show blurred content WITH auth gate overlay
  if (!userId) {
    return (
      <>
        <div className="blur-sm pointer-events-none select-none">
          <TopicContent />
        </div>
        <AuthGate lessonTitle={data.title} />
      </>
    );
  }

  // User is authenticated - show content without overlay
  return <TopicContent />;
}