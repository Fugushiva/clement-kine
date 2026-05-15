import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
  title: 'Cabinets',
  description:
    'Retrouvez Clément Geneau dans ses deux cabinets à Bruxelles : Ixelles et Forest. Accès, horaires et informations pratiques.',
  pathname: '/cabinets',
});

export default function CabinetsPage() {
  return (
    <main id="main-content" className="flex-1 mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-semibold text-[var(--color-heading)] mb-6">
        Cabinets
      </h1>
      {/* TODO: Cartes cabinets, maps, horaires — M4+ */}
    </main>
  );
}
