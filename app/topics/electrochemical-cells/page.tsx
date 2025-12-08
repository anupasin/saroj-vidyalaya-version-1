import React from 'react'
import { client } from '@/lib/sanity.client'
import { CustomPortableText } from '@/components/CustomPortableText'
import { notFound } from 'next/navigation'

// 1. Define the query to fetch this specific topic
const query = `
  *[_type == "topic" && slug.current == "electrochemical-cells"][0] {
    title,
    body
  }
`

// 2. This is now an async Server Component
export default async function ElectrochemicalCellsPage() {
  // Fetch data directly from Sanity
  const data = await client.fetch(query)

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