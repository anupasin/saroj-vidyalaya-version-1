import HeroSection from '@/components/HeroSection';
import TributeSection from '@/components/TributeSection';
import QuotesSection from '@/components/QuotesSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Saroj Vidyalaya, a platform for joyful learning.",
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