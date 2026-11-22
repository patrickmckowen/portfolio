# Current site design language (reference, not a mandate)

What patrickmckowen.com looks like today (Framer, "Patrick McKowen" project `1763929c89cf4969`). Use it as a starting point or as something to evolve away from. Screenshots are in `current-site/screenshots/`.

## Overall feel
- Quiet, editorial, lots of whitespace. A serif display face paired with a neutral grotesk and mono labels.
- **Light sections** (hero, work, offer, gallery) sit on `#F1F1F3` with a soft, blurred pastel **mesh/shader gradient** (lavender, butter yellow, peach, mint) behind the hero. There's a `shader-gradient` component in the Framer export.
- **Dark sections** (About, Approach, Praise, Contact) sit on near-black `rgb(23,26,28)`. The Cameo case study page is dark (`rgb(32,30,35)`, "cameo-bg"); the JDRF pages are light.
- Content column ~1030px wide, centered. Nav is fixed top-right as pill buttons (Work / About / Contact) with an active state (filled black on light, white on dark). Name wordmark sits top-left.
- Case study pages: a close "×" button top-right instead of nav, a mono eyebrow ("CAMEO | 2022–23"), a huge serif H1, a hairline divider, then a 2-column Summary | My role + Team (avatar row) block.

## Typography (measured from the live site)
| Role | Font | Size / line-height | Tracking | Color |
|---|---|---|---|---|
| Hero statement | Tiempos Headline Light | 36px / 48.6px (desktop renders larger) | -0.36px | 90% black lead, 50% black continuation |
| Section titles ("What I offer", "About", "Praise") | Tiempos Headline Light | large display | tight | — |
| Case study H1 | Tiempos Headline Light | ~80px display | tight | — |
| Wordmark | Geist Medium | 18px / 28.8px | -0.2px | 75% black |
| Nav pills | Geist Regular | 16px / 24px | -0.16px | — |
| Body (about, praise) | Geist Regular / Medium | 18px / 28.8px | -0.2px | white 45% for muted, white 100% for emphasis |
| Card CTA "View story" | Geist Medium | 18px / 27px | -0.18px | 90% black |
| Labels / eyebrows / captions / footer | Geist Mono | 12px / 18px | normal | 50–90% |

**Emphasis pattern:** body text runs in a muted tone, and the key phrase in each paragraph or quote is set in full-strength color (Praise quotes, About intro, hero). This is the site's signature typographic move.

### Font files
- `current-site/web-fonts/`: Geist-Regular, Geist-Medium, Geist-Bold, GeistMono-Variable (`.woff2`), TiemposHeadline-Light (`.woff`). Downloaded from the live site.
- `fonts/tiempos/`: TiemposHeadline-Black.otf, TiemposHeadlineTest-Light/Medium.ttf, TiemposText Regular/Italic/Bold/BoldItalic.ttf (from the repo's `main` branch).
- ⚠️ **Licensing:** Tiempos is a commercial Klim Type Foundry typeface, and the "Test" files are trial fonts that are **not licensed for production**. Confirm Patrick owns a web license before shipping Tiempos. Geist is free (OFL, by Vercel) and available via `next/font` / the `geist` npm package.

## Color tokens (from the Framer export `current-site/framer-export-styles.css`)
| Token | Value | Use |
|---|---|---|
| white-bg-primary | `rgb(241,241,243)` / `#F1F1F3` | page background (light) |
| white-bg-secondary | `rgb(250,250,250)` | cards |
| black-bg-primary | `rgb(23,26,28)` | dark sections |
| cameo-bg | `rgb(32,30,35)` | Cameo case study background |
| black-text-primary / secondary / tertiary | `rgba(0,0,0,.9 / .75 / .5)` | text on light |
| white-text-primary / secondary / tertiary | `rgba(255,255,255,.9 / .65 / .45)` | text on dark |
| black-border-subtle | `rgba(0,0,0,.08)` | card borders, dividers |
| white-border | `rgba(255,255,255,.1)` | borders on dark |
| translucent card fill | `rgba(241,241,243,.45)` | frosted cards over the gradient |
| link blue (Framer default) | `rgb(0,153,255)` | links |

## Components in the Framer export (names only; source on the `main` branch under `framer/`)
about-photo, button, card, case-study-card, cs-bullet, cs-section-header, cs-section-subhead, desktop-video, divider, hero-image, image-caption, link-button, nav-item, navigation, numbered-bullet, page-background, phone-mockup-dark-border, phone-video, project-card, section-number, section-number-copy, shader-gradient, site-title, skill-accordian, skill-card, skill-icon, skill-image, tag, video-i-phone-frame, video-reel.

## Media conventions
- Project cards: 4:3 thumbnails with a device mockup bleeding off the edge (MacBook for Cameo, iPhone for JDRF), plus a 32px company icon and a "View story" link.
- Case study media: full-width 929px images and videos, phone screens in rows of 3–4 (260×563), team avatars as 40px circles.
- Device frames: `device-frames/iphone-sierra-blue.png`, `../gallery/media/00-iphone-frame-overlay.png`.

## Other
- Favicon: `current-site/favicon.png` (96px). OG image: `current-site/og-image.png` (1200×630).
- Previous Next.js attempt's CSS: `current-site/previous-nextjs-globals.css`. It used a fixed pastel linear-gradient body background and Inter + Tiempos.
