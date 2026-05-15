'use client'
import Link from 'next/link'
import { useRosa } from '@/lib/rosa'
import { CTASection } from '@/components/sections/CTASection'

const timelineItems = [
  {
    year: '2015',
    title: 'Master en Kinésithérapie',
    org: 'ULB — Université Libre de Bruxelles',
    detail: 'Grande Distinction',
  },
  {
    year: '2016',
    title: 'ETMA — Thérapie Manuelle Avancée',
    org: 'Formation post-graduée',
    detail: 'Techniques manuelles avancées orthopédiques',
  },
  {
    year: '2017–2018',
    title: 'Revalidation neurologique',
    org: 'VALIDA — Centre spécialisé',
    detail: '2 ans de pratique clinique en neurologie post-AVC',
  },
  {
    year: '2017–2022',
    title: 'Diplôme D.O. en Ostéopathie',
    org: 'IAO — Institut Athena d\'Ostéopathie',
    detail: '5 ans de formation complète en ostéopathie',
  },
  {
    year: '2025',
    title: 'Formation épaule sportif',
    org: 'Yann Bourrel',
    detail: 'Spécialisation pathologies de l\'épaule en contexte sportif',
  },
]

const pillars = [
  {
    title: '60 minutes, sans compromis',
    description:
      'Chaque séance dure 60 minutes complètes. Pas de chronomètre, pas de patient suivant qui attend. Le temps nécessaire pour comprendre, traiter et expliquer.',
  },
  {
    title: 'Approche fasciale globale',
    description:
      'Le corps est un tout. Les fascias connectent chaque structure. Une douleur au genou peut trouver son origine dans la hanche ou le bas du dos. Je traite la cause, pas le symptôme.',
  },
  {
    title: 'Neurodynamique appliquée',
    description:
      'Formé à VALIDA en revalidation neurologique, j\'intègre les principes de neurodynamique dans chaque prise en charge — qu\'il s\'agisse de sport, de neurologie ou de douleurs chroniques.',
  },
]

const diplomas = [
  { title: 'Master Kinésithérapie', org: 'ULB', detail: 'Grande Distinction' },
  { title: 'Diplôme D.O.', org: 'IAO — Institut Athena d\'Ostéopathie', detail: '5 ans de formation' },
  { title: 'ETMA', org: 'Thérapie Manuelle Avancée', detail: 'Post-graduat' },
  { title: 'VALIDA', org: 'Revalidation neurologique', detail: '2 ans clinique' },
  { title: 'Formation épaule sportif', org: 'Yann Bourrel', detail: '2025' },
]

const faqItems = [
  {
    question: 'Pourquoi des séances de 60 minutes ?',
    answer:
      'La plupart des kinésithérapeutes voient leurs patients en 30 minutes. Ce n\'est pas suffisant pour un bilan complet, un traitement en profondeur et des explications claires. Mes séances durent 60 minutes pour que vous repartiez avec une vraie compréhension de votre problème et un plan de traitement adapté.',
  },
  {
    question: 'Quelle est votre approche fasciale ?',
    answer:
      'Les fascias sont des membranes conjonctives qui enveloppent et relient tous les organes, muscles et os du corps. Une tension fasciale à un endroit peut créer des douleurs à distance. Mon approche intègre des techniques de relâchement fascial, de thérapie manuelle et d\'ostéopathie pour traiter ces chaînes de tension.',
  },
  {
    question: 'Parlez-vous d\'autres langues ?',
    answer:
      'Oui, je consulte en français, en anglais et en espagnol. Bruxelles est une ville internationale et il est important que chacun puisse s\'exprimer dans sa langue pour décrire ses symptômes avec précision.',
  },
]

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-[var(--color-border-default)] last:border-0">
      <summary className="flex cursor-pointer items-center justify-between py-4 text-base font-medium text-[var(--color-text-body)] hover:text-[var(--color-brand-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]">
        {question}
        <span className="ml-4 shrink-0 text-[var(--color-text-muted)] transition-transform group-open:rotate-180" aria-hidden="true">
          ▾
        </span>
      </summary>
      <div className="pb-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
        {answer}
      </div>
    </details>
  )
}

export function AProposPage() {
  const { open } = useRosa()

  return (
    <>
      {/* Hero */}
      <section
        aria-label="Présentation Clément Geneau"
        className="bg-[var(--color-surface-default)] py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
                À propos
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-4 font-heading text-4xl font-semibold leading-tight text-[var(--color-heading)] md:text-5xl lg:text-6xl">
                Clément Geneau, kinésithérapeute et ostéopathe
              </h1>
              <p className="mb-6 text-lg leading-relaxed text-[var(--color-text-muted)] md:text-xl">
                Master ULB, Diplôme D.O. IAO, 8 ans d&apos;expérience clinique dont 2 ans en revalidation neurologique à VALIDA.
              </p>
              <button
                onClick={open}
                className="inline-flex items-center justify-center rounded-[var(--radius-default)] bg-[var(--color-brand-primary)] px-8 py-4 text-base font-semibold text-[var(--color-text-on-brand)] shadow-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
              >
                Prendre rendez-vous
              </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-80 w-64 overflow-hidden rounded-[var(--radius-default)] bg-[var(--color-surface-muted)] shadow-md md:h-96 md:w-80">
                {/* TODO: portrait professionnel Clément */}
                <div className="flex h-full w-full items-center justify-center">
                  <p className="text-center text-sm text-[var(--color-text-muted)]">
                    Portrait professionnel
                    <br />
                    <span className="text-xs opacity-60">À remplacer</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline parcours */}
      <section aria-label="Parcours et formations" className="bg-[var(--color-surface-muted)] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
            Parcours
          </h2>
          <ol className="relative border-l border-[var(--color-brand-primary)] border-opacity-30 pl-8 space-y-10">
            {timelineItems.map((item) => (
              <li key={item.year} className="relative">
                <span
                  className="absolute -left-[2.125rem] flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-brand-primary)] ring-4 ring-[var(--color-surface-muted)]"
                  aria-hidden="true"
                />
                <time
                  dateTime={item.year.replace('–', '/')}
                  className="mb-1 block text-sm font-semibold text-[var(--color-brand-primary)]"
                >
                  {item.year}
                </time>
                <h3 className="mb-1 font-heading text-lg font-semibold text-[var(--color-heading)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {item.org}
                  {item.detail && (
                    <span className="ml-2 text-xs opacity-70">— {item.detail}</span>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Mon approche — 3 piliers */}
      <section aria-label="Mon approche thérapeutique" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
            Mon approche
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] p-6 shadow-sm"
              >
                <h3 className="mb-3 font-heading text-lg font-semibold text-[var(--color-heading)]">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Diplômes */}
      <section aria-label="Diplômes et certifications" className="bg-[var(--color-surface-muted)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
            Diplômes &amp; certifications
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {diplomas.map((diploma) => (
              <div
                key={diploma.title}
                className="rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] p-5 shadow-sm"
              >
                <p className="mb-1 font-heading text-base font-semibold text-[var(--color-heading)]">
                  {diploma.title}
                </p>
                <p className="text-sm text-[var(--color-brand-primary)]">{diploma.org}</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">{diploma.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ personnelle */}
      <section aria-label="Questions fréquentes" className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
            Questions fréquentes
          </h2>
          <div className="rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] px-6">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Rencontrons-nous"
        description="Séances de 60 minutes à Ixelles ou Etterbeek. Prenez rendez-vous en ligne."
        ctaLabel="Prendre rendez-vous"
      />
    </>
  )
}
