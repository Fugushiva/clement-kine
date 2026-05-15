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
    text: '<!-- TODO: témoignage réel patient ostéopathie -->',
    rating: 5,
    date: '2024-03-15',
    specialty: 'osteopathy',
  },
  {
    id: '2',
    name: 'Thomas D.',
    text: '<!-- TODO: témoignage réel patient kinésithérapie sport -->',
    rating: 5,
    date: '2024-02-20',
    specialty: 'kinesitherapy',
  },
  {
    id: '3',
    name: 'Sophie M.',
    text: '<!-- TODO: témoignage réel patient neurologique -->',
    rating: 5,
    date: '2024-01-10',
    specialty: 'kinesitherapy',
  },
]
