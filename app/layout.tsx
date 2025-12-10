import Navbar from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Saroj Vidyalaya',
    default: 'Saroj Vidyalaya - Joyful Learning',
  },
  description: 'A tribute to Saroj Singh, offering joyful and accessible learning resources.',
  openGraph: {
    title: 'Saroj Vidyalaya',
    description: 'Joyful and accessible learning resources.',
    url: 'https://saroj-vidyalaya.vercel.app', // Replace with actual URL if known, or localhost for now
    siteName: 'Saroj Vidyalaya',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/lotus.png',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}