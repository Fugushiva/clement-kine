import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Ostéopathie',
    description:
      'Approche manuelle globale pour traiter les douleurs à la source. Structurelle, viscérale, crânio-sacrée et fasciale.',
    href: '/osteopathie',
    badge: 'Cabinet Ixelles',
  },
  {
    title: 'Kinésithérapie',
    description:
      'Rééducation sportive, neurologique (VALIDA) et générale. Programme d\'exercices personnalisé en ligne.',
    href: '/kinesitherapie',
    badge: 'Cabinet Etterbeek',
  },
]

export function HomeServicesOverview() {
  return (
    <section
      id="services"
      aria-label="Nos spécialités"
      className="py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
          Deux spécialités, une approche intégrée
        </h2>
        <p className="mb-12 text-center text-lg text-[var(--color-text-muted)]">
          Kiné et ostéo sous le même toit, pour un suivi cohérent et complet.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] p-8 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
            >
              <span className="mb-3 inline-block rounded-full bg-[var(--color-surface-muted)] px-3 py-1 text-xs font-medium text-[var(--color-brand-primary)]">
                {service.badge}
              </span>
              <h3 className="mb-3 font-heading text-2xl font-semibold text-[var(--color-heading)]">
                {service.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-brand-primary)] transition-gap group-hover:gap-3">
                En savoir plus
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
