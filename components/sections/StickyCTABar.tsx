'use client'

import Link from 'next/link'

export function StickyCTABar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] px-4 py-3 shadow-md md:hidden"
      role="complementary"
      aria-label="Prise de rendez-vous rapide"
    >
      <Link
        href="#rdv"
        className="flex w-full items-center justify-center rounded-[var(--radius-default)] bg-[var(--color-brand-primary)] px-6 py-3 text-base font-semibold text-[var(--color-text-on-brand)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
      >
        Prendre rendez-vous
      </Link>
    </div>
  )
}
