import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
  title: 'À propos',
  description:
    'Découvrez le parcours de Clément Geneau, kinésithérapeute et ostéopathe diplômé de l\'ULB et de l\'IAO, avec une expérience en neurologie au centre VALIDA.',
  pathname: '/a-propos',
});

export default function AProposPage() {
  return (
    <main id="main-content" className="flex-1 mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-semibold text-[var(--color-heading)] mb-6">
        À propos
      </h1>
      {/* TODO: Biographie, formation ULB + IAO, VALIDA, photo — M4+ */}
    </main>
  );
}
