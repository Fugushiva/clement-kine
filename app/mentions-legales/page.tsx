import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Mentions légales | Clément Geneau',
  description:
    'Mentions légales du cabinet Clément Geneau — Kinésithérapie & Ostéopathie. INAMI 54366025517.',
  alternates: {
    canonical: `${SITE_URL}/mentions-legales`,
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function MentionsLegalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Mentions légales',
          }),
        }}
      />
      <section className="py-16 md:py-24 max-w-3xl mx-auto px-4">
        <h1 className="font-heading text-4xl text-[var(--color-heading)] mb-8">
          Mentions légales
        </h1>

        <div className="space-y-8 text-[var(--color-text-body)]">
          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">
              Éditeur du site
            </h2>
            <p>
              <strong>Nom :</strong> Clément Geneau
            </p>
            <p>
              <strong>Activité :</strong> Kinésithérapeute — Ostéopathe D.O. (indépendant libéral)
            </p>
            <p>
              <strong>INAMI :</strong> 54366025517
            </p>
            <p>
              <strong>BCE :</strong>{' '}
              <em className="text-[var(--color-text-muted)]">
                (numéro BCE à confirmer avec le praticien)
              </em>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">Cabinets</h2>
            <p>
              <strong>Cabinet Defacqz :</strong> Rue Defacqz 44, 1050 Ixelles, Belgique
            </p>
            <p>
              <strong>Cabinet Auderghem :</strong> Avenue d&apos;Auderghem 59C, 1040 Etterbeek,
              Belgique
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">Contact</h2>
            <p>
              <strong>Téléphone :</strong>{' '}
              <a
                href="tel:+32489636943"
                className="text-[var(--color-brand-primary)] hover:underline"
              >
                0489/63.69.43
              </a>
            </p>
            <p>
              <strong>Email :</strong>{' '}
              <a
                href="mailto:clement.geneau.kine@gmail.com"
                className="text-[var(--color-brand-primary)] hover:underline"
              >
                clement.geneau.kine@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">Hébergeur</h2>
            <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">
              Responsable de publication
            </h2>
            <p>Clément Geneau</p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">
              Autorité de contrôle
            </h2>
            <p>
              Autorité de protection des données (APD) belge —{' '}
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

          <div>
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-3">TVA</h2>
            <p>
              Non applicable (kinésithérapeute conventionné exonéré — à confirmer avec le
              praticien).
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
