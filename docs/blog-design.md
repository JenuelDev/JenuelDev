# Blog design aligned with the portfolio

## Design reference

The blog adopts the design implemented in `www/src/assets/styles/artcraft.scss` and the portfolio's header and footer components. Its default appearance uses charcoal `#121316`, warm white `#f2f1ee`, fine borders, square cards, and restrained spacing.

| Role | Typeface |
| --- | --- |
| Headings | Archivo |
| Body | Inter |
| Navigation, dates, labels | Geist Mono |
| Expressive heading accents | Instrument Serif |

The shared blog layout requests the same Google Fonts families as `www/index.html`, with local/system fallbacks. The JD logo is copied from `www/public/jd-logo.svg` to `blog/public/jd-logo.svg` and displayed through a CSS mask, so it follows the active theme.

## Files to edit

- `blog/src/assets/craft.scss`: shared visual tokens, default palette, fixed 48px header, footer, reading-page layout, focus styles, and responsive rules.
- `blog/src/components/ArticleListing.astro`: category-specific introduction, card markup, and listing layout styles. All three listing routes use this component.
- `blog/src/components/Header.astro` and `Footer.astro`: blog navigation and links back to the portfolio and store.
- `blog/src/lib/themes.ts`: theme labels and swatches.
- `blog/src/components/ThemeScript.astro`: initial theme selection before paint.
- `blog/src/components/ThemeToggle.astro`: theme interaction and saved preference.

The blog retains its `--slate1` through `--slate12` variables for existing content styles. `craft.scss` maps the Default palette into these variables and uses `--craft-line` for subtle borders. Avoid replacing existing content color variables with fixed colors.

## Responsive behavior and accessibility

The listing has three columns on large screens, two at 1100px and below, and one at 600px and below. Its outer frame narrows at 800px. The header switches to a mobile disclosure menu at 800px.

The mobile menu and theme picker use native `details` and `summary` elements. They support keyboard activation, outside-click dismissal, and Escape dismissal. Theme buttons expose `aria-pressed`; navigation links expose `aria-current`. A skip link moves focus to the content wrapper. Reduced-motion preferences disable decorative transitions.

Article pages share the new typography, header, and footer while keeping the article HTML, metadata, author links, and code/table styles. A back-to-journal link returns readers to the listing.

## Theme compatibility

New visitors get `artcraft`, labeled **Default**, matching the portfolio. The blog continues to use its existing `localStorage.accent` key, preserving valid choices made before the redesign, including `supportTeal`, labeled **Teal**. Returning visitors who previously chose Teal can select Default to see the new charcoal palette.

The other options are Green Light, Yellow Orange, Under the Sea, Night Burns, Light Burn, and Bright Mind. Light Burn and Bright Mind always use light mode. An unknown saved value falls back to Default, and unavailable local storage does not prevent the page from loading.

The portfolio stores its preference under `localStorage.theme`. These applications have different origins, so their preferences are independent. Matching visual choices does not automatically synchronize a visitor's selection between domains.

## Keeping the sites consistent

When changing the portfolio's visual system, compare its `artcraft.scss`, `themes.scss`, and theme definitions with the blog equivalents. Update both copies of the logo when replacing it. Build each changed application independently, then compare the header, footer, fonts, default palette, and mobile behavior in a browser.

No database schema, article slugs, category filters, or publication workflow changes are needed for this redesign. The latest article feed remains compatible with the portfolio.

The implementation passed Astro checking and the production build locally. HTTP checks covered all three listings, an existing article, and a missing article's 404 status. The generated theme initialization script was checked for default and invalid preferences, saved dark and light themes, and disabled local storage. Browser visual QA was unavailable in the implementation session and still needs to be performed before judging visual parity.
