import type { Metadata } from 'next'
import { SITE_URL, INAMI } from '@/lib/constants'
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
  },
  robots: {
    index: false,
    follow: false,
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Clément Geneau',
  jobTitle: ['Kinésithérapeute', 'Ostéopathe D.O.'],
  identifier: INAMI,
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'ULB — Université Libre de Bruxelles',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'IAO — Institut Athena d\'Ostéopathie',
    },
  ],
  knowsLanguage: ['fr', 'en', 'es'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bruxelles',
    addressCountry: 'BE',
  },
  url: SITE_URL,
}

export default function AProposRoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <AProposPage />
    </>
  )
}
