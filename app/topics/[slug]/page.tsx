
import React from 'react'
import { client } from '@/lib/sanity.client'
import { CustomPortableText } from '@/components/CustomPortableText'
import { notFound } from 'next/navigation'

// 1. Define the query to fetch this specific topic by slug
const query = `
  *[_type == "topic" && slug.current == $slug][0] {
    title,
    body
  }
`

interface PageProps {
  params: Promise<{ slug: string }>
}

// 2. This is an async Server Component
export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params
  
  // Fetch data directly from Sanity
  const data = await client.fetch(query, { slug })

  if (!data) {
    return notFound()
  }

  return (
    <div className="container mx-auto px-6 pt-24 pb-12 max-w-4xl">
      <article className="prose prose-lg dark:prose-invert max-w-none">
        
        {/* The Title */}
        <h1 className="text-4xl md:text-5xl font-nunito font-bold text-brand-gold mb-8">
          {data.title}
        </h1>

        {/* The Content (Text, Images, Quizzes all handled here) */}
        <CustomPortableText value={data.body} />

      </article>
    </div>
  )
}
