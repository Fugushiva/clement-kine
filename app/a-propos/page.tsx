import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { generatePersonSchema } from '@/lib/schemas'
import { AProposPage } from '@/components/sections/AProposPage'

export const metadata: Metadata = {
  title: 'À propos de Clément Geneau | Kinésithérapeute & Ostéopathe Bruxelles',
  description:
    'Master ULB en kinésithérapie, Diplôme D.O. en ostéopathie IAO. 8 ans d\'expérience clinique dont 2 ans en revalidation neurologique.',
  alternates: {
    canonical: `${SITE_URL}/a-propos`,
  },
  openGraph: {
    title: 'À propos de Clément Geneau | Kinésithérapeute & Ostéopathe Bruxelles',
    description:
      'Master ULB en kinésithérapie, Diplôme D.O. en ostéopathie IAO. 8 ans d\'expérience clinique dont 2 ans en revalidation neurologique.',
    url: `${SITE_URL}/a-propos`,
    images: [
      {
        url: `${SITE_URL}/og/a-propos.png`,
        width: 1200,
        height: 630,
        alt: 'À propos de Clément Geneau — Kinésithérapeute & Ostéopathe',
      },
    ],
    type: 'website',
    locale: 'fr_BE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À propos de Clément Geneau | Kinésithérapeute & Ostéopathe',
    description:
      'Master ULB en kinésithérapie, Diplôme D.O. en ostéopathie IAO. 8 ans d\'expérience clinique.',
    images: [`${SITE_URL}/og/a-propos.png`],
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function AProposRoutePage() {
  const personSchema = generatePersonSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AProposPage />
    </>
  )
}
