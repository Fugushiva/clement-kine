# Checklist Performance Web

> Légende : `[critique]` impact direct sur LCP/CLS/INP · `[important]` gain significatif · `[optimisation]` amélioration fine

---

## État du projet clement-geneau

- [x] Fonts via `next/font` avec `display: swap` (Fraunces + Inter)
- [x] Images en formats AVIF/WebP via `next.config.ts`
- [x] `@vercel/analytics` conditionnel au consentement cookie
- [x] `@vercel/speed-insights` dans `app/layout.tsx`
- [x] Build statique (SSG) — toutes les routes pré-rendues
- [x] Pas de `<img>` raw — pas d'images dans le projet (texte uniquement)
- [ ] Lighthouse Performance ≥ 90 — à vérifier post-déploiement Vercel

---

*Voir `Hermes/rules/performance-checklist.md` pour la checklist complète (82 critères)*
