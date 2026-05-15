import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
  title: 'Politique cookies',
  description: 'Politique d\'utilisation des cookies sur le site de Clément Geneau.',
  pathname: '/politique-cookies',
});

export default function PolitiqueCookiesPage() {
  return (
    <main id="main-content" className="flex-1 mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-semibold text-[var(--color-heading)] mb-8">
        Politique cookies
      </h1>

      <p className="text-[var(--color-text-body)] mb-8">
        Ce site utilise des cookies et technologies similaires. Vous pouvez gérer vos
        préférences à tout moment via le bouton &quot;Gérer mes cookies&quot; en bas de page.
      </p>

      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-[var(--color-heading)] mb-4">
          Cookies utilisés
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--color-border-default)]">
                <th className="text-left py-3 pr-4 font-semibold text-[var(--color-heading)]">Nom</th>
                <th className="text-left py-3 pr-4 font-semibold text-[var(--color-heading)]">Fournisseur</th>
                <th className="text-left py-3 pr-4 font-semibold text-[var(--color-heading)]">Finalité</th>
                <th className="text-left py-3 font-semibold text-[var(--color-heading)]">Durée</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-default)]">
              <tr>
                <td className="py-3 pr-4 text-[var(--color-text-body)]">_vercel_analytics</td>
                <td className="py-3 pr-4 text-[var(--color-text-muted)]">Vercel Analytics</td>
                <td className="py-3 pr-4 text-[var(--color-text-muted)]">Mesure d&apos;audience anonymisée</td>
                <td className="py-3 text-[var(--color-text-muted)]">Session</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-[var(--color-text-body)]">_vercel_speed</td>
                <td className="py-3 pr-4 text-[var(--color-text-muted)]">Vercel Speed Insights</td>
                <td className="py-3 pr-4 text-[var(--color-text-muted)]">Performance du site</td>
                <td className="py-3 text-[var(--color-text-muted)]">Session</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-[var(--color-text-body)]">rosa_session</td>
                <td className="py-3 pr-4 text-[var(--color-text-muted)]">Rosa.be</td>
                <td className="py-3 pr-4 text-[var(--color-text-muted)]">Prise de rendez-vous en ligne</td>
                <td className="py-3 text-[var(--color-text-muted)]">Session</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-[var(--color-text-body)]">cookie-consent</td>
                <td className="py-3 pr-4 text-[var(--color-text-muted)]">Ce site</td>
                <td className="py-3 pr-4 text-[var(--color-text-muted)]">Mémorisation de vos préférences cookies</td>
                <td className="py-3 text-[var(--color-text-muted)]">1 an</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-[var(--color-heading)] mb-4">
          Gestion de vos préférences
        </h2>
        <p className="text-[var(--color-text-body)]">
          Vous pouvez modifier vos préférences à tout moment en cliquant sur &quot;Gérer mes
          cookies&quot; dans le pied de page, ou en vidant les données de votre navigateur.
        </p>
      </section>
    </main>
  );
}
