import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import {
  generateLocalBusinessIxellesSchema,
  generateLocalBusinessEtterbeekSchema,
} from '@/lib/schemas'
import { CabinetsPage } from '@/components/sections/CabinetsPage'

export const metadata: Metadata = {
  title: 'Nos cabinets à Ixelles et Etterbeek | Clément Geneau',
  description:
    'Nos deux cabinets : Defacqz à Ixelles (ostéopathie) et Auderghem à Etterbeek (kinésithérapie). Horaires, accès, contact.',
  alternates: {
    canonical: `${SITE_URL}/cabinets`,
  },
  openGraph: {
    title: 'Nos cabinets à Ixelles et Etterbeek | Clément Geneau',
    description:
      'Nos deux cabinets : Defacqz à Ixelles (ostéopathie) et Auderghem à Etterbeek (kinésithérapie). Horaires, accès, contact.',
    url: `${SITE_URL}/cabinets`,
    images: [
      {
        url: `${SITE_URL}/og/cabinets.png`,
        width: 1200,
        height: 630,
        alt: 'Cabinets Ixelles et Etterbeek — Clément Geneau',
      },
    ],
    type: 'website',
    locale: 'fr_BE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nos cabinets à Ixelles et Etterbeek | Clément Geneau',
    description:
      'Nos deux cabinets : Defacqz à Ixelles (ostéopathie) et Auderghem à Etterbeek (kinésithérapie).',
    images: [`${SITE_URL}/og/cabinets.png`],
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function CabinetsRoutePage() {
  const localBusinessIxelles = generateLocalBusinessIxellesSchema()
  const localBusinessEtterbeek = generateLocalBusinessEtterbeekSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessIxelles) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessEtterbeek) }}
      />
      <CabinetsPage />
    </>
  )
}
