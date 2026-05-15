import { SITE_URL } from './constants';

/**
 * Generates a canonical URL for a given pathname.
 * @param pathname - The route pathname (e.g. '/osteopathie')
 */
export function generateCanonical(pathname: string): string {
  const normalized = pathname === '/' ? '' : pathname.replace(/\/$/, '');
  return `${SITE_URL}${normalized}`;
}
