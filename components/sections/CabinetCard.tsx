import Link from 'next/link'
import { MapPin, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CabinetCardProps {
  name: string
  address: string
  city: string
  specialty: string
  mapsUrl: string
  mapsEmbedUrl?: string
  className?: string
}

export function CabinetCard({
  name,
  address,
  city,
  specialty,
  mapsUrl,
  mapsEmbedUrl,
  className,
}: CabinetCardProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[var(--radius-default)] border border-[var(--color-border-default)] bg-[var(--color-surface-elevated)] shadow-sm',
        className
      )}
    >
      {/* Map preview */}
      <div className="relative h-48 bg-[var(--color-surface-muted)]">
        {mapsEmbedUrl ? (
          <iframe
            src={mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Carte du cabinet ${name}`}
            className="h-full w-full"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <MapPin
              size={32}
              strokeWidth={1.5}
              className="text-[var(--color-text-muted)]"
              aria-hidden="true"
            />
          </div>
        )}
        <noscript>
          <p className="p-4 text-sm text-[var(--color-text-muted)]">
            {address}, {city}
          </p>
        </noscript>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-[var(--color-brand-primary)]">
          {specialty}
        </p>
        <h3 className="mb-2 font-heading text-lg font-semibold text-[var(--color-heading)]">
          {name}
        </h3>
        <address className="mb-4 flex items-start gap-2 not-italic text-sm text-[var(--color-text-muted)]">
          <MapPin
            size={16}
            strokeWidth={1.5}
            className="mt-0.5 shrink-0 text-[var(--color-brand-primary)]"
            aria-hidden="true"
          />
          <span>
            {address}
            <br />
            {city}
          </span>
        </address>
        <Link
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-brand-primary)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
        >
          Voir sur Google Maps
          <ExternalLink size={14} strokeWidth={1.5} aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
