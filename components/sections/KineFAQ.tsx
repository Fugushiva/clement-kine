'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'Quand faut-il consulter un kinésithérapeute ?',
    answer:
      'Consultez un kinésithérapeute en cas de douleurs musculaires ou articulaires, après une blessure sportive, suite à une opération, en cas de troubles neurologiques, ou pour prévenir les blessures. Une prescription médicale est nécessaire pour le remboursement INAMI.',
  },
  {
    question: 'Combien de séances sont nécessaires ?',
    answer:
      'Le nombre de séances dépend de votre pathologie et de votre progression. Une entorse simple peut nécessiter 5 à 8 séances, une rééducation post-LCA 6 à 12 mois. Clément établit un plan de traitement personnalisé dès la première séance.',
  },
  {
    question: 'Puis-je bénéficier de la kinésithérapie ambulatoire post-AVC ?',
    answer:
      'Oui. Grâce à son expérience au centre VALIDA, Clément propose une rééducation neurologique ambulatoire pour les patients post-AVC, Parkinson ou sclérose en plaques. Une prescription neurologique est nécessaire.',
  },
  {
    question: 'Traitez-vous des patients pédiatriques ?',
    answer:
      'Oui, la kinésithérapie pédiatrique est proposée pour les enfants et adolescents : scoliose, troubles posturaux, rééducation respiratoire, suites chirurgicales. Les séances sont adaptées à l\'âge et au niveau de coopération de l\'enfant.',
  },
  {
    question: 'Comment reprendre un sport après blessure ?',
    answer:
      'La reprise sportive suit un protocole progressif : récupération fonctionnelle, renforcement musculaire, proprioception, puis retour progressif à l\'entraînement. Clément travaille en lien avec votre médecin du sport si nécessaire.',
  },
  {
    question: 'La kinésithérapie est-elle remboursée ?',
    answer:
      'Oui, la kinésithérapie est remboursée par l\'INAMI sur prescription médicale. Le taux de remboursement varie selon la pathologie (nomenclature). Clément est conventionné INAMI (numéro 54366025517). Votre mutuelle peut couvrir le ticket modérateur.',
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

export function KineFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      aria-label="Questions fréquentes sur la kinésithérapie"
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
                  aria-controls={`faq-answer-kine-${index}`}
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
                id={`faq-answer-kine-${index}`}
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
