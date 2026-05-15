import { SITE_URL, INAMI } from './constants'

const PHONE = '+32489636943'
const EMAIL = 'clement.geneau.kine@gmail.com'
const FULL_NAME = 'Clément Geneau — Kinésithérapie & Ostéopathie'

// 1. Physician + MedicalBusiness (layout racine)
export function generatePhysicianSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Physician', 'MedicalBusiness'],
    name: FULL_NAME,
    identifier: INAMI,
    medicalSpecialty: ['PhysicalTherapy', 'Osteopathic'],
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    image: `${SITE_URL}/og/home.png`,
    sameAs: [SITE_URL],
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Rue Defacqz 44',
        addressLocality: 'Ixelles',
        postalCode: '1050',
        addressCountry: 'BE',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: "Avenue d'Auderghem 59C",
        addressLocality: 'Etterbeek',
        postalCode: '1040',
        addressCountry: 'BE',
      },
    ],
  }
}

// 2. LocalBusiness Ixelles
export function generateLocalBusinessIxellesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Clément Geneau — Ostéopathie Ixelles',
    url: `${SITE_URL}/osteopathie`,
    telephone: PHONE,
    email: EMAIL,
    image: `${SITE_URL}/og/osteopathie.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rue Defacqz 44',
      addressLocality: 'Ixelles',
      postalCode: '1050',
      addressCountry: 'BE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.8326,
      longitude: 4.3568,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    priceRange: '€€',
    medicalSpecialty: 'Osteopathic',
  }
}

// 3. LocalBusiness Etterbeek
export function generateLocalBusinessEtterbeekSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Clément Geneau — Kinésithérapie Etterbeek',
    url: `${SITE_URL}/kinesitherapie`,
    telephone: PHONE,
    email: EMAIL,
    image: `${SITE_URL}/og/kinesitherapie.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: "Avenue d'Auderghem 59C",
      addressLocality: 'Etterbeek',
      postalCode: '1040',
      addressCountry: 'BE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.8369,
      longitude: 4.3953,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    priceRange: '€€',
    medicalSpecialty: 'PhysicalTherapy',
  }
}

// 4. Service Ostéopathie
export function generateServiceOsteoSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name: 'Ostéopathie — Clément Geneau',
    description:
      "Séances d'ostéopathie de 60 minutes à Ixelles. Approche fasciale, viscérale et crânio-sacrée. Diplôme D.O. IAO.",
    url: `${SITE_URL}/osteopathie`,
    provider: {
      '@type': 'Physician',
      name: 'Clément Geneau',
      identifier: INAMI,
      telephone: PHONE,
      email: EMAIL,
    },
    areaServed: {
      '@type': 'City',
      name: 'Bruxelles',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://www.rosa.be/fr/hp/clement-geneau',
    },
  }
}

// 5. Service Kinésithérapie
export function generateServiceKineSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name: 'Kinésithérapie — Clément Geneau',
    description:
      'Séances de kinésithérapie de 60 minutes à Etterbeek. Sport, neurologie post-AVC, rééducation générale. Programme d\'exercices personnalisé.',
    url: `${SITE_URL}/kinesitherapie`,
    provider: {
      '@type': 'Physician',
      name: 'Clément Geneau',
      identifier: INAMI,
      telephone: PHONE,
      email: EMAIL,
    },
    areaServed: {
      '@type': 'City',
      name: 'Bruxelles',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://www.rosa.be/fr/hp/clement-geneau',
    },
  }
}

// 6. Person (a-propos)
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Clément Geneau',
    jobTitle: ['Kinésithérapeute', 'Ostéopathe D.O.'],
    identifier: INAMI,
    telephone: PHONE,
    email: EMAIL,
    url: SITE_URL,
    image: `${SITE_URL}/og/a-propos.png`,
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'ULB — Université Libre de Bruxelles',
      },
      {
        '@type': 'EducationalOrganization',
        name: "IAO — Institut Athena d'Ostéopathie",
      },
    ],
    knowsLanguage: ['fr', 'en', 'es'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bruxelles',
      addressCountry: 'BE',
    },
    worksFor: {
      '@type': 'MedicalBusiness',
      name: FULL_NAME,
      url: SITE_URL,
    },
  }
}

// 7. FAQPage (prend un array de {question, answer})
export function generateFAQPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
