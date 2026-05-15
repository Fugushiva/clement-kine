import { Clock, Layers, Brain } from 'lucide-react'

const wedges = [
  {
    icon: Clock,
    title: '60 minutes par séance',
    description:
      'Des séances longues pour un traitement complet, sans précipitation.',
  },
  {
    icon: Layers,
    title: 'Double expertise kiné + ostéo',
    description:
      'Kinésithérapeute ULB et ostéopathe D.O. IAO : deux approches complémentaires.',
  },
  {
    icon: Brain,
    title: 'Expérience neurologique VALIDA',
    description:
      'Spécialisation en rééducation neurologique post-AVC et troubles du mouvement.',
  },
]

export function HomeWedges() {
  return (
    <section
      aria-label="Nos différenciateurs"
      className="bg-[var(--color-surface-muted)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {wedges.map((wedge) => {
            const Icon = wedge.icon
            return (
              <div key={wedge.title} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand-primary)] bg-opacity-10">
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-[var(--color-brand-primary)]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-[var(--color-heading)]">
                  {wedge.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {wedge.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
