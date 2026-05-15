import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles — Clément Geneau.',
  pathname: '/politique-confidentialite',
});

export default function PolitiqueConfidentialitePage() {
  return (
    <main id="main-content" className="flex-1 mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-semibold text-[var(--color-heading)] mb-8">
        Politique de confidentialité
      </h1>

      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-[var(--color-heading)] mb-4">
          Responsable du traitement
        </h2>
        <p className="text-[var(--color-text-body)]">
          Clément Geneau, kinésithérapeute-ostéopathe, est responsable du traitement de vos
          données personnelles collectées via ce site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-[var(--color-heading)] mb-4">
          Données collectées
        </h2>
        <p className="text-[var(--color-text-body)] mb-2">
          Ce site peut collecter les données suivantes :
        </p>
        <ul className="list-disc list-inside text-[var(--color-text-body)] space-y-1">
          <li>Données de navigation anonymisées (via Vercel Analytics)</li>
          <li>Données de prise de rendez-vous (via Rosa.be, soumises à leur propre politique)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-[var(--color-heading)] mb-4">
          Finalités et base légale
        </h2>
        <p className="text-[var(--color-text-body)]">
          Les données sont traitées pour améliorer l&apos;expérience utilisateur (intérêt légitime)
          et faciliter la prise de rendez-vous (exécution d&apos;un contrat). Aucune donnée n&apos;est
          vendue à des tiers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-[var(--color-heading)] mb-4">
          Vos droits (RGPD)
        </h2>
        <p className="text-[var(--color-text-body)] mb-2">
          Conformément au RGPD, vous disposez des droits suivants :
        </p>
        <ul className="list-disc list-inside text-[var(--color-text-body)] space-y-1">
          <li>Droit d&apos;accès à vos données</li>
          <li>Droit de rectification</li>
          <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité</li>
          <li>Droit d&apos;opposition</li>
        </ul>
        <p className="text-[var(--color-text-body)] mt-3">
          Pour exercer ces droits, contactez :{' '}
          <a href="mailto:clement.geneau.kine@gmail.com" className="text-[var(--color-brand-primary)] hover:underline">
            clement.geneau.kine@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-[var(--color-heading)] mb-4">
          Autorité de contrôle
        </h2>
        <p className="text-[var(--color-text-body)]">
          Vous pouvez introduire une réclamation auprès de l&apos;Autorité de Protection des Données :{' '}
          <a
            href="https://www.autoriteprotectiondonnees.be"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-brand-primary)] hover:underline"
          >
            www.autoriteprotectiondonnees.be
          </a>
        </p>
      </section>
    </main>
  );
}
