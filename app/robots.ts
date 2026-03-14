import { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/constants/site';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/dashboard', '/api/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}