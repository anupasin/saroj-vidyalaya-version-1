import { client } from '@/lib/sanity.client';
import { CustomPortableText } from '@/components/CustomPortableText';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { baseUrl } from '@/lib/constants/site';
import { auth } from '@clerk/nextjs/server';
import { AuthGate } from '@/components/AuthGate';

const query = `
  *[_type == "horizon" && slug.current == $slug][0] {
    title,
    summary,
    body,
    branch,
    icon,
    publishedAt,
    featured
  }
`;

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const horizons = await client.fetch(`*[_type == "horizon"]{ "slug": slug.current }`);
    return horizons.map((h: any) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const data = await client.fetch(query, { slug });

    if (!data) return { title: 'Not Found' };

    return {
        title: data.title,
        description: data.summary ?? '',
        alternates: {
            canonical: `${baseUrl}/horizons/${slug}`,
        },
        openGraph: {
            title: data.title,
            description: data.summary ?? '',
            url: `${baseUrl}/horizons/${slug}`,
            type: 'article',
            publishedTime: data.publishedAt,
        },
    };
}

function formatDate(datetime: string) {
    return new Date(datetime).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default async function HorizonPage({ params }: PageProps) {
    const { slug } = await params;
    const data = await client.fetch(query, { slug });

    if (!data) return notFound();

    const { userId } = await auth();

    const HorizonContent = () => (
        <div className="container mx-auto px-6 pt-24 pb-12 max-w-3xl">
            <Link
                href="/horizons"
                className="text-sm text-muted-foreground hover:text-brand-gold transition-colors font-sans mb-8 inline-block"
            >
                ← New Horizons
            </Link>

            <article className="prose prose-lg dark:prose-invert max-w-none">
                <div className="flex items-center gap-3 mb-4 not-prose">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-brand-gold/20 text-brand-gold font-nunito capitalize">
                        {data.branch?.replace('-', ' ')}
                    </span>
                    <span className="text-xs text-muted-foreground font-sans">
                        {formatDate(data.publishedAt)}
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-nunito font-bold text-brand-gold mb-4 not-prose">
                    {data.icon && <span className="mr-3">{data.icon}</span>}
                    {data.title}
                </h1>

                <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8 not-prose border-l-4 border-brand-gold/40 pl-4">
                    {data.summary}
                </p>

                {data.body && <CustomPortableText value={data.body} />}
            </article>
        </div>
    );

    if (!userId) {
        return (
            <>
                <div className="blur-sm pointer-events-none select-none">
                    <HorizonContent />
                </div>
                <AuthGate lessonTitle={data.title} />
            </>
        );
    }

    return <HorizonContent />;
}