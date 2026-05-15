import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
  title: 'Ostéopathie',
  description:
    'Consultations d\'ostéopathie à Bruxelles avec Clément Geneau, D.O. IAO. Approche globale du corps, séances de 60 minutes.',
  pathname: '/osteopathie',
});

export default function OsteopathiePage() {
  return (
    <main id="main-content" className="flex-1 mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-semibold text-[var(--color-heading)] mb-6">
        Ostéopathie
      </h1>
      {/* TODO: Description, techniques, indications, tarifs — M4+ */}
    </main>
  );
}
