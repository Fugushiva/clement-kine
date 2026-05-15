import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  title?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

export function CTASection({
  title = 'Prêt à reprendre rendez-vous avec votre corps ?',
  description = 'Séances de 60 minutes, double expertise kiné & ostéo, suivi personnalisé.',
  ctaLabel = 'Prendre rendez-vous',
  ctaHref = '#rdv',
  className,
}: CTASectionProps) {
  return (
    <section
      aria-label="Appel à l'action"
      className={cn(
        'bg-[var(--color-brand-primary)] py-16 md:py-24 lg:py-32',
        className
      )}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 font-heading text-3xl font-semibold text-[var(--color-text-on-brand)] md:text-4xl">
          {title}
        </h2>
        <p className="mb-8 text-lg text-[var(--color-text-on-brand)] opacity-90">
          {description}
        </p>
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center rounded-[var(--radius-default)] bg-[var(--color-surface-default)] px-8 py-4 text-base font-semibold text-[var(--color-brand-primary)] shadow-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-surface-default)]"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  )
}
