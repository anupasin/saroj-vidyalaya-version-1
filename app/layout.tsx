import Navbar from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: {
    template: '%s | Saroj Vidyalaya',
    default: 'Saroj Vidyalaya - Joyful Learning',
  },
  description: 'A tribute to Saroj Singh, offering joyful and accessible learning resources.',
  openGraph: {
    title: 'Saroj Vidyalaya',
    description: 'Joyful and accessible learning resources.',
    url: 'https://saroj-vidyalaya.vercel.app',
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
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#D4AF37', // brand-gold
          colorBackground: '#FAF6F0', // brand-beige
          colorInputBackground: '#FFFFFF',
          colorInputText: '#1F2937',
          fontFamily: 'var(--font-nunito), -apple-system, BlinkMacSystemFont, sans-serif',
          borderRadius: '0.5rem',
        },
        elements: {
          formButtonPrimary:
            'bg-brand-gold hover:bg-brand-gold/90 text-white font-nunito font-medium',
          card:
            'bg-white shadow-xl border-2 border-brand-gold/30 rounded-lg',
          headerTitle:
            'text-brand-gold font-nunito font-bold',
          headerSubtitle:
            'text-gray-700 font-nunito',
          socialButtonsBlockButton:
            'border-brand-gold/30 hover:bg-brand-gold/5 font-nunito',
          formFieldInput:
            'border-brand-gold/30 focus:border-brand-gold focus:ring-brand-gold/20',
          footerActionLink:
            'text-brand-gold hover:text-brand-gold/80 font-nunito font-medium',
          identityPreviewText:
            'font-nunito',
          formFieldLabel:
            'text-gray-700 font-nunito font-medium',
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
        </body>
      </html>
    </ClerkProvider>
  );
}