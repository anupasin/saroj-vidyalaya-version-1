import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity.client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Update this to your production domain
    const baseUrl = 'https://sarojvidyalaya.com'

    // 1. Fetch dynamic routes from Sanity
    const coursesPromise = client.fetch(`*[_type == "course"]{ "slug": subject.current, _updatedAt }`)
    const topicsPromise = client.fetch(`*[_type == "topic"]{ "slug": slug.current, _updatedAt }`)

    const [courses, topics] = await Promise.all([coursesPromise, topicsPromise])

    // 2. Build Course URLs
    const courseUrls = courses.map((course: any) => ({
        url: `${baseUrl}/courses/${course.slug}`,
        lastModified: new Date(course._updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // 3. Build Topic URLs
    const topicUrls = topics.map((topic: any) => ({
        url: `${baseUrl}/topic/${topic.slug}`,
        lastModified: new Date(topic._updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // 4. Return full sitemap
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/courses`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...courseUrls,
        ...topicUrls,
    ]
}