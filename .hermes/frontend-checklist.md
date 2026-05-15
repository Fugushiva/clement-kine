# Checklist Frontend — clement-geneau

> Légende des tags : `[base]` fondamental · `[a11y]` accessibilité · `[perf]` performance · `[ux]` expérience utilisateur

---

## État du projet

- [x] Mobile-first responsive (Tailwind CSS)
- [x] Design tokens OKLCH dans `app/globals.css`
- [x] Typographie : Fraunces (heading) + Inter (body) — 2 familles max
- [x] Navbar mobile avec hamburger + focus trap + aria-expanded
- [x] Footer avec liens légaux + trigger "Gérer mes cookies"
- [x] Skip nav link `<a href="#main-content">` dans layout.tsx
- [x] Single `<main id="main-content">` dans layout.tsx
- [x] Single `<footer>` dans layout.tsx
- [x] `<html lang="fr">` dans layout.tsx
- [x] Focus-visible ring sur tous les éléments interactifs
- [x] `prefers-reduced-motion` géré dans globals.css
- [ ] Smooth scroll (Lenis) — non implémenté (optionnel)
- [ ] Animations GSAP/Framer — non implémentées (optionnel)

---

*Voir `Hermes/rules/frontend-checklist.md` pour la checklist complète (107 éléments)*
