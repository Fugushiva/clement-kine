import { Monitor, RefreshCw, Video } from 'lucide-react'

const features = [
  {
    icon: Monitor,
    title: 'Accès en ligne',
    description: 'Votre programme disponible 24h/24 depuis votre smartphone ou ordinateur.',
  },
  {
    icon: Video,
    title: 'Vidéos démonstratives',
    description: 'Chaque exercice illustré en vidéo pour une exécution correcte.',
  },
  {
    icon: RefreshCw,
    title: 'Mis à jour à chaque séance',
    description: 'Le programme évolue avec votre progression et vos objectifs.',
  },
]

export function KineExerciseProgram() {
  return (
    <section
      aria-label="Programme d'exercices en ligne"
      className="py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-4 inline-block rounded-full bg-[var(--color-brand-secondary)] bg-opacity-10 px-3 py-1 text-xs font-medium text-[var(--color-brand-secondary)]">
              Différenciateur tech
            </span>
            <h2 className="mb-4 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
              Votre programme d&apos;exercices en ligne
            </h2>
            <p className="mb-6 text-lg text-[var(--color-text-muted)]">
              Entre les séances, continuez votre rééducation avec un programme
              personnalisé accessible en ligne. Pas de papier, pas d&apos;oubli.
            </p>
            <p className="mb-8 text-sm text-[var(--color-text-muted)]">
              {/* TODO: lien plateforme exercices */}
              Plateforme en cours de déploiement — disponible prochainement.
            </p>
          </div>
          <div className="grid gap-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-secondary)] bg-opacity-10">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-[var(--color-brand-secondary)]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="mb-1 font-heading text-base font-semibold text-[var(--color-heading)]">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
