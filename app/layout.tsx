import Navbar from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { baseUrl } from '@/lib/constants/site';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s | Saroj Vidyalaya',
    default: 'Saroj Vidyalaya — Joyful Learning',
  },
  description: 'A heartfelt tribute to Saroj Singh offering curiosity-driven, interactive online courses in English, Geography, Science, Mathematics, Coding, and General Knowledge. Joyful, accessible learning with quizzes for curious minds.',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Saroj Vidyalaya',
    description: 'Joyful and accessible learning resources for curious minds — a tribute to Saroj Singh.',
    url: baseUrl,
    siteName: 'Saroj Vidyalaya',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Saroj Vidyalaya — Joyful Learning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saroj Vidyalaya',
    description: 'Joyful and accessible learning resources for curious minds — a tribute to Saroj Singh.',
    images: ['/og-default.png'],
  },
  icons: {
    icon: '/lotus.png',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Saroj Vidyalaya",
  "url": baseUrl,
  "description": "A warm, curiosity-first educational platform and tribute to Saroj Singh, making learning engaging with analogies, metaphors, and interactive lessons.",
  "logo": `${baseUrl}/lotus.png`,
  "founder": {
    "@type": "Person",
    "name": "Anupam",
    "description": "Creator of Saroj Vidyalaya as a loving tribute to his mother, Saroj Singh"
  },
  "sameAs": [
    "https://sarojvidyalaya.com"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#D4AF37',
          colorBackground: '#FAF6F0',
          colorInputBackground: '#FFFFFF',
          colorInputText: '#1F2937',
          fontFamily: 'var(--font-nunito), -apple-system, BlinkMacSystemFont, sans-serif',
          borderRadius: '0.5rem',
        },
        elements: {
          formButtonPrimary: 'bg-brand-gold hover:bg-brand-gold/90 text-white font-nunito font-medium',
          card: 'bg-white shadow-xl border-2 border-brand-gold/30 rounded-lg',
          headerTitle: 'text-brand-gold font-nunito font-bold',
          headerSubtitle: 'text-gray-700 font-nunito',
          socialButtonsBlockButton: 'border-brand-gold/30 hover:bg-brand-gold/5 font-nunito',
          formFieldInput: 'border-brand-gold/30 focus:border-brand-gold focus:ring-brand-gold/20',
          footerActionLink: 'text-brand-gold hover:text-brand-gold/80 font-nunito font-medium',
          identityPreviewText: 'font-nunito',
          formFieldLabel: 'text-gray-700 font-nunito font-medium',
        },
      }}
    >
      <html lang="en">
        <body className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}