'use client'
import Link from 'next/link'
import { useRosa } from '@/lib/rosa'

export function KineHero() {
  const { open } = useRosa()

  return (
    <section
      aria-label="Introduction kinésithérapie"
      className="bg-[var(--color-surface-default)] py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <li>
              <Link
                href="/"
                className="hover:text-[var(--color-brand-primary)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
              >
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[var(--color-text-body)]">
              Kinésithérapie
            </li>
          </ol>
        </nav>

        <h1 className="mb-6 font-heading text-4xl font-semibold leading-tight text-[var(--color-heading)] md:text-5xl lg:text-6xl">
          Kinésithérapie : sport, neurologie, rééducation
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-[var(--color-text-muted)] md:text-xl">
          Kinésithérapeute à Etterbeek. Sport, neurologie post-AVC, rééducation
          générale. Programme d&apos;exercices personnalisé en ligne.
        </p>
        <button
          onClick={open}
          className="inline-flex items-center justify-center rounded-[var(--radius-default)] bg-[var(--color-brand-primary)] px-8 py-4 text-base font-semibold text-[var(--color-text-on-brand)] shadow-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
        >
          Prendre RDV à Etterbeek
        </button>
      </div>
    </section>
  )
}
