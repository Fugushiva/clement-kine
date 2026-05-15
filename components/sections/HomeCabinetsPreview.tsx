import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

const cabinets = [
  {
    name: 'Cabinet Ixelles',
    address: 'Rue Defacqz 44',
    city: '1050 Ixelles',
    specialty: 'Ostéopathie',
    href: '/cabinets#ixelles',
  },
  {
    name: 'Cabinet Etterbeek',
    address: 'Avenue d\'Auderghem 59C',
    city: '1040 Etterbeek',
    specialty: 'Kinésithérapie',
    href: '/cabinets#etterbeek',
  },
]

export function HomeCabinetsPreview() {
  return (
    <section
      aria-label="Nos cabinets"
      className="py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
          Deux cabinets au cœur de Bruxelles
        </h2>
        <p className="mb-12 text-center text-lg text-[var(--color-text-muted)]">
          Facilement accessibles en transports en commun.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {cabinets.map((cabinet) => (
            <div
              key={cabinet.name}
              className="rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] p-6 shadow-sm"
            >
              <span className="mb-3 inline-block rounded-full bg-[var(--color-surface-muted)] px-3 py-1 text-xs font-medium text-[var(--color-brand-primary)]">
                {cabinet.specialty}
              </span>
              <h3 className="mb-3 font-heading text-xl font-semibold text-[var(--color-heading)]">
                {cabinet.name}
              </h3>
              <address className="mb-4 flex items-start gap-2 not-italic text-sm text-[var(--color-text-muted)]">
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[var(--color-brand-primary)]"
                  aria-hidden="true"
                />
                <span>
                  {cabinet.address}
                  <br />
                  {cabinet.city}
                </span>
              </address>
              <Link
                href={cabinet.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-brand-primary)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
              >
                Voir le cabinet
                <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/cabinets"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-brand-primary)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
          >
            Voir tous les cabinets
            <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
