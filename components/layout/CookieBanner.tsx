'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'

interface CookieConsent {
  analytics: boolean
  third_party: boolean
  timestamp: string
}

const STORAGE_KEY = 'cookie-consent'

function getStoredConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as CookieConsent
  } catch {
    return null
  }
}

function saveConsent(consent: Omit<CookieConsent, 'timestamp'>) {
  const full: CookieConsent = { ...consent, timestamp: new Date().toISOString() }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(full))
  return full
}

export function CookieBanner() {
  // Lazy initializer: read localStorage once on mount, no effect needed
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return getStoredConsent() === null
  })
  const [showModal, setShowModal] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true)
  const [thirdPartyEnabled, setThirdPartyEnabled] = useState(true)

  // Expose a global function to reopen the banner from the footer
  useEffect(() => {
    const handler = () => {
      setShowModal(false)
      setVisible(true)
    }
    window.addEventListener('open-cookie-banner', handler)
    return () => window.removeEventListener('open-cookie-banner', handler)
  }, [])

  const acceptAll = useCallback(() => {
    saveConsent({ analytics: true, third_party: true })
    setVisible(false)
    setShowModal(false)
  }, [])

  const rejectAll = useCallback(() => {
    saveConsent({ analytics: false, third_party: false })
    setVisible(false)
    setShowModal(false)
  }, [])

  const saveCustom = useCallback(() => {
    saveConsent({ analytics: analyticsEnabled, third_party: thirdPartyEnabled })
    setVisible(false)
    setShowModal(false)
  }, [analyticsEnabled, thirdPartyEnabled])

  const openModal = useCallback(() => {
    setShowModal(true)
  }, [])

  const closeModal = useCallback(() => {
    setShowModal(false)
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Main banner */}
      {!showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gestion des cookies"
          className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-surface-default)] border-t border-[var(--color-border-default)] shadow-lg p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl">
            <p className="text-sm text-[var(--color-text-body)] mb-4">
              Ce site utilise des cookies pour mesurer l&apos;audience (Vercel Analytics) et
              permettre la prise de rendez-vous (Rosa.be). Consultez notre{' '}
              <Link
                href="/politique-cookies"
                className="text-[var(--color-brand-primary)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
              >
                politique de cookies
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={acceptAll}
                className="flex-1 min-w-[140px] rounded-[var(--radius-default)] bg-[var(--color-brand-primary)] px-4 py-2.5 text-sm font-semibold text-[var(--color-text-on-brand)] hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] transition-opacity"
              >
                Accepter tout
              </button>
              <button
                onClick={rejectAll}
                className="flex-1 min-w-[140px] rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-default)] px-4 py-2.5 text-sm font-semibold text-[var(--color-text-body)] hover:bg-[var(--color-surface-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] transition-colors"
              >
                Refuser tout
              </button>
              <button
                onClick={openModal}
                className="flex-1 min-w-[140px] rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-default)] px-4 py-2.5 text-sm font-semibold text-[var(--color-text-body)] hover:bg-[var(--color-surface-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] transition-colors"
              >
                Personnaliser
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Customization modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Personnaliser les cookies"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeModal()
          }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            aria-hidden="true"
            onClick={closeModal}
          />

          {/* Modal content */}
          <div className="relative w-full max-w-lg bg-[var(--color-surface-default)] rounded-[var(--radius-default)] border border-[var(--color-border-default)] shadow-xl p-6">
            <h2 className="font-heading text-xl text-[var(--color-heading)] mb-4">
              Personnaliser les cookies
            </h2>

            <div className="space-y-4 mb-6">
              {/* Necessary — always on */}
              <div className="flex items-start justify-between gap-4 p-3 rounded-[var(--radius-default)] bg-[var(--color-surface-muted)]">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-body)]">
                    Nécessaires
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                    Mémorisation de vos préférences cookies. Toujours actifs.
                  </p>
                </div>
                <div
                  aria-label="Cookies nécessaires — toujours actifs"
                  className="mt-0.5 flex-shrink-0 w-10 h-6 rounded-full bg-[var(--color-brand-primary)] opacity-50 cursor-not-allowed"
                  aria-disabled="true"
                />
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 p-3 rounded-[var(--radius-default)] border border-[var(--color-border-default)]">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-body)]">
                    Analytiques
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                    Vercel Analytics — mesure d&apos;audience anonyme (90 jours).
                  </p>
                </div>
                <button
                  role="switch"
                  aria-checked={analyticsEnabled}
                  aria-label="Activer les cookies analytiques"
                  onClick={() => setAnalyticsEnabled((v) => !v)}
                  className={`mt-0.5 flex-shrink-0 w-10 h-6 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] ${
                    analyticsEnabled
                      ? 'bg-[var(--color-brand-primary)]'
                      : 'bg-[var(--color-border-default)]'
                  }`}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white shadow transition-transform mx-1 ${
                      analyticsEnabled ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Third party (Rosa.be) */}
              <div className="flex items-start justify-between gap-4 p-3 rounded-[var(--radius-default)] border border-[var(--color-border-default)]">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-body)]">
                    Tiers — Rosa.be
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                    Cookies déposés par Rosa.be lors de la prise de rendez-vous en ligne.
                  </p>
                </div>
                <button
                  role="switch"
                  aria-checked={thirdPartyEnabled}
                  aria-label="Activer les cookies tiers Rosa.be"
                  onClick={() => setThirdPartyEnabled((v) => !v)}
                  className={`mt-0.5 flex-shrink-0 w-10 h-6 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] ${
                    thirdPartyEnabled
                      ? 'bg-[var(--color-brand-primary)]'
                      : 'bg-[var(--color-border-default)]'
                  }`}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white shadow transition-transform mx-1 ${
                      thirdPartyEnabled ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={saveCustom}
                className="flex-1 min-w-[140px] rounded-[var(--radius-default)] bg-[var(--color-brand-primary)] px-4 py-2.5 text-sm font-semibold text-[var(--color-text-on-brand)] hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] transition-opacity"
              >
                Enregistrer mes choix
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 min-w-[140px] rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-default)] px-4 py-2.5 text-sm font-semibold text-[var(--color-text-body)] hover:bg-[var(--color-surface-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] transition-colors"
              >
                Accepter tout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
