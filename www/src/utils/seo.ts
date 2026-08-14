/**
 * Minimal runtime SEO head manager.
 *
 * The app is a client-rendered SPA, so index.html only ever ships the homepage's
 * head. This keeps title / description / canonical / robots / Open Graph in sync
 * as the router moves between views, for crawlers that execute JavaScript.
 */

export const SITE_URL = 'https://www.jenuel.dev'
export const SITE_NAME = 'JenuelDev'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

export interface SeoMeta {
  title?: string
  description?: string
  image?: string
  /** Set false for pages that should stay out of the index (e.g. 404). */
  index?: boolean
}

const DEFAULTS = {
  title: 'Jenuel Ganawed — Software Developer | Vue, Nuxt, Laravel',
  description:
    'Jenuel Ganawed (JenuelDev) is a software developer from the Philippines building fast, reliable web, mobile, and desktop apps with Vue, Nuxt, Laravel, and Node.js.',
}

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)

  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }

  el.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)

  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }

  el.setAttribute('href', href)
}

/** Absolute, canonical-host URL for a router path, without a trailing slash on subpaths. */
export function canonicalUrl(path: string) {
  if (path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.replace(/\/+$/, '')}`
}

export function applySeoMeta(path: string, meta: SeoMeta = {}) {
  const title = meta.title ?? DEFAULTS.title
  const description = meta.description ?? DEFAULTS.description
  const image = meta.image ?? DEFAULT_OG_IMAGE
  const url = canonicalUrl(path)
  const indexable = meta.index !== false

  document.title = title

  setMeta('meta[name="title"]', 'name', 'title', title)
  setMeta('meta[name="description"]', 'name', 'description', description)
  setMeta(
    'meta[name="robots"]',
    'name',
    'robots',
    indexable
      ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      : 'noindex, follow',
  )

  setLink('canonical', url)

  setMeta('meta[property="og:title"]', 'property', 'og:title', title)
  setMeta('meta[property="og:description"]', 'property', 'og:description', description)
  setMeta('meta[property="og:url"]', 'property', 'og:url', url)
  setMeta('meta[property="og:image"]', 'property', 'og:image', image)
  setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME)

  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
  setMeta('meta[name="twitter:url"]', 'name', 'twitter:url', url)
  setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image)
}
