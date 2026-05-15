'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import { X } from 'lucide-react'

interface RosaModalProps {
  isOpen: boolean
  onClose: () => void
}

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

/**
 * Inner modal — rendered only when isOpen=true, so state always starts fresh.
 * Avoids calling setState inside effects.
 */
function RosaModalInner({ onClose }: { onClose: () => void }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Focus trap
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const modal = modalRef.current
      if (!modal) return
      const focusable = Array.from(
        modal.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    // Focus the close button when modal opens
    setTimeout(() => closeButtonRef.current?.focus(), 50)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rosa-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={modalRef}
        className="relative z-10 mx-4 w-full max-w-2xl rounded-[var(--radius-default)] bg-[var(--color-surface-elevated)] shadow-xl"
        style={{ maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--color-border-default)] p-4">
          <h2
            id="rosa-modal-title"
            className="font-heading text-lg font-semibold text-[var(--color-heading)]"
          >
            Prendre rendez-vous
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="rounded-[var(--radius-default)] p-2 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-body)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
            aria-label="Fermer la fenêtre de rendez-vous"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-auto p-4" style={{ minHeight: '400px' }}>
          {loading && !error && (
            <div
              className="flex h-64 items-center justify-center text-[var(--color-text-muted)]"
              aria-live="polite"
              aria-label="Chargement du calendrier"
            >
              <span className="animate-pulse">Chargement du calendrier…</span>
            </div>
          )}
          {error && (
            <div
              className="py-8 text-center text-[var(--color-text-body)]"
              role="alert"
            >
              <p className="mb-2 font-medium">
                Impossible de charger le calendrier en ligne.
              </p>
              <p className="text-[var(--color-text-muted)]">
                Prenez rendez-vous par téléphone :{' '}
                <a
                  href="tel:+32489636943"
                  className="font-semibold text-[var(--color-brand-primary)] underline"
                >
                  0489/63.69.43
                </a>
              </p>
            </div>
          )}
          {/* TODO: Remplacer par l'URL Rosa.be réelle de Clément Geneau */}
          <iframe
            src="https://www.rosa.be/fr/reservation-widget?practitioner=clement-geneau"
            title="Calendrier de rendez-vous Rosa.be — Clément Geneau"
            width="100%"
            style={{
              height: '500px',
              border: 'none',
              display: loading || error ? 'none' : 'block',
            }}
            onLoad={() => setLoading(false)}
            onError={() => {
              setLoading(false)
              setError(true)
            }}
          />
        </div>
      </div>
    </div>
  )
}

/**
 * Public wrapper — conditionally renders RosaModalInner so state resets on each open.
 */
export function RosaModal({ isOpen, onClose }: RosaModalProps) {
  if (!isOpen) return null
  return <RosaModalInner onClose={onClose} />
}
