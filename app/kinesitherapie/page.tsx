import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import {
  generateServiceKineSchema,
  generateLocalBusinessEtterbeekSchema,
} from '@/lib/schemas'
import { KineHero } from '@/components/sections/KineHero'
import { KineTabs } from '@/components/sections/KineTabs'
import { KineExerciseProgram } from '@/components/sections/KineExerciseProgram'
import { KineFAQ } from '@/components/sections/KineFAQ'
import { CabinetCard } from '@/components/sections/CabinetCard'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Kinésithérapeute à Etterbeek — Clément Geneau | Kiné & Ostéo Bruxelles',
  description:
    'Kinésithérapeute à Etterbeek. Sport, neurologie post-AVC, rééducation générale. Programme d\'exercices personnalisé en ligne.',
  alternates: {
    canonical: `${SITE_URL}/kinesitherapie`,
  },
  openGraph: {
    title: 'Kinésithérapeute à Etterbeek — Clément Geneau | Kiné & Ostéo Bruxelles',
    description:
      'Kinésithérapeute à Etterbeek. Sport, neurologie post-AVC, rééducation générale.',
    url: `${SITE_URL}/kinesitherapie`,
    images: [
      {
        url: `${SITE_URL}/og/kinesitherapie.png`,
        width: 1200,
        height: 630,
        alt: 'Kinésithérapie à Etterbeek — Clément Geneau',
      },
    ],
    type: 'website',
    locale: 'fr_BE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kinésithérapeute à Etterbeek — Clément Geneau',
    description:
      'Kinésithérapeute à Etterbeek. Sport, neurologie post-AVC, rééducation générale.',
    images: [`${SITE_URL}/og/kinesitherapie.png`],
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function KinesitherapiePage() {
  const serviceKineSchema = generateServiceKineSchema()
  const localBusinessEtterbeek = generateLocalBusinessEtterbeekSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceKineSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessEtterbeek) }}
      />
      <KineHero />
      <KineTabs />
      <KineExerciseProgram />
      <KineFAQ />
      <section
        aria-label="Cabinet Etterbeek"
        className="bg-[var(--color-surface-muted)] py-16 md:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
            Cabinet Etterbeek
          </h2>
          <div className="mx-auto max-w-md">
            <CabinetCard
              name="Cabinet Etterbeek"
              address="Avenue d'Auderghem 59C"
              city="1040 Etterbeek"
              specialty="Kinésithérapie"
              mapsUrl="https://maps.google.com/?q=Avenue+d%27Auderghem+59C+1040+Etterbeek"
            />
          </div>
        </div>
      </section>
      <Testimonials filter="kinesitherapy" />
      <CTASection
        ctaLabel="Prendre RDV à Etterbeek"
        description="Cabinet Etterbeek — Avenue d'Auderghem 59C, 1040 Etterbeek. Séances de 60 minutes."
      />
    </>
  )
}
