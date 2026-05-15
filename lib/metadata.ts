import type { Metadata } from 'next';
import { SITE_URL } from './constants';

/**
 * Generates a canonical URL for a given pathname.
 * @param pathname - The route pathname (e.g. '/osteopathie')
 */
export function generateCanonical(pathname: string): string {
  const normalized = pathname === '/' ? '' : pathname.replace(/\/$/, '');
  return `${SITE_URL}${normalized}`;
}

interface GenerateMetadataOptions {
  title: string;
  description: string;
  pathname?: string;
  noIndex?: boolean;
}

/**
 * Generates Next.js Metadata for a page.
 */
export function generateMetadata({
  title,
  description,
  pathname = '/',
  noIndex = true,
}: GenerateMetadataOptions): Metadata {
  const canonical = generateCanonical(pathname);

  return {
    title,
    description,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      locale: 'fr_BE',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
