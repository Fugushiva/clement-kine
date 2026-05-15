// TODO: remplacer par les vrais témoignages de Clément Geneau
export type Testimonial = {
  id: string
  name: string
  text: string
  rating: number
  date: string
  specialty: 'all' | 'osteopathy' | 'kinesitherapy'
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie L.',
    text: 'Après plusieurs mois de douleurs lombaires chroniques, les séances d\'ostéopathie avec Clément ont vraiment changé la donne. Son approche globale et ses explications claires m\'ont permis de comprendre l\'origine de mes douleurs. Je recommande vivement.',
    rating: 5,
    date: '2025-03-15',
    specialty: 'osteopathy',
  },
  {
    id: '2',
    name: 'Thomas D.',
    text: 'Suivi post-opératoire du genou après une rupture des ligaments croisés. Clément a conçu un programme de rééducation progressif et très bien adapté à mon niveau sportif. Retour au terrain en 6 mois, comme prévu. Excellent professionnel.',
    rating: 5,
    date: '2025-02-20',
    specialty: 'kinesitherapy',
  },
  {
    id: '3',
    name: 'Sophie M.',
    text: 'Prise en charge en kinésithérapie neurologique après un AVC. La patience et la compétence de Clément ont été déterminantes dans ma récupération motrice. Les séances de 60 minutes permettent un travail en profondeur que je n\'avais pas trouvé ailleurs.',
    rating: 5,
    date: '2025-01-10',
    specialty: 'kinesitherapy',
  },
]
