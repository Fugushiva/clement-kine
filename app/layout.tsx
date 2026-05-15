import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { SITE_URL } from '@/lib/constants';
import {
  generatePhysicianSchema,
  generateLocalBusinessIxellesSchema,
  generateLocalBusinessEtterbeekSchema,
} from '@/lib/schemas';
import { RosaProvider } from '@/components/providers/RosaProvider';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  axes: ['opsz', 'SOFT', 'WONK'],
  weight: 'variable',
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Clément Geneau — Kinésithérapeute & Ostéopathe à Bruxelles',
    template: '%s | Clément Geneau',
  },
  description:
    'Kinésithérapeute et ostéopathe à Bruxelles. Séances de 60 minutes, double expertise ULB + D.O. IAO, expérience neurologique VALIDA. Prenez rendez-vous en ligne.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    url: SITE_URL,
    siteName: 'Clément Geneau — Kinésithérapie & Ostéopathie',
    title: 'Clément Geneau — Kinésithérapeute & Ostéopathe à Bruxelles',
    description:
      'Kinésithérapeute et ostéopathe à Bruxelles. Séances de 60 minutes, double expertise ULB + D.O. IAO, expérience neurologique VALIDA.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clément Geneau — Kinésithérapeute & Ostéopathe à Bruxelles',
    description:
      'Kinésithérapeute et ostéopathe à Bruxelles. Séances de 60 minutes, double expertise ULB + D.O. IAO.',
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const physicianSchema = generatePhysicianSchema();
  const localBusinessIxelles = generateLocalBusinessIxellesSchema();
  const localBusinessEtterbeek = generateLocalBusinessEtterbeekSchema();

  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessIxelles) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessEtterbeek) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface-default text-text-body antialiased">
        {/* Skip navigation — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-default)] focus:bg-[var(--color-brand-primary)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-text-on-brand)] focus:shadow-lg"
        >
          Aller au contenu principal
        </a>
        <RosaProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </RosaProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
