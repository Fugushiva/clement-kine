'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRosa } from '@/lib/rosa'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/kinesitherapie', label: 'Kinésithérapie' },
  { href: '/osteopathie', label: 'Ostéopathie' },
  { href: '/cabinets', label: 'Cabinets' },
  { href: '/a-propos', label: 'À propos' },
]

export function Navbar() {
  const pathname = usePathname()
  const { open } = useRosa()

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border-default)] bg-[var(--color-surface-elevated)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="font-heading text-lg font-semibold text-[var(--color-heading)] hover:text-[var(--color-brand-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
        >
          Clément Geneau
        </Link>

        {/* Nav links — desktop */}
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              className={cn(
                'text-sm font-medium transition-colors hover:text-[var(--color-brand-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]',
                pathname === href
                  ? 'text-[var(--color-brand-primary)]'
                  : 'text-[var(--color-text-muted)]'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={open}
          className="rounded-[var(--radius-default)] bg-[var(--color-brand-primary)] px-4 py-2 text-sm font-semibold text-[var(--color-text-on-brand)] shadow-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
        >
          Prendre rendez-vous
        </button>
      </div>
    </header>
  )
}
