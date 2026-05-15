import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { INAMI } from '@/lib/constants';

export const metadata: Metadata = genMeta({
  title: 'Mentions légales',
  description: 'Mentions légales du site de Clément Geneau, kinésithérapeute et ostéopathe à Bruxelles.',
  pathname: '/mentions-legales',
});

export default function MentionsLegalesPage() {
  return (
    <main id="main-content" className="flex-1 mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-semibold text-[var(--color-heading)] mb-8">
        Mentions légales
      </h1>

      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-[var(--color-heading)] mb-4">
          Éditeur du site
        </h2>
        <p className="text-[var(--color-text-body)] mb-2">
          <strong>Clément Geneau</strong><br />
          Kinésithérapeute — Ostéopathe<br />
          Numéro INAMI : {INAMI}
        </p>
        <p className="text-[var(--color-text-body)] mb-2">
          <strong>Cabinet Ixelles</strong><br />
          Rue de la Brasserie 89, 1050 Ixelles
        </p>
        <p className="text-[var(--color-text-body)] mb-2">
          <strong>Cabinet Forest</strong><br />
          Avenue du Globe 1, 1190 Forest
        </p>
        <p className="text-[var(--color-text-body)] mb-2">
          Téléphone : <a href="tel:+32489636943" className="text-[var(--color-brand-primary)] hover:underline">0489/63.69.43</a><br />
          Email : <a href="mailto:clement.geneau.kine@gmail.com" className="text-[var(--color-brand-primary)] hover:underline">clement.geneau.kine@gmail.com</a>
        </p>
        <p className="text-[var(--color-text-muted)] text-sm">
          {/* TODO: Numéro BCE à compléter */}
          Numéro BCE : à compléter
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-[var(--color-heading)] mb-4">
          Hébergeur
        </h2>
        <p className="text-[var(--color-text-body)]">
          <strong>Vercel Inc.</strong><br />
          440 N Barranca Ave #4133<br />
          Covina, CA 91723, États-Unis<br />
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand-primary)] hover:underline">vercel.com</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-[var(--color-heading)] mb-4">
          Propriété intellectuelle
        </h2>
        <p className="text-[var(--color-text-body)]">
          L&apos;ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive
          de Clément Geneau, sauf mention contraire. Toute reproduction est interdite sans
          autorisation préalable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-[var(--color-heading)] mb-4">
          Responsabilité
        </h2>
        <p className="text-[var(--color-text-body)]">
          Les informations présentes sur ce site sont fournies à titre indicatif et ne
          constituent pas un avis médical. Consultez un professionnel de santé pour tout
          diagnostic ou traitement.
        </p>
      </section>
    </main>
  );
}
