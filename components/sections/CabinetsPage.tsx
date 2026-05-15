'use client'
import Link from 'next/link'
import { MapPin, Phone, Mail, Train, Bus } from 'lucide-react'
import { useRosa } from '@/lib/rosa'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTASection } from '@/components/sections/CTASection'

function AccordionItem({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <details className="group border-b border-[var(--color-border-default)] last:border-0">
      <summary className="flex cursor-pointer items-center justify-between py-4 text-base font-medium text-[var(--color-text-body)] hover:text-[var(--color-brand-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]">
        {title}
        <span className="ml-4 shrink-0 text-[var(--color-text-muted)] transition-transform group-open:rotate-180" aria-hidden="true">
          ▾
        </span>
      </summary>
      <div className="pb-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
        {children}
      </div>
    </details>
  )
}

export function CabinetsPage() {
  const { open } = useRosa()

  return (
    <>
      {/* Hero */}
      <section
        aria-label="En-tête cabinets"
        className="bg-[var(--color-surface-default)] py-16 md:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[var(--color-brand-primary)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                >
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[var(--color-text-body)]">
                Cabinets
              </li>
            </ol>
          </nav>

          <h1 className="mb-4 font-heading text-4xl font-semibold leading-tight text-[var(--color-heading)] md:text-5xl lg:text-6xl">
            Deux cabinets pour vous accompagner à Bruxelles
          </h1>
          <p className="text-lg leading-relaxed text-[var(--color-text-muted)] md:text-xl">
            Choisissez le cabinet le plus proche de chez vous
          </p>
        </div>
      </section>

      {/* Cabinet Ixelles */}
      <section
        aria-label="Cabinet Defacqz — Ixelles"
        className="py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-2 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
                Cabinet Defacqz
              </h2>
              <p className="mb-6 text-base font-medium text-[var(--color-brand-primary)]">
                Ostéopathie · Ixelles
              </p>

              {/* Coordonnées */}
              <ul className="mb-6 space-y-3 text-sm text-[var(--color-text-muted)]">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[var(--color-brand-primary)]" aria-hidden="true" />
                  <span>Rue Defacqz 44, 1050 Ixelles</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-[var(--color-brand-primary)]" aria-hidden="true" />
                  <a
                    href="tel:+32489636943"
                    className="hover:text-[var(--color-brand-primary)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                  >
                    0489/63.69.43
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-[var(--color-brand-primary)]" aria-hidden="true" />
                  <a
                    href="mailto:clement.geneau.kine@gmail.com"
                    className="hover:text-[var(--color-brand-primary)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                  >
                    clement.geneau.kine@gmail.com
                  </a>
                </li>
              </ul>

              {/* Horaires */}
              <div className="mb-6 rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-muted)] p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Horaires
                </p>
                {/* TODO: horaires cabinet Ixelles */}
                <p className="text-sm text-[var(--color-text-muted)] italic">
                  Horaires à confirmer — contactez-nous
                </p>
              </div>

              {/* Accès transports */}
              <div className="mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Accès transports
                </p>
                <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                  <li className="flex items-center gap-2">
                    <Train size={16} className="shrink-0 text-[var(--color-brand-primary)]" aria-hidden="true" />
                    <span>Métro Lignes 2/6 — Porte de Namur (5 min à pied)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Bus size={16} className="shrink-0 text-[var(--color-brand-primary)]" aria-hidden="true" />
                    <span>Bus 54 / 71 — arrêt Defacqz</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={open}
                className="inline-flex items-center justify-center rounded-[var(--radius-default)] bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-text-on-brand)] shadow-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
              >
                Prendre RDV à Ixelles
              </button>
            </div>

            {/* Carte + galerie */}
            <div className="space-y-4">
              {/* Google Maps embed */}
              <div className="overflow-hidden rounded-[var(--radius-default)] border border-[var(--color-border-default)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.8!2d4.3567!3d50.8312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRue+Defacqz+44%2C+1050+Ixelles!5e0!3m2!1sfr!2sbe!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cabinet Defacqz, Rue Defacqz 44 Ixelles"
                  aria-label="Carte Google Maps — Cabinet Defacqz, Rue Defacqz 44, 1050 Ixelles"
                />
                <noscript>
                  <p className="p-3 text-sm text-[var(--color-text-muted)]">
                    Cabinet Defacqz — Rue Defacqz 44, 1050 Ixelles
                  </p>
                </noscript>
              </div>

              {/* Gallery placeholder */}
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-32 items-center justify-center rounded-[var(--radius-default)] bg-[var(--color-surface-muted)] text-xs text-[var(--color-text-muted)]"
                    aria-label={`Photo cabinet Ixelles ${i} — à remplacer`}
                  >
                    {/* TODO: photos cabinet Ixelles */}
                    Photo {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Etterbeek */}
      <section
        aria-label="Cabinet Auderghem — Etterbeek"
        className="bg-[var(--color-surface-muted)] py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-2 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
                Cabinet Auderghem
              </h2>
              <p className="mb-6 text-base font-medium text-[var(--color-brand-primary)]">
                Kinésithérapie · Etterbeek
              </p>

              {/* Coordonnées */}
              <ul className="mb-6 space-y-3 text-sm text-[var(--color-text-muted)]">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[var(--color-brand-primary)]" aria-hidden="true" />
                  <span>Avenue d&apos;Auderghem 59C, 1040 Etterbeek</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-[var(--color-brand-primary)]" aria-hidden="true" />
                  <a
                    href="tel:+32489636943"
                    className="hover:text-[var(--color-brand-primary)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                  >
                    0489/63.69.43
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-[var(--color-brand-primary)]" aria-hidden="true" />
                  <a
                    href="mailto:clement.geneau.kine@gmail.com"
                    className="hover:text-[var(--color-brand-primary)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                  >
                    clement.geneau.kine@gmail.com
                  </a>
                </li>
              </ul>

              {/* Horaires */}
              <div className="mb-6 rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Horaires
                </p>
                {/* TODO: horaires cabinet Etterbeek */}
                <p className="text-sm text-[var(--color-text-muted)] italic">
                  Horaires à confirmer — contactez-nous
                </p>
              </div>

              {/* Accès transports */}
              <div className="mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Accès transports
                </p>
                <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                  <li className="flex items-center gap-2">
                    <Bus size={16} className="shrink-0 text-[var(--color-brand-primary)]" aria-hidden="true" />
                    <span>Bus 34 / 80 — arrêt Auderghem</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Train size={16} className="shrink-0 text-[var(--color-brand-primary)]" aria-hidden="true" />
                    <span>Tram 8 — arrêt Etterbeek</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={open}
                className="inline-flex items-center justify-center rounded-[var(--radius-default)] bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-text-on-brand)] shadow-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
              >
                Prendre RDV à Etterbeek
              </button>
            </div>

            {/* Carte + galerie */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-[var(--radius-default)] border border-[var(--color-border-default)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.8!2d4.3867!3d50.8312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAvenue+d%27Auderghem+59C%2C+1040+Etterbeek!5e0!3m2!1sfr!2sbe!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cabinet Auderghem, Avenue d'Auderghem 59C Etterbeek"
                  aria-label="Carte Google Maps — Cabinet Auderghem, Avenue d'Auderghem 59C, 1040 Etterbeek"
                />
                <noscript>
                  <p className="p-3 text-sm text-[var(--color-text-muted)]">
                    Cabinet Auderghem — Avenue d&apos;Auderghem 59C, 1040 Etterbeek
                  </p>
                </noscript>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-32 items-center justify-center rounded-[var(--radius-default)] bg-[var(--color-surface-elevated)] text-xs text-[var(--color-text-muted)]"
                    aria-label={`Photo cabinet Etterbeek ${i} — à remplacer`}
                  >
                    {/* TODO: photos cabinet Etterbeek */}
                    Photo {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Tarifs */}
      <section aria-label="Tarifs et remboursements" className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
            Tarifs & remboursements
          </h2>
          <div className="rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] px-6">
            <AccordionItem title="Kinésithérapie conventionnée INAMI">
              {/* TODO: tarifs réels kinésithérapie conventionnée */}
              <p>Tarifs INAMI en vigueur. Remboursement partiel par la mutualité selon votre situation. Contactez-nous pour plus d&apos;informations.</p>
            </AccordionItem>
            <AccordionItem title="Kinésithérapie non conventionnée">
              {/* TODO: tarifs kinésithérapie non conventionnée */}
              <p>Tarifs à confirmer. Remboursement possible via assurance complémentaire. Contactez-nous pour un devis personnalisé.</p>
            </AccordionItem>
            <AccordionItem title="Ostéopathie">
              {/* TODO: tarifs ostéopathie */}
              <p>Séances d&apos;ostéopathie de 60 minutes. Tarifs à confirmer. Remboursement partiel possible selon votre mutualité ou assurance complémentaire.</p>
            </AccordionItem>
            <AccordionItem title="Modes de paiement">
              <p>Espèces et paiement mobile acceptés (Payconiq / Bancontact via QR code).</p>
            </AccordionItem>
            <AccordionItem title="Conventionnement INAMI partiel">
              <p>
                Clément Geneau est kinésithérapeute conventionné INAMI (numéro INAMI : 54366025517). Le conventionnement s&apos;applique aux actes de kinésithérapie. Les séances d&apos;ostéopathie ne sont pas remboursées par l&apos;INAMI mais peuvent être prises en charge partiellement par certaines mutuelles ou assurances complémentaires.
              </p>
            </AccordionItem>
          </div>
        </div>
      </section>

      <Testimonials filter="all" />
      <CTASection
        title="Prenez rendez-vous dans le cabinet le plus proche"
        description="Ixelles (Rue Defacqz 44) ou Etterbeek (Av. d'Auderghem 59C) — séances de 60 minutes."
        ctaLabel="Prendre rendez-vous"
      />
    </>
  )
}
