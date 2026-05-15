import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-default)] bg-[var(--color-surface-muted)] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="mb-2 font-heading text-base font-semibold text-[var(--color-heading)]">
              Clément Geneau
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">
              Kinésithérapeute &amp; Ostéopathe D.O.
              <br />
              INAMI 54366025517
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation secondaire">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              Services
            </p>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/kinesitherapie', label: 'Kinésithérapie' },
                { href: '/osteopathie', label: 'Ostéopathie' },
                { href: '/cabinets', label: 'Nos cabinets' },
                { href: '/a-propos', label: 'À propos' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-brand-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Cabinet Ixelles */}
          <address className="not-italic text-sm text-[var(--color-text-muted)]">
            <p className="mb-1 font-semibold text-[var(--color-text-body)]">Cabinet Ixelles</p>
            <p>Rue Defacqz 44</p>
            <p>1050 Ixelles</p>
          </address>

          {/* Cabinet Etterbeek */}
          <address className="not-italic text-sm text-[var(--color-text-muted)]">
            <p className="mb-1 font-semibold text-[var(--color-text-body)]">Cabinet Etterbeek</p>
            <p>Avenue d&apos;Auderghem 59C</p>
            <p>1040 Etterbeek</p>
            <a
              href="tel:+32489636943"
              className="mt-2 block hover:text-[var(--color-brand-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
            >
              0489/63.69.43
            </a>
          </address>
        </div>

        <div className="mt-8 border-t border-[var(--color-border-default)] pt-6 text-center text-xs text-[var(--color-text-muted)]">
          <p>© {new Date().getFullYear()} Clément Geneau. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
