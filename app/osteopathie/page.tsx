import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { OsteoHero } from '@/components/sections/OsteoHero'
import { OsteoApproaches } from '@/components/sections/OsteoApproaches'
import { OsteoPathologies } from '@/components/sections/OsteoPathologies'
import { OsteoWhy60 } from '@/components/sections/OsteoWhy60'
import { OsteoFAQ } from '@/components/sections/OsteoFAQ'
import { CabinetCard } from '@/components/sections/CabinetCard'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Ostéopathe à Ixelles — Clément Geneau | Kiné & Ostéo Bruxelles',
  description:
    'Ostéopathe D.O. à Ixelles. Approche fasciale, viscérale et crânio-sacrée. Séances de 60 minutes au cœur d\'Ixelles.',
  alternates: {
    canonical: `${SITE_URL}/osteopathie`,
  },
  openGraph: {
    title: 'Ostéopathe à Ixelles — Clément Geneau | Kiné & Ostéo Bruxelles',
    description:
      'Ostéopathe D.O. à Ixelles. Approche fasciale, viscérale et crânio-sacrée. Séances de 60 minutes.',
    url: `${SITE_URL}/osteopathie`,
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function OsteopathiePage() {
  return (
    <main id="main-content">
      <OsteoHero />
      <OsteoApproaches />
      <OsteoPathologies />
      <OsteoWhy60 />
      <OsteoFAQ />
      <section
        aria-label="Cabinet Ixelles"
        className="py-16 md:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
            Cabinet Ixelles
          </h2>
          <div className="mx-auto max-w-md">
            <CabinetCard
              name="Cabinet Ixelles"
              address="Rue Defacqz 44"
              city="1050 Ixelles"
              specialty="Ostéopathie"
              mapsUrl="https://maps.google.com/?q=Rue+Defacqz+44+1050+Ixelles"
            />
          </div>
        </div>
      </section>
      <Testimonials filter="osteopathy" />
      <CTASection
        ctaLabel="Prendre RDV à Ixelles"
        description="Cabinet Ixelles — Rue Defacqz 44, 1050 Ixelles. Séances de 60 minutes."
      />
    </main>
  )
}
