'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/osteopathie', label: 'Ostéopathie' },
  { href: '/kinesitherapie', label: 'Kinésithérapie' },
  { href: '/cabinets', label: 'Cabinets' },
  { href: '/a-propos', label: 'À propos' },
] as const;

const RDV_URL = 'https://www.rosa.be/fr/hp/clement-geneau/';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const hamburgerRef = React.useRef<HTMLButtonElement>(null);
  const menuId = 'mobile-menu';

  // Close on Escape
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Trap focus inside mobile menu
  React.useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const focusableSelectors =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = Array.from(
      menuRef.current.querySelectorAll<HTMLElement>(focusableSelectors),
    );

    if (focusableElements.length === 0) return;

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    firstEl.focus();

    const trapFocus = (e: KeyboardEvent) => {
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
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-lg font-semibold text-[var(--color-heading)] hover:text-[var(--color-brand-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 rounded"
        >
          Clément Geneau
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-body)] hover:text-[var(--color-brand-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button
            asChild={false}
            variant="primary"
            size="sm"
            onClick={() => window.open(RDV_URL, '_blank', 'noopener,noreferrer')}
          >
            Prendre RDV
          </Button>
        </div>

        {/* Hamburger */}
        <button
          ref={hamburgerRef}
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            'md:hidden rounded p-2 text-[var(--color-text-body)] hover:bg-[var(--color-surface-muted)] transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2',
          )}
        >
          {isOpen ? (
            <X strokeWidth={1.5} className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu strokeWidth={1.5} className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id={menuId}
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          className="md:hidden border-t border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] px-4 pb-4 pt-2"
        >
          <nav aria-label="Navigation mobile">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded px-3 py-2 text-sm font-medium text-[var(--color-text-body)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-brand-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4">
            <Button
              variant="primary"
              size="sm"
              className="w-full"
              onClick={() => {
                setIsOpen(false);
                window.open(RDV_URL, '_blank', 'noopener,noreferrer');
              }}
            >
              Prendre RDV
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
