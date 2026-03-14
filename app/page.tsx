import HeroSection from '@/components/HeroSection';
import TributeSection from '@/components/TributeSection';
import QuotesSection from '@/components/QuotesSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Saroj Vidyalaya — Joyful Learning for Curious Minds',
  },
  description: 'Saroj Vidyalaya is a tribute to Saroj Singh — an interactive learning platform covering Mathematics, English, Science, Geography, Coding, and General Knowledge.',
  alternates: {
    canonical: 'https://sarojvidyalaya.com',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TributeSection />
      <QuotesSection />
    </div>
  );
}