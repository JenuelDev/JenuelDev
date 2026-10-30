# Architecture and source map

## Independent applications

`www/` and `blog/` are separate applications with separate dependencies and builds. There is no shared workspace package for UI components. Their designs are coordinated through matching assets, typography, theme colors, and layout rules.

The portfolio loads its latest articles from `https://blog.jenuel.dev/articles.json?limit=3` in `www/src/components/AboutMe/LatestArticles.vue`. Keep the endpoint's article fields and cross-origin behavior compatible when changing it.

## Portfolio source

| Location | Responsibility |
| --- | --- |
| `www/src/router/index.ts` | Vue routes and navigation |
| `www/src/views/AboutMe/AboutMe.vue` | Homepage section composition |
| `www/src/components/AboutMe/` | Hero, work, experience, articles, and other homepage sections |
| `www/src/components/Header/` and `Footer/` | Site navigation and footer |
| `www/src/assets/styles/artcraft.scss` | Current visual system and responsive layout |
| `www/src/assets/styles/themes.scss` | Portfolio theme palettes |
| `www/src/components/themeChanger/` | Theme options, selection, and persistence |
| `www/src/constant/` | Career, projects, skills, and other portfolio content |
| `www/src/utils/seo.ts` | Portfolio SEO utilities |
| `www/public/` | Public logo, images, resume, and crawler files |

## Blog source

| Location | Responsibility |
| --- | --- |
| `blog/src/layouts/default.astro` | Document head, SEO, theme initialization, header, footer, and content wrapper |
| `blog/src/components/ArticleListing.astro` | Shared journal hero, category navigation, article cards, and empty states |
| `blog/src/pages/index.astro` | Latest 50 active articles and homepage structured data |
| `blog/src/pages/programming.astro`, `finance.astro` | Prerendered category queries and collection structured data |
| `blog/src/pages/blog/[...slug].astro` | Article query, reading page, author metadata, structured data, and missing-article status |
| `blog/src/pages/blog/index.astro` | Permanent redirect from `/blog` to `/` |
| `blog/src/lib/supabase.ts` | Server-side Supabase client |
| `blog/src/lib/og.ts` | Social-preview image URL generation |
| `blog/src/assets/styles.scss` | Existing palettes and text utilities |
| `blog/src/assets/craft.scss` | Main-site design adaptation, default palette, header/footer, and reading-page styles |
| `blog/src/lib/themes.ts` | Blog theme definitions |
| `blog/src/components/ThemeScript.astro`, `ThemeToggle.astro` | Initial theme and interactive selection |
| `blog/public/` | Public assets, including the copied JD logo |

## Content and endpoints

Articles come from Supabase's `blogs` table. Listing queries select active records with `is_active = 1`, order by descending `id`, and return at most 50 records. Category queries currently match `keywords_str` using `%programming%` or `%finance%`. They do not filter the `tags` array.

The article page looks up an active record by slug and joins `user_profile`. Article bodies are rendered as stored HTML. Changes to the publishing pipeline must account for that trusted-content boundary.

| Endpoint | Use |
| --- | --- |
| `/articles.json` | Article feed used by the portfolio, with an optional `limit` parameter |
| `/rss.xml` | RSS feed |
| `/sitemap.xml` | Sitemap |
| `/increment-count` | Article view-count endpoint |

Article pages retain their own canonical URL under `/blog/<slug>`. The shared layout provides canonical, Open Graph, Twitter, and crawler metadata. Keep these separate from cosmetic changes.

The `gumroad/` directory contains store HTML and its own design notes. Shared repository assets also live under `images/`, `SocialMediaSVG/`, and `certificates/`.
