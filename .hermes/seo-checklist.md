# Checklist SEO — Éléments à penser pour un site web

> Légende des tags : `[base]` fondamental · `[tech]` technique · `[contenu]` éditorial · `[off]` off-page

---

## 0. Posture d'indexation — Règle Hermes (PRIORITAIRE)

> **RÈGLE ABSOLUE** : Tout site construit par le système Hermes est livré en mode **"invisible"** par défaut.
> L'indexation Google est **volontairement bloquée** lors du build. Elle sera activée manuellement par le propriétaire après la vente, s'il le décide.

### Implémentation obligatoire au build

- [x] **`robots.txt` bloquant tout** — `Disallow: /` présent dans `public/robots.txt`
- [x] **`X-Robots-Tag: noindex` en header HTTP** — Configuré dans `next.config.ts`
- [x] **`<meta name="robots" content="noindex, nofollow">` global** — Via metadata dans `app/layout.tsx`
- [ ] **Sitemap XML non soumis à Google Search Console** — Ne pas soumettre avant signature client
- [ ] **Pas de Google Search Console configuré** — Ne pas créer de propriété GSC
- [ ] **Pas de Google Analytics / GA4** — Vercel Analytics conditionnel au consentement cookie

### Activation post-vente (hors scope Hermes)

Quand le client signe, il doit lui-même (ou son développeur) :
1. Remplacer le `robots.txt` par un fichier autorisant les crawlers
2. Supprimer le header `X-Robots-Tag: noindex` dans `next.config.ts`
3. Changer la meta robots en `index, follow` dans `app/layout.tsx`
4. Créer et vérifier la propriété Google Search Console
5. Soumettre le sitemap

---

*Voir `Hermes/rules/seo-checklist.md` pour la checklist complète (100 critères)*
