import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { HomeHero } from '@/components/sections/HomeHero'
import { HomeWedges } from '@/components/sections/HomeWedges'
import { HomeServicesOverview } from '@/components/sections/HomeServicesOverview'
import { HomeStats } from '@/components/sections/HomeStats'
import { HomeCabinetsPreview } from '@/components/sections/HomeCabinetsPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTASection } from '@/components/sections/CTASection'
import { StickyCTABar } from '@/components/sections/StickyCTABar'

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Clément Geneau — Kinésithérapeute & Ostéopathe à Bruxelles',
    description:
      'Kinésithérapeute et ostéopathe à Bruxelles. Séances de 60 minutes, double expertise ULB + D.O. IAO, expérience neurologique VALIDA.',
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og/home.png`,
        width: 1200,
        height: 630,
        alt: 'Clément Geneau — Kinésithérapie & Ostéopathie à Bruxelles',
      },
    ],
    type: 'website',
    locale: 'fr_BE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clément Geneau — Kinésithérapeute & Ostéopathe à Bruxelles',
    description:
      'Kinésithérapeute et ostéopathe à Bruxelles. Séances de 60 minutes, double expertise ULB + D.O. IAO.',
    images: [`${SITE_URL}/og/home.png`],
  },
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeWedges />
      <HomeServicesOverview />
      <HomeStats />
      <HomeCabinetsPreview />
      <Testimonials filter="all" />
      <CTASection />
      <StickyCTABar />
    </>
  )
}
