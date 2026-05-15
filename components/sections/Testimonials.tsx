'use client'

import { testimonials, type Testimonial } from '@/content/testimonials'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TestimonialsProps {
  filter?: Testimonial['specialty']
  className?: string
}

export function Testimonials({ filter = 'all', className }: TestimonialsProps) {
  const filtered =
    filter === 'all'
      ? testimonials
      : testimonials.filter((t) => t.specialty === filter)

  return (
    <section
      aria-label="Témoignages patients"
      className={cn('py-16 md:py-24 lg:py-32', className)}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
          Ce que disent nos patients
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-1" aria-label={`Note : ${testimonial.rating} sur 5`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    strokeWidth={1.5}
                    className="fill-[var(--color-accent)] text-[var(--color-accent)]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {testimonial.text}
              </p>
              <footer className="text-sm font-medium text-[var(--color-text-body)]">
                <span>{testimonial.name}</span>
                <time
                  dateTime={testimonial.date}
                  className="ml-2 text-[var(--color-text-muted)]"
                >
                  {new Date(testimonial.date).toLocaleDateString('fr-BE', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </time>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
