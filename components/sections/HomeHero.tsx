'use client'

import Link from 'next/link'
import { useRosa } from '@/lib/rosa'

export function HomeHero() {
  const { open } = useRosa()

  return (
    <section
      aria-label="Présentation"
      className="relative overflow-hidden bg-[var(--color-surface-default)] py-16 md:py-24 lg:py-32"
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .hero-entrance {
            animation: heroFadeIn 600ms cubic-bezier(0.16, 1, 0.3, 1) both;
          }
          @keyframes heroFadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div className="hero-entrance">
            <h1 className="mb-6 font-heading text-5xl font-semibold leading-tight text-[var(--color-heading)] md:text-6xl lg:text-7xl">
              Retrouvez votre mobilité, en 60 minutes
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-[var(--color-text-muted)] md:text-xl">
              Kinésithérapeute et ostéopathe à Bruxelles. Expertise double,
              séances longues, suivi personnalisé.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={open}
                className="inline-flex items-center justify-center rounded-[var(--radius-default)] bg-[var(--color-brand-primary)] px-8 py-4 text-base font-semibold text-[var(--color-text-on-brand)] shadow-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
              >
                Prendre rendez-vous
              </button>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-[var(--radius-default)] border border-[var(--color-border-strong)] bg-transparent px-8 py-4 text-base font-semibold text-[var(--color-text-body)] transition-colors hover:bg-[var(--color-surface-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
              >
                Découvrir nos spécialités
              </Link>
            </div>
          </div>

          {/* Photo praticien */}
          <div className="hero-entrance relative flex justify-center lg:justify-end" style={{ animationDelay: '150ms' }}>
            <div className="relative h-80 w-64 overflow-hidden rounded-[var(--radius-default)] bg-[var(--color-surface-muted)] shadow-md md:h-96 md:w-80">
              {/* TODO: photo Clément */}
              <div className="flex h-full w-full items-center justify-center">
                <p className="text-center text-sm text-[var(--color-text-muted)]">
                  Photo Clément Geneau
                  <br />
                  <span className="text-xs opacity-60">À remplacer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
