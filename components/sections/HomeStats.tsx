const stats = [
  { value: '8', unit: 'ans', label: "d'expérience clinique" },
  { value: '500+', unit: '', label: 'patients accompagnés' },
  { value: '60', unit: 'min', label: 'par séance, sans exception' },
  { value: '2', unit: '', label: 'cabinets à Bruxelles' },
]

export function HomeStats() {
  return (
    <section
      aria-label="Chiffres clés"
      className="bg-[var(--color-surface-inverse)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="mb-2 font-heading text-4xl font-semibold text-[var(--color-text-inverse)] md:text-5xl">
                {stat.value}
                {stat.unit && (
                  <span className="ml-1 text-2xl text-[var(--color-text-inverse)] opacity-70 md:text-3xl">
                    {stat.unit}
                  </span>
                )}
              </dt>
              <dd className="text-sm text-[var(--color-text-inverse)] opacity-70">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
