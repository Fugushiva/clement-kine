import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
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
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function CabinetsRoutePage() {
  return <CabinetsPage />
}
