import { Bone, Heart, Brain, Zap } from 'lucide-react'

const approaches = [
  {
    icon: Bone,
    title: 'Structurelle',
    description:
      'Traitement des restrictions de mobilité articulaire, musculaire et ligamentaire. Techniques de manipulation et de mobilisation douces.',
  },
  {
    icon: Heart,
    title: 'Viscérale',
    description:
      'Travail sur les organes internes et leurs fascias pour restaurer la mobilité viscérale et améliorer les fonctions digestives et respiratoires.',
  },
  {
    icon: Brain,
    title: 'Crânio-sacrée',
    description:
      'Approche subtile du système crânio-sacré pour traiter les céphalées, migraines, troubles de l\'ATM et stress chronique.',
  },
  {
    icon: Zap,
    title: 'Fasciale',
    description:
      'Libération des tensions dans les fascias, ces membranes qui enveloppent tous les organes et structures du corps.',
  },
]

export function OsteoApproaches() {
  return (
    <section
      aria-label="Approches ostéopathiques"
      className="bg-[var(--color-surface-muted)] py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
          4 approches D.O. complémentaires
        </h2>
        <p className="mb-12 text-center text-lg text-[var(--color-text-muted)]">
          Chaque séance combine les techniques adaptées à votre situation.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approaches.map((approach) => {
            const Icon = approach.icon
            return (
              <div
                key={approach.title}
                className="rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand-primary)] bg-opacity-10">
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-[var(--color-brand-primary)]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-[var(--color-heading)]">
                  {approach.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {approach.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
