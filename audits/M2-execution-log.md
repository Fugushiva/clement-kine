# M2 Execution Log — Design System & Navigation
## Slug: clement-geneau | Branch: phase/M2-design-system | Date: 2026-05-15

---

## Summary

| Item | Value |
|------|-------|
| Phase | M2 |
| Branch | phase/M2-design-system |
| HEAD | 86deeb4 |
| Commits | 4 (+ 1 fix) |
| Files touched | 20 |
| Build status | ✅ PASS |
| TSC status | ✅ PASS |
| ESLint status | ✅ PASS |
| Audit verdict | PASS |

---

## Task M2-1: Atomic UI Components

**Agent**: Direct write (trivial/easy)
**Files written**:
- `lib/utils.ts` — cn() with clsx + tailwind-merge
- `components/ui/Button.tsx` — variants: primary/secondary/outline, sizes: sm/md/lg
- `components/ui/Card.tsx` — generic with className prop + CardHeader/CardBody
- `components/ui/Badge.tsx` — variants: default/brand/success/muted
- `components/ui/Accordion.tsx` — aria-expanded, keyboard Enter/Space, hidden panel, allowMultiple
- `components/ui/Breadcrumb.tsx` — JSON-LD BreadcrumbList integrated, aria-current
- `components/ui/Tabs.tsx` — keyboard arrows+Home/End, aria-controls, aria-selected, tabIndex=-1 for inactive

**Commit**: 5ac53a4
**Validation**: TSC ✅ | ESLint ✅

**Compliance checks**:
- ✅ TypeScript strict (no `any`)
- ✅ Zero hex/rgb (all var(--color-*))
- ✅ Lucide icons stroke-width 1.5
- ✅ focus-visible:ring-2 ring-[var(--color-focus-ring)]
- ✅ Keyboard navigation (Accordion: Enter/Space; Tabs: arrows+Home/End)
- ✅ ARIA attributes (aria-expanded, aria-controls, aria-selected, aria-current)

---

## Task M2-2: Layout Components

**Agent**: Direct write (medium)
**Files written**:
- `components/layout/SkipNavLink.tsx` — sr-only except focus, href="#main-content"
- `components/layout/Navbar.tsx` — sticky, logo, 5 nav links, CTA "Prendre RDV", hamburger mobile
- `components/layout/Footer.tsx` — 3 columns: identity+INAMI+addresses, legal nav, contact
- `components/layout/CookieBanner.tsx` — 3 equal buttons, modal Personnaliser, localStorage
- `app/layout.tsx` — integrated all 4 layout components

**Commit**: a8f9736
**Validation**: TSC ✅ | ESLint ✅ (after fix)

**Compliance checks**:
- ✅ Navbar: sticky, aria-expanded hamburger, Escape close, focus trap in mobile menu
- ✅ Footer: INAMI 54366025517 visible, 3 columns, "Gérer mes cookies" button
- ✅ CookieBanner: 3 buttons equal visibility, localStorage key `cookie-consent`, aria-modal, focus trap
- ✅ SkipNavLink: sr-only except focus, href="#main-content"
- ✅ All integrated in app/layout.tsx

**Issues encountered**:
1. Footer had `window.dispatchEvent` in a Server Component → fixed by adding `'use client'` directive
2. CookieBanner had `setVisible` called directly in `useEffect` → fixed with lazy `useState` initializer

**Fix commit**: 86deeb4

---

## Task M2-3: Routing Structure + Page Skeletons

**Agent**: Direct write (easy)
**Files written**:
- `lib/metadata.ts` — updated with `generateMetadata()` helper
- `app/page.tsx` — Home `/`
- `app/osteopathie/page.tsx` — `/osteopathie`
- `app/kinesitherapie/page.tsx` — `/kinesitherapie`
- `app/cabinets/page.tsx` — `/cabinets`
- `app/a-propos/page.tsx` — `/a-propos`
- `app/mentions-legales/page.tsx` — INAMI 54366025517, 2 cabinets, phone, email, Vercel host, TODO BCE
- `app/politique-confidentialite/page.tsx` — RGPD sections (responsable, données, finalités, droits, APD)
- `app/politique-cookies/page.tsx` — cookies table (Vercel Analytics, Speed Insights, Rosa.be, cookie-consent)

