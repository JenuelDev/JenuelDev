# Copilot Instructions for JenuelDev Codebase

## Codebase Overview
**Monorepo structure**: `/www` (Vue 3 portfolio SPA) and `/blog` (Astro-based blog at blog.jenuel.dev).
**Package Manager**: pnpm (v10.6.5+) for all projects.
**Deployment**: `/www` → Vercel, `/blog` → Netlify.

---

## WWW Project (Vue 3 SPA) – PRIMARY FOCUS

### Tech Stack & Build
- **Framework**: Vue 3.5 (Composition API + TypeScript 5.8)
- **Build Tool**: Vite 6 with ts strict mode via `vue-tsc`
- **Styling**: UnoCSS (not Tailwind) - utility variants in `uno.config.ts`
- **State**: Pinia (composition-style stores in `/stores`)
- **Icons**: @iconify/vue (lightweight, unplugged)
- **Email**: @emailjs/browser for contact forms
- **Routing**: Vue Router 4 with route meta for dynamic titles

### Architecture & Patterns

#### File Organization
```
src/
├── components/        # Organized by feature (AboutMe/, Form/, etc.)
├── views/            # Route-level components (AboutMe/, ContactMe/, etc.)
├── stores/           # Pinia stores (composition API style)
├── router/           # Vue Router with meta-based title management
├── directives/       # Custom directives (scrollAnimation, click-outside)
├── constant/         # TypeScript data (TechnicalSkills, projects, etc.)
├── types/            # Shared TypeScript interfaces
└── assets/           # Styles (SCSS), images, SVG icons
```

#### Key Patterns to Follow
1. **Custom Directives**: Register in `main.ts` (e.g., `v-scrollanimation`, `v-click-outside`)
2. **Router Meta Titles**: Every route has a `meta: { title: "..." }` → updated in `beforeEach` guard
3. **Pinia Stores**: Use composition-style `defineStore` with `ref()` and `reactive()`; avoid option-style
4. **Components**: Organized by feature in subdirectories (e.g., `Form/`, `Header/`) with barrel exports
5. **Constants**: Data-heavy content (projects, skills, etc.) live in `/constant` as TS files, not hardcoded

#### Styling Details
- **UnoCSS over Tailwind**: Utilities are more compact; check `uno.config.ts` for custom rules
- **Inside `www/`, default to UnoCSS utilities for all new styling work**: only use scoped SCSS when UnoCSS cannot reasonably express the requirement
- **Scoped SCSS**: Use `<style scoped>` in `.vue` files; SCSS variables defined in `assets/main.scss`
- **Theme System**: CSS variables for theming (e.g., colors, spacing) applied globally

### Component & Composable Development
- **`<script setup>`**: Always use this syntax for new components (shorter, better performance)
- **Props & Emits**: Use `defineProps<T>()` and `defineEmits<T>()` with TypeScript generics
- **Composables**: Reusable logic (e.g., form handling) extracted to `/composables` directory
- **Runtime Validation**: Minimal; rely on TypeScript strict mode for type safety

### Data & State Flow
1. **Global State** → Pinia stores (`show`, `navShow`, `workShow`)
2. **Route-Level Data** → Constants imported from `/constant` (immutable)
3. **Component Local State** → `ref()`, `reactive()` in `setup()`
4. **Forms** → Handled via email service (@emailjs) or managed in local state

### Development Workflow
```bash
# Install & dev
cd www
pnpm install
pnpm dev          # Vite dev server on localhost:5173

# Build & type-check
pnpm type-check   # Vue TypeScript compiler
pnpm build        # Optimized production bundle
pnpm preview      # Preview build locally
pnpm format       # Prettier formatting
```

### Common Tasks
- **Add Route**: Define in `/router/index.ts` with meta title; lazy-load via `() => import('@/views/...')`
- **Create Component**: Place in `/components`, use `<script setup lang="ts">`, export by filename
- **Add Page Content**: Create `.vue` in `/views`, register route, populate with components
- **Store Global State**: Use Pinia composition-style in `/stores`; expose via `return {}`
- **Styling**: Use UnoCSS utility classes + scoped SCSS for component-specific styles

---

## BLOG Project (Astro)

### Tech Stack
- **Framework**: Astro 5 (static + dynamic pages via Vue components)
- **Styling**: UnoCSS (consistent with `/www`)
- **Content**: Markdown posts in routes with Supabase integration
- **Deployment**: Netlify with `@astrojs/netlify` adapter

### Key Details
- Routes generated from `.astro` and `.md` files in `src/pages/`
- Vue components can be embedded in Astro templates
- RSS feed auto-generated; sitemap configured
- Open Graph images via `@vercel/og`

---

## Existing Instructions & References

### Follow These Files
- **Vue 3 Standards**: `.github/instructions/vuejs3.instructions.md` (detailed patterns, validation, testing, security)
- **Project README**: Root `README.md` for tools/skills; `/www/README.md` for portfolio context

### Performance & Optimization
- **Type Checking**: Run `pnpm run type-check` before commits; `--build` flag catches multi-file issues
- **Bundle**: Vite auto tree-shakes unused code; monitor via `pnpm build` output
- **Lazy Routes**: Already implemented in router; add new routes with `() => import(...)`

---

## Common Fixes & Troubleshooting

### Build Fails
- Run `pnpm type-check` to catch TypeScript errors early
- Clear node_modules: `rm -r node_modules pnpm-lock.yaml && pnpm install`
- Check Vite config for plugin conflicts (UnoCSS + Vue)

### Vue Components Won't Load
- Verify `<script setup lang="ts">` syntax is correct
- Props must be typed with `defineProps<{ ... }>()`; default values via destructuring in JSDoc
- Check import paths use `@/` alias; relative paths require exact extensions

### Styling Not Applied
- Ensure `<style scoped>` is present; unscoped styles leak globally
- UnoCSS utilities must match config; check `uno.config.ts`
- SCSS variables only available if imported or in global `main.scss`

---

## When to Ask for Clarification
- Ambiguity on Pinia vs. local state for a feature
- Whether to add a new composable vs. inline logic
- Component placement (feature folder vs. generic `/components`)
- Styling approach (UnoCSS utility vs. scoped SCSS)

---

## Summary: Critical Success Factors
1. **Always use TypeScript strict mode** – catch errors early
2. **Follow component organization by feature** – maintainability at scale
3. **Router meta titles for SEO** – required for every route
4. **UnoCSS, not Tailwind** – project standard
5. **Pinia composition-style stores** – not options API
6. **Lazy-load routes** – performance by default
