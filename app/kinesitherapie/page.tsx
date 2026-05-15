import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
  title: 'Kinésithérapie',
  description:
    'Séances de kinésithérapie à Bruxelles avec Clément Geneau, kinésithérapeute diplômé ULB. Rééducation, neurologie, sport.',
  pathname: '/kinesitherapie',
});

export default function KinesitherapiePage() {
  return (
    <main id="main-content" className="flex-1 mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-semibold text-[var(--color-heading)] mb-6">
        Kinésithérapie
      </h1>
      {/* TODO: Description, spécialités, rééducation neurologique VALIDA — M4+ */}
    </main>
  );
}
