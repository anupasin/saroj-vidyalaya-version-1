import { MetadataRoute } from 'next'
import { sanityFetch } from "@/sanity/lib/fetch";
import { COURSES_QUERY } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const courses = await sanityFetch<any[]>({ query: COURSES_QUERY });

    const courseRoutes = courses.map((course) => ({
        url: `https://saroj-vidyalaya.vercel.app/courses/${course.slug.current}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: 'https://saroj-vidyalaya.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://saroj-vidyalaya.vercel.app/courses',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://saroj-vidyalaya.vercel.app/topics',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://saroj-vidyalaya.vercel.app/topics/electrochemical-cells',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...courseRoutes,
    ]
}
