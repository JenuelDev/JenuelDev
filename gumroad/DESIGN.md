# Gumroad Design System

`profile.html` is the canonical visual reference for every Jenuel.Dev Gumroad page. New pages should feel like sections of the same storefront, not independent microsites.

## Visual language

- Developer/terminal aesthetic: command prompts, filenames, JSON/code snippets, and small monospace labels.
- Teal brand palette from `brand-50` through `brand-900`; near-black `ink` palette for dark surfaces.
- System sans-serif for readable content and system monospace for navigation, labels, metadata, and code.
- Compact floating pill navigation with the glowing dot logo.
- Subtle 36px grid backgrounds, restrained teal/emerald glows, rounded 2xl cards, and thin translucent borders.
- CTAs use rounded-full styling. Primary actions use teal; secondary actions use fine outline borders.
- Light and dark themes use the `dark` class and persist with the `jd-theme` localStorage key.
- Motion stays subtle: terminal float, cursor blink, and short card hover lift. Respect reduced-motion preferences.

## Page composition

1. Floating pill navigation.
2. The full hero — grid background, large headline, terminal/code panel on the right — belongs to the home page (`profile.html`) only. Standalone pages skip it and open directly on their first content section, which carries the grid background, glows, and a compact header: `$ command` line, page `h1`, one-line description, optional chips.
3. Content sections separated by quiet borders, with `## section` monospace labels.
4. Product cards matching the profile shop cards.
5. Compact footer ending with a `console.log(...)` line.

## Source files

- `profile.html`: canonical storefront and source of truth.
- `ebooks.html`: first standalone page derived from this system.

Before publishing a new or updated page, compare it with `profile.html`, run `gumroad pages preview`, require a zero-removal sanitization report, publish with `gumroad pages push <slug>`, and visually verify the live light and dark layouts.
