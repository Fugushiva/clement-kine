import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
  title: 'Clément Geneau — Kinésithérapeute & Ostéopathe à Bruxelles',
  description:
    'Kinésithérapeute et ostéopathe à Bruxelles. Séances de 60 minutes, double expertise ULB + D.O. IAO, expérience neurologique VALIDA. Prenez rendez-vous en ligne.',
  pathname: '/',
});

export default function HomePage() {
  return (
    <main id="main-content" className="flex-1">
      <h1 className="sr-only">Clément Geneau — Kinésithérapeute &amp; Ostéopathe à Bruxelles</h1>
      {/* TODO: Hero, Services, Trust, CTA sections — M3+ */}
    </main>
  );
}