**Commit**: 52ba235
**Validation**: TSC ✅ | ESLint ✅

**Compliance checks**:
- ✅ 8 routes navigable
- ✅ Each page exports generateMetadata with title/description/canonical
- ✅ Each page has `<main id="main-content">`
- ✅ Legal pages contain INAMI 54366025517
- ✅ `/politique-cookies` declares Vercel Analytics, Speed Insights, Rosa.be
- ✅ `/politique-confidentialite` has APD link (www.autoriteprotectiondonnees.be)
- ✅ TODO BCE marked in `/mentions-legales`

---

## Build Gates

| Gate | Result |
|------|--------|
| `npm run build` | ✅ PASS — 11 static routes (8 pages + /_not-found + 2 others) |
| `npx tsc --noEmit` | ✅ PASS — 0 errors |
| `npx eslint . --max-warnings 0` | ✅ PASS — 0 errors, 0 warnings |

---

## Phase Audit — M2

### AXIS 1: Design Tokens
- ✅ All components use var(--color-*) CSS variables only
- ✅ No hex/rgb values in any component
- ✅ Radius uses var(--radius-default)

### AXIS 2: TypeScript
- ✅ Strict mode enabled
- ✅ No `any` types
- ✅ All props properly typed

### AXIS 3: Accessibility
- ✅ Button: focus-visible ring, disabled state
- ✅ Accordion: aria-expanded, aria-controls, keyboard Enter/Space
- ✅ Tabs: aria-selected, aria-controls, keyboard arrows+Home/End, tabIndex management
- ✅ Breadcrumb: aria-current="page" on last item
- ✅ Navbar: aria-expanded hamburger, aria-controls, Escape close, focus trap
- ✅ CookieBanner: aria-modal, focus trap, Escape close
- ✅ SkipNavLink: sr-only except focus

### AXIS 4: Routing
- ✅ 8 routes created (5 métier + 3 légales)
- ✅ All routes match site-plan §2 architecture
- ✅ URL slugs in kebab-case, no accents

### AXIS 5: Page Structure
- ✅ Each page has `<main id="main-content">`
- ✅ Root layout has Navbar + Footer + CookieBanner + SkipNavLink
- ✅ No duplicate `<main>` elements

### AXIS 6: Legal Compliance
- ✅ INAMI 54366025517 in Footer
- ✅ INAMI 54366025517 in /mentions-legales
- ✅ Cookie banner: 3 equal buttons (Accepter/Refuser/Personnaliser)
- ✅ "Gérer mes cookies" in Footer
- ✅ localStorage key `cookie-consent` with {analytics, third_party, timestamp}
- ✅ APD link in /politique-confidentialite
- ✅ Vercel Analytics + Speed Insights + Rosa.be declared in /politique-cookies

### AXIS 7: Build
- ✅ npm run build PASS
- ✅ tsc --noEmit PASS
- ✅ eslint --max-warnings 0 PASS

### VERDICT: PASS

---

## Errors Recovered

1. **Footer Server Component + onClick**: Footer used `window.dispatchEvent` which is browser-only. Fixed by adding `'use client'` directive. Pattern: any component with browser APIs must be a Client Component.

2. **CookieBanner react-hooks/set-state-in-effect**: ESLint rule `react-hooks/set-state-in-effect` flagged `setVisible(true)` inside `useEffect`. Fixed by using lazy `useState` initializer `() => getStoredConsent() === null` which runs only on client mount. Pattern: use lazy initializer for localStorage-dependent state.

---

## Telemetry

| Metric | Value |
|--------|-------|
| cascade_max_level | 1 |
| pii_sanitization_calls | 0 |
| subagent_dispatches | 0 |
| direct_writes_by_executor | 20 |
| build_attempts | 2 |
| eslint_fix_rounds | 1 |
