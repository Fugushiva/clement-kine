import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Politique de cookies | Clément Geneau',
  description:
    'Politique d\'utilisation des cookies — Cabinet Clément Geneau, kinésithérapeute & ostéopathe à Bruxelles.',
  alternates: {
    canonical: `${SITE_URL}/politique-cookies`,
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function PolitiqueCookiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Politique de cookies',
          }),
        }}
      />
      <section className="py-16 md:py-24 max-w-3xl mx-auto px-4">
        <h1 className="font-heading text-4xl text-[var(--color-heading)] mb-4">
          Politique de cookies
        </h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-8">
          Dernière mise à jour : 15 mai 2026
        </p>

        <div className="space-y-8 text-[var(--color-text-body)]">
          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">
              Qu&apos;est-ce qu&apos;un cookie ?
            </h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite
              d&apos;un site web. Il permet au site de mémoriser vos préférences ou de mesurer
              l&apos;audience.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">
              Cookies utilisés sur ce site
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-border-default)]">
                    <th className="text-left py-2 pr-4 font-semibold text-[var(--color-heading)]">
                      Cookie / Service
                    </th>
                    <th className="text-left py-2 pr-4 font-semibold text-[var(--color-heading)]">
                      Type
                    </th>
                    <th className="text-left py-2 pr-4 font-semibold text-[var(--color-heading)]">
                      Finalité
                    </th>
                    <th className="text-left py-2 font-semibold text-[var(--color-heading)]">
                      Durée
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border-default)]">
                  <tr>
                    <td className="py-3 pr-4 font-medium">Vercel Analytics</td>
                    <td className="py-3 pr-4 text-[var(--color-text-muted)]">
                      Analytique agrégé
                    </td>
                    <td className="py-3 pr-4 text-[var(--color-text-muted)]">
                      Mesure d&apos;audience anonyme
                    </td>
                    <td className="py-3 text-[var(--color-text-muted)]">90 jours</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Vercel Speed Insights</td>
                    <td className="py-3 pr-4 text-[var(--color-text-muted)]">Performance</td>
                    <td className="py-3 pr-4 text-[var(--color-text-muted)]">
                      Mesure des Core Web Vitals
                    </td>
                    <td className="py-3 text-[var(--color-text-muted)]">Session</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Rosa.be</td>
                    <td className="py-3 pr-4 text-[var(--color-text-muted)]">
                      Tiers (iframe RDV)
                    </td>
                    <td className="py-3 pr-4 text-[var(--color-text-muted)]">
                      Prise de rendez-vous
                    </td>
                    <td className="py-3 text-[var(--color-text-muted)]">
                      Selon politique Rosa.be
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">cookie-consent</td>
                    <td className="py-3 pr-4 text-[var(--color-text-muted)]">Nécessaire</td>
                    <td className="py-3 pr-4 text-[var(--color-text-muted)]">
                      Mémorisation de vos préférences cookies
                    </td>
                    <td className="py-3 text-[var(--color-text-muted)]">1 an</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">
              Gérer vos préférences
            </h2>
            <p className="mb-3">
              Vous pouvez modifier vos préférences à tout moment en cliquant sur{' '}
              <strong>« Gérer mes cookies »</strong> dans le pied de page du site.
            </p>
            <p className="mb-3">
              Vous pouvez également refuser les cookies directement depuis votre navigateur :
            </p>
            <ul className="list-disc list-inside space-y-1 text-[var(--color-text-muted)]">
              <li>
                <strong className="text-[var(--color-text-body)]">Chrome</strong> : Paramètres →
                Confidentialité et sécurité → Cookies et autres données de sites
              </li>
              <li>
                <strong className="text-[var(--color-text-body)]">Firefox</strong> : Paramètres →
                Vie privée et sécurité → Cookies et données de sites
              </li>
              <li>
                <strong className="text-[var(--color-text-body)]">Safari</strong> : Préférences →
                Confidentialité → Gérer les données de sites web
              </li>
              <li>
                <strong className="text-[var(--color-text-body)]">Edge</strong> : Paramètres →
                Cookies et autorisations de site → Cookies et données de site
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">Contact</h2>
            <p>
              Pour toute question relative à l&apos;utilisation des cookies :{' '}
              <a
                href="mailto:clement.geneau.kine@gmail.com"
                className="text-[var(--color-brand-primary)] hover:underline"
              >
                clement.geneau.kine@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
