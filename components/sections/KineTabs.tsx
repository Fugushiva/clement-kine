'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const tabs = [
  {
    id: 'sportive',
    label: 'Sportive',
    items: [
      'Entorses et ligamentoplasties',
      'Rupture du LCA — protocole retour au sport',
      'Tendinopathies (Achille, rotulien, coiffe)',
      'Préparation physique et prévention des blessures',
      'Rééducation post-fracture et post-opératoire',
    ],
    description:
      'Rééducation sportive complète, du diagnostic fonctionnel au retour sur le terrain.',
  },
  {
    id: 'neurologique',
    label: 'Neurologique (VALIDA)',
    items: [
      'Rééducation post-AVC (hémiplégie, hémiparésie)',
      'Maladie de Parkinson — maintien de la mobilité',
      'Sclérose en plaques — programme adapté',
      'Neuro-rééducation ambulatoire VALIDA',
      'Troubles de l\'équilibre et de la marche',
    ],
    description:
      'Expérience clinique acquise à VALIDA, centre spécialisé en rééducation neurologique à Bruxelles.',
    highlight: true,
  },
  {
    id: 'generale',
    label: 'Générale & Respiratoire',
    items: [
      'Rééducation post-opératoire (prothèse, chirurgie rachis)',
      'BPCO et rééducation respiratoire',
      'Préparation à l\'accouchement',
      'Kinésithérapie pédiatrique',
      'Douleurs chroniques et fibromyalgie',
    ],
    description:
      'Prise en charge globale pour tous les âges et toutes les pathologies.',
  },
]

export function KineTabs() {
  const [activeTab, setActiveTab] = useState('sportive')
  const currentTab = tabs.find((t) => t.id === activeTab) ?? tabs[0]

  return (
    <section
      aria-label="Axes de kinésithérapie"
      className="bg-[var(--color-surface-muted)] py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
          3 axes de spécialisation
        </h2>
        <p className="mb-12 text-center text-lg text-[var(--color-text-muted)]">
          Une expertise pluridisciplinaire pour répondre à vos besoins.
        </p>

        {/* Tab list */}
        <div
          role="tablist"
          aria-label="Spécialités kinésithérapie"
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]',
                activeTab === tab.id
                  ? 'bg-[var(--color-brand-primary)] text-[var(--color-text-on-brand)]'
                  : 'border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] text-[var(--color-text-body)] hover:bg-[var(--color-surface-muted)]'
              )}
            >
              {tab.label}
              {tab.highlight && (
                <span className="ml-2 rounded-full bg-[var(--color-accent)] px-1.5 py-0.5 text-xs font-semibold text-[var(--color-text-on-brand)]">
                  ★
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab panel */}
        <div
          role="tabpanel"
          id={`tabpanel-${currentTab.id}`}
          aria-labelledby={`tab-${currentTab.id}`}
          className="rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] p-8 shadow-sm"
        >
          {currentTab.highlight && (
            <div className="mb-6 rounded-[var(--radius-default)] bg-[var(--color-brand-primary)] bg-opacity-10 px-4 py-3">
              <p className="text-sm font-medium text-[var(--color-brand-primary)]">
                ★ Différenciateur VALIDA — Expérience clinique en neurologie
                acquise au centre VALIDA, référence belge en rééducation
                neurologique.
              </p>
            </div>
          )}
          <p className="mb-6 text-base text-[var(--color-text-muted)]">
            {currentTab.description}
          </p>
          <ul className="grid gap-3 sm:grid-cols-2" role="list">
            {currentTab.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-[var(--color-text-body)]"
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-primary)]"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
