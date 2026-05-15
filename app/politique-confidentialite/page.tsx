import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Clément Geneau',
  description:
    'Politique de confidentialité et protection des données personnelles — Cabinet Clément Geneau, kinésithérapeute & ostéopathe à Bruxelles.',
  alternates: {
    canonical: `${SITE_URL}/politique-confidentialite`,
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Politique de confidentialité',
          }),
        }}
      />
      <section className="py-16 md:py-24 max-w-3xl mx-auto px-4">
        <h1 className="font-heading text-4xl text-[var(--color-heading)] mb-4">
          Politique de confidentialité
        </h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-8">
          Dernière mise à jour : 15 mai 2026
        </p>

        <div className="space-y-8 text-[var(--color-text-body)]">
          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">
              1. Responsable du traitement
            </h2>
            <p>
              <strong>Clément Geneau</strong>, kinésithérapeute — ostéopathe D.O. (indépendant
              libéral), INAMI 54366025517.
            </p>
            <p className="mt-2">
              Contact :{' '}
              <a
                href="mailto:clement.geneau.kine@gmail.com"
                className="text-[var(--color-brand-primary)] hover:underline"
              >
                clement.geneau.kine@gmail.com
              </a>{' '}
              —{' '}
              <a
                href="tel:+32489636943"
                className="text-[var(--color-brand-primary)] hover:underline"
              >
                0489/63.69.43
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">
              2. Données collectées
            </h2>
            <ul className="list-disc list-inside space-y-1 text-[var(--color-text-body)]">
              <li>
                <strong>Données de prise de rendez-vous</strong> : collectées via Rosa.be (tiers
                indépendant). Clément Geneau n&apos;a pas accès direct à ces données en dehors de
                la plateforme Rosa.
              </li>
              <li>
                <strong>Données analytiques anonymes</strong> : mesure d&apos;audience via Vercel
                Analytics (données agrégées, sans identification personnelle).
              </li>
              <li>
                <strong>Données de performance</strong> : Core Web Vitals via Vercel Speed Insights
                (données techniques anonymes).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">
              3. Finalités du traitement
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Permettre la prise de rendez-vous en ligne (via Rosa.be)</li>
              <li>Mesurer l&apos;audience du site de manière anonymisée</li>
              <li>Améliorer les performances techniques du site</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">
              4. Base légale
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Consentement</strong> (art. 6.1.a RGPD) : pour les cookies analytiques
                Vercel Analytics
              </li>
              <li>
                <strong>Intérêt légitime</strong> (art. 6.1.f RGPD) : pour la mesure
                d&apos;audience anonyme et les données de performance agrégées
              </li>
              <li>
                <strong>Exécution d&apos;un contrat</strong> (art. 6.1.b RGPD) : pour les données
                de rendez-vous via Rosa.be
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">
              5. Durée de conservation
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Données de rendez-vous</strong> : selon la politique de conservation de
                Rosa.be (consultez{' '}
                <a
                  href="https://www.rosa.be/fr/privacy"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-[var(--color-brand-primary)] hover:underline"
                >
                  rosa.be/fr/privacy
                </a>
                )
              </li>
              <li>
                <strong>Analytics agrégés</strong> : 90 jours (Vercel Analytics)
              </li>
              <li>
                <strong>Données de performance</strong> : durée de session (Vercel Speed Insights)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">
              6. Destinataires des données
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Rosa.be</strong> (Belgique) — plateforme de prise de rendez-vous médicaux
              </li>
              <li>
                <strong>Vercel Inc.</strong> (USA) — hébergeur du site et fournisseur
                d&apos;analytics
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">
              7. Transferts hors Union européenne
            </h2>
            <p>
              Vercel Inc. est établi aux États-Unis. Les transferts de données vers Vercel sont
              encadrés par des <strong>clauses contractuelles types (SCCs)</strong> approuvées par
              la Commission européenne, conformément à l&apos;article 46 du RGPD.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">
              8. Vos droits
            </h2>
            <p className="mb-2">
              Conformément au RGPD, vous disposez des droits suivants concernant vos données
              personnelles :
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Droit d&apos;accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
              <li>Droit au retrait du consentement à tout moment</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez :{' '}
              <a
                href="mailto:clement.geneau.kine@gmail.com"
                className="text-[var(--color-brand-primary)] hover:underline"
              >
                clement.geneau.kine@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">
              9. Réclamation auprès de l&apos;APD
            </h2>
            <p>
              Si vous estimez que le traitement de vos données ne respecte pas le RGPD, vous avez
              le droit d&apos;introduire une réclamation auprès de l&apos;Autorité de protection
              des données (APD) belge :{' '}
              <a
                href="https://www.autoriteprotectiondonnees.be"
                rel="noopener noreferrer"
                target="_blank"
                className="text-[var(--color-brand-primary)] hover:underline"
              >
                www.autoriteprotectiondonnees.be
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
