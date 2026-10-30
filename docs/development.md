# Local development and deployment

## Prerequisites

Use Node.js 22.12.0 or newer, as required by the installed Astro version. The blog redesign was built with Node.js 24.15.0. Each application has its own `package.json` and `pnpm-lock.yaml`; install dependencies inside the application directory. The root package is not an application launcher.

The package manager pins are `pnpm@10.6.5` for `www` and `pnpm@10.13.1` for `blog`. Use the version declared by each package, through Corepack if available.

## Portfolio

From the repository root:

```powershell
cd www
pnpm install --frozen-lockfile
pnpm dev
```

Vite normally serves the portfolio at `http://localhost:5173`. Follow the URL printed by the command if the port is occupied.

```powershell
pnpm build
pnpm preview
```

`build` runs Vue type checking and the Vite production build. The output is `www/dist/`. `pnpm format` formats the entire portfolio source, so review its diff before committing.

## Blog

Create `blog/.env` using [`blog/.env.example`](../blog/.env.example), then supply the existing project's Supabase URL and appropriate key. Obtain values from the project owner or deployment environment. Keep `.env` untracked and keep these variables server-side, without a `PUBLIC_` prefix.

```powershell
cd blog
pnpm install --frozen-lockfile
pnpm dev
```

Astro normally serves the blog at `http://localhost:4321`. Database access is needed to load article lists and individual posts.

```powershell
pnpm build
```

The build script runs `astro check` followed by `astro build`. Finance and programming listings are prerendered and query Supabase during the build. Other routes, including the homepage and article pages, use server rendering. A failed database request can leave a prerendered category with an unavailable message, so also inspect the generated category HTML when validating a deployment.

For local HTTP checks, use `pnpm dev`. The blog uses the Netlify adapter, so production behavior should also be checked in the existing Netlify environment rather than assuming a plain static server can run every route.

## Deployment configuration

| Application | Tracked configuration | Build | Output |
| --- | --- | --- | --- |
| Portfolio | `www/vercel.json` includes SPA route rewrites | `pnpm build` from `www/` | `www/dist/` |
| Blog | `blog/astro.config.mjs` selects the Netlify adapter; `blog/netlify.toml` declares the build command | `npm run build` from `blog/` | `blog/dist/` plus adapter-generated functions |

Configure each hosting project to use its application directory as the project root. Set the blog's Supabase environment variables for builds and server execution. Preserve `https://blog.jenuel.dev` as Astro's `site` value unless intentionally changing domains.

The tracked configuration does not establish which Git branch automatically deploys, or the hosting account's settings. Check those in the existing hosting project before publishing. A successful local build does not publish changes.

## Verification

For blog appearance changes:

1. Run `pnpm build` inside `blog/`.
2. Open `/`, `/programming`, `/finance`, and an existing `/blog/<slug>`.
3. Check desktop and narrow mobile layouts, category links, keyboard focus, the mobile menu, and the theme chooser.
4. Switch between Default, Teal, and the light themes, then reload. Confirm the chosen theme persists.
5. Confirm the article body, code blocks, tables, RSS link, and canonical URLs remain usable.

For portfolio changes, run `pnpm build` inside `www/` and inspect the affected routes.
