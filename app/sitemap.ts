import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity.client';
import { baseUrl } from '@/lib/constants/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const [courses, topics, horizons] = await Promise.all([
        client.fetch(`*[_type == "course"]{ "slug": subject.current, _updatedAt }`),
        client.fetch(`*[_type == "topic"]{ "slug": slug.current, _updatedAt }`),
        client.fetch(`*[_type == "horizon"]{ "slug": slug.current, _updatedAt }`),
    ]);

    const courseUrls = courses.map((c: any) => ({
        url: `${baseUrl}/courses/${c.slug}`,
        lastModified: new Date(c._updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const topicUrls = topics.map((t: any) => ({
        url: `${baseUrl}/topics/${t.slug}`,   // fixed: was /topic/
        lastModified: new Date(t._updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const horizonUrls = horizons.map((h: any) => ({
        url: `${baseUrl}/horizons/${h.slug}`,
        lastModified: new Date(h._updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

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
        {
            url: `${baseUrl}/topics`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/horizons`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        ...courseUrls,
        ...topicUrls,
        ...horizonUrls,
    ];
}