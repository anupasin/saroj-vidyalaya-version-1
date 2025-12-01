import { MetadataRoute } from 'next'
import { getAllCourses } from '@/lib/data/get-all-courses'

export default function sitemap(): MetadataRoute.Sitemap {
    const courses = getAllCourses()

    const courseRoutes = courses.map((course) => ({
        url: `https://saroj-vidyalaya.vercel.app/courses/${course.subject}`,
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
