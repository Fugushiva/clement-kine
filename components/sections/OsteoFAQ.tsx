'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: "Qu'est-ce que l'ostéopathie ?",
    answer:
      "L'ostéopathie est une médecine manuelle qui considère le corps dans sa globalité. L'ostéopathe recherche et traite les restrictions de mobilité des différentes structures du corps (articulations, muscles, fascias, organes) qui peuvent être à l'origine de douleurs ou de dysfonctions.",
  },
  {
    question: "L'ostéopathie est-elle remboursée par l'INAMI ?",
    answer:
      "En Belgique, l'ostéopathie n'est pas remboursée par l'INAMI. Cependant, de nombreuses mutuelles proposent un remboursement partiel dans le cadre de leur couverture complémentaire. Renseignez-vous auprès de votre mutuelle.",
  },
  {
    question: "Quelle est la durée d'une séance ?",
    answer:
      "Toutes les séances durent 60 minutes. Ce temps long est un choix délibéré pour permettre un bilan complet, un traitement approfondi et des conseils personnalisés. Pas de précipitation.",
  },
  {
    question: 'Quelle est la fréquence recommandée ?',
    answer:
      "La fréquence dépend de votre situation. Pour un problème aigu, 2 à 3 séances rapprochées peuvent être nécessaires. En entretien préventif, une séance tous les 3 à 6 mois est souvent suffisante. Clément vous guidera selon votre évolution.",
  },
  {
    question: "L'ostéopathie convient-elle aux nourrissons ?",
    answer:
      "Oui, l'ostéopathie pédiatrique est particulièrement douce et adaptée aux nourrissons. Elle peut aider pour les plagiocéphalies, les coliques, les difficultés d'allaitement ou les suites d'un accouchement difficile.",
  },
  {
    question: "Quelle est la différence entre kiné et ostéo ?",
    answer:
      "La kinésithérapie travaille principalement par le mouvement, l'exercice et la rééducation fonctionnelle. L'ostéopathie est une approche manuelle globale qui cherche à restaurer la mobilité des structures. Les deux sont complémentaires, et Clément peut combiner les deux approches selon vos besoins.",
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export function OsteoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      aria-label="Questions fréquentes sur l'ostéopathie"
      className="py-16 md:py-24 lg:py-32"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
          Questions fréquentes
        </h2>
        <dl className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] shadow-sm"
            >
              <dt>
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-osteo-${index}`}
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium text-[var(--color-text-body)] hover:bg-[var(--color-surface-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    strokeWidth={1.5}
                    className={cn(
                      'shrink-0 text-[var(--color-text-muted)] transition-transform duration-200',
                      openIndex === index && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                </button>
              </dt>
              <dd
                id={`faq-answer-osteo-${index}`}
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <p className="px-6 pb-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
