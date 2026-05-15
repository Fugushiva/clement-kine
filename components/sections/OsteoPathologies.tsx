const pathologies = [
  'Lombalgies et sciatiques',
  'Cervicalgies et torticolis',
  'Migraines et céphalées',
  'Troubles de l\'ATM (mâchoire)',
  'Troubles digestifs (côlon irritable, reflux)',
  'Séquelles post-traumatiques',
  'Douleurs de grossesse',
  'Troubles du sommeil liés aux tensions',
]

export function OsteoPathologies() {
  return (
    <section
      aria-label="Pathologies traitées en ostéopathie"
      className="py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-4 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
              Pathologies fréquemment traitées
            </h2>
            <p className="mb-8 text-lg text-[var(--color-text-muted)]">
              L&apos;ostéopathie peut soulager un large spectre de douleurs et
              dysfonctions, aiguës ou chroniques.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2" role="list">
            {pathologies.map((pathology) => (
              <li
                key={pathology}
                className="flex items-center gap-3 rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] px-4 py-3 text-sm text-[var(--color-text-body)] shadow-sm"
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-primary)]"
                  aria-hidden="true"
                />
                {pathology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
