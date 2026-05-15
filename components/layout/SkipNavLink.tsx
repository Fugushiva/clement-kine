export function SkipNavLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-[var(--radius-default)] focus:bg-[var(--color-brand-primary)] focus:px-4 focus:py-2 focus:text-[var(--color-text-on-brand)] focus:font-medium focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-focus-ring)] focus:ring-offset-2"
    >
      Aller au contenu principal
    </a>
  );
}
