'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface CookieConsent {
  analytics: boolean;
  third_party: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'cookie-consent';

function getStoredConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsent;
  } catch {
    return null;
  }
}

function saveConsent(consent: Omit<CookieConsent, 'timestamp'>) {
  const full: CookieConsent = {
    ...consent,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(full));
}

export function CookieBanner() {
  // Lazy initializer: check localStorage on first render (client-only)
  const [visible, setVisible] = React.useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return getStoredConsent() === null;
  });
  const [showCustomize, setShowCustomize] = React.useState(false);
  const [analytics, setAnalytics] = React.useState(false);
  const [thirdParty, setThirdParty] = React.useState(false);

  const bannerRef = React.useRef<HTMLDivElement>(null);
  const modalRef = React.useRef<HTMLDivElement>(null);
  const firstFocusRef = React.useRef<HTMLButtonElement>(null);

  // Listen for "Gérer mes cookies" event from Footer
  React.useEffect(() => {
    const handleOpen = () => {
      setVisible(true);
      setShowCustomize(true);
    };
    window.addEventListener('open-cookie-settings', handleOpen);
    return () => window.removeEventListener('open-cookie-settings', handleOpen);
  }, []);

  // Focus first element when banner appears
  React.useEffect(() => {
    if (visible) {
      setTimeout(() => firstFocusRef.current?.focus(), 50);
    }
  }, [visible]);

  // Trap focus in modal
  React.useEffect(() => {
    if (!showCustomize || !modalRef.current) return;

    const focusableSelectors =
      'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = Array.from(
      modalRef.current.querySelectorAll<HTMLElement>(focusableSelectors),
    );
    if (focusableElements.length === 0) return;

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];
    firstEl.focus();

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowCustomize(false);
        return;
      }
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener('keydown', trapFocus);
    return () => document.removeEventListener('keydown', trapFocus);
  }, [showCustomize]);

  const acceptAll = () => {
    saveConsent({ analytics: true, third_party: true });
    setVisible(false);
    setShowCustomize(false);
  };

  const rejectAll = () => {
    saveConsent({ analytics: false, third_party: false });
    setVisible(false);
    setShowCustomize(false);
  };

  const saveCustom = () => {
    saveConsent({ analytics, third_party: thirdParty });
    setVisible(false);
    setShowCustomize(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/40"
        aria-hidden="true"
        onClick={() => {
          // Don't close on backdrop click — user must make a choice
        }}
      />

      {/* Banner / Modal */}
      <div
        ref={bannerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-desc"
        className="fixed bottom-0 left-0 right-0 z-[101] bg-[var(--color-surface-elevated)] border-t border-[var(--color-border-default)] shadow-2xl sm:bottom-6 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-full sm:max-w-lg sm:rounded-[var(--radius-default)] sm:border"
      >
        <div className="p-6">
          {!showCustomize ? (
            <>
              <h2
                id="cookie-banner-title"
                className="font-heading text-base font-semibold text-[var(--color-heading)] mb-2"
              >
                Gestion des cookies
              </h2>
              <p
                id="cookie-banner-desc"
                className="text-sm text-[var(--color-text-muted)] mb-6"
              >
                Nous utilisons des cookies pour améliorer votre expérience et analyser
                l&apos;utilisation du site. Vous pouvez accepter, refuser ou personnaliser
                vos préférences.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button
                  ref={firstFocusRef}
                  variant="primary"
                  size="sm"
                  className="flex-1"
                  onClick={acceptAll}
                >
                  Accepter tout
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={rejectAll}
                >
                  Refuser tout
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => setShowCustomize(true)}
                >
                  Personnaliser
                </Button>
              </div>
            </>
          ) : (
            <div ref={modalRef}>
              <div className="flex items-center justify-between mb-4">
                <h2
                  id="cookie-banner-title"
                  className="font-heading text-base font-semibold text-[var(--color-heading)]"
                >
                  Personnaliser les cookies
                </h2>
                <button
                  aria-label="Fermer"
                  onClick={() => setShowCustomize(false)}
                  className={cn(
                    'rounded p-1 text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)] transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]',
                  )}
                >
                  <X strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary — always on */}
                <label className="flex items-start gap-3 cursor-not-allowed opacity-60">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="mt-0.5 h-4 w-4 rounded border-[var(--color-border-default)] accent-[var(--color-brand-primary)]"
                  />
                  <div>
                    <span className="text-sm font-medium text-[var(--color-text-body)]">
                      Nécessaires
                    </span>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                      Indispensables au fonctionnement du site. Ne peuvent pas être désactivés.
                    </p>
                  </div>
                </label>

                {/* Analytics */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-[var(--color-border-default)] accent-[var(--color-brand-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]"
                  />
                  <div>
                    <span className="text-sm font-medium text-[var(--color-text-body)]">
                      Analytiques
                    </span>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                      Vercel Analytics &amp; Speed Insights — mesure d&apos;audience anonymisée.
                    </p>
                  </div>
                </label>

                {/* Third party (Rosa) */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={thirdParty}
                    onChange={(e) => setThirdParty(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-[var(--color-border-default)] accent-[var(--color-brand-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]"
                  />
                  <div>
                    <span className="text-sm font-medium text-[var(--color-text-body)]">
                      Tiers Rosa
                    </span>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                      Rosa.be — plateforme de prise de rendez-vous en ligne.
                    </p>
                  </div>
                </label>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1"
                  onClick={saveCustom}
                >
                  Enregistrer mes choix
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={rejectAll}
                >
                  Refuser tout
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
