'use client';

import Link from 'next/link';
import { INAMI } from '@/lib/constants';

const cabinets = [
  {
    name: 'Cabinet Ixelles',
    address: 'Rue de la Brasserie 89, 1050 Ixelles',
  },
  {
    name: 'Cabinet Forest',
    address: 'Avenue du Globe 1, 1190 Forest',
  },
];

const legalLinks = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
  { href: '/politique-cookies', label: 'Politique cookies' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border-default)] bg-[var(--color-surface-inverse)] text-[var(--color-text-inverse)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Identity */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-[var(--color-text-inverse)] mb-3">
              Clément Geneau
            </h2>
            <p className="text-sm text-[var(--color-text-inverse)] opacity-80 mb-2">
              Kinésithérapeute &amp; Ostéopathe
            </p>
            <p className="text-xs text-[var(--color-text-inverse)] opacity-60 mb-4">
              INAMI : {INAMI}
            </p>
            <ul className="space-y-1">
              {cabinets.map((cabinet) => (
                <li key={cabinet.name} className="text-sm text-[var(--color-text-inverse)] opacity-70">
                  <span className="font-medium opacity-90">{cabinet.name}</span>
                  <br />
                  {cabinet.address}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Legal navigation */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-[var(--color-text-inverse)] mb-3">
              Informations légales
            </h2>
            <nav aria-label="Navigation légale">
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-inverse)] opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    id="manage-cookies-btn"
                    className="text-sm text-[var(--color-text-inverse)] opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 rounded"
                    onClick={() => {
                      // Dispatch custom event to open cookie banner
                      window.dispatchEvent(new CustomEvent('open-cookie-settings'));
                    }}
                  >
                    Gérer mes cookies
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-[var(--color-text-inverse)] mb-3">
              Contact
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+32489636943"
                  className="text-sm text-[var(--color-text-inverse)] opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 rounded"
                >
                  0489/63.69.43
                </a>
              </li>
              <li>
                <a
                  href="mailto:clement.geneau.kine@gmail.com"
                  className="text-sm text-[var(--color-text-inverse)] opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 rounded"
                >
                  clement.geneau.kine@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.rosa.be/fr/hp/clement-geneau/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-brand-primary)] hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 rounded"
                >
                  Prendre rendez-vous →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-[var(--color-text-inverse)] opacity-50">
          © {currentYear} Clément Geneau. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
