import { Clock, CheckCircle } from 'lucide-react'

const benefits = [
  'Anamnèse complète sans précipitation',
  'Bilan postural et fonctionnel approfondi',
  'Traitement global, pas seulement la zone douloureuse',
  'Temps pour les conseils posturaux et exercices',
  'Suivi de l\'évolution depuis la dernière séance',
]

export function OsteoWhy60() {
  return (
    <section
      aria-label="Pourquoi des séances de 60 minutes"
      className="bg-[var(--color-surface-muted)] py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[var(--color-brand-primary)] bg-opacity-10">
              <Clock
                size={48}
                strokeWidth={1.5}
                className="text-[var(--color-brand-primary)]"
                aria-hidden="true"
              />
            </div>
          </div>
          <div>
            <h2 className="mb-4 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
              Pourquoi 60 minutes ?
            </h2>
            <p className="mb-6 text-lg text-[var(--color-text-muted)]">
              La plupart des ostéopathes travaillent en 30 à 45 minutes. Clément
              a fait le choix des séances longues pour une raison simple : le
              corps a besoin de temps pour répondre au traitement.
            </p>
            <ul className="space-y-3" role="list">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-[var(--color-brand-secondary)]"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[var(--color-text-body)]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
