import { HorizonCard } from '@/components/HorizonCard';
import { client } from '@/lib/sanity.client';
import type { Metadata } from 'next';

export const revalidate = 0;

export const metadata: Metadata = {
    title: 'New Horizons',
    description: 'Fresh insight cards from the edges of science, mathematics, technology, and human thought.',
    alternates: {
        canonical: 'https://sarojvidyalaya.com/horizons',
    },
};

const query = `
  *[_type == "horizon"] | order(featured desc, publishedAt desc) {
    title,
    slug,
    summary,
    branch,
    icon,
    publishedAt,
    featured
  }
`;

export default async function HorizonsPage() {
    const horizons = await client.fetch(query);

    return (
        <div className="container mx-auto px-6 pt-24 pb-12">
            <div className="mb-10 text-center">
                <h1 className="text-3xl md:text-4xl font-nunito font-bold text-brand-gold mb-3">
                    New Horizons
                </h1>
                <p className="text-muted-foreground font-sans max-w-xl mx-auto">
                    Fresh insight cards from the edges of science, mathematics, technology, and human thought.
                </p>
            </div>

            {horizons.length === 0 ? (
                <p className="text-center text-muted-foreground font-sans">
                    Nothing here yet. The first horizon is coming soon.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {horizons.map((h: any) => (
                        <div key={h.slug.current} className="flex">
                            <HorizonCard
                                title={h.title}
                                summary={h.summary}
                                slug={h.slug.current}
                                branch={h.branch}
                                icon={h.icon}
                                publishedAt={h.publishedAt}
                                featured={h.featured}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}