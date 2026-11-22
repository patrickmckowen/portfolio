# Current site structure & homepage copy

patrickmckowen.com is a Framer site with 4 pages (from `sitemap.xml`). Captured 2026-11-22. Raw HTML is in `_raw/html-snapshots/`.

| URL | Page | Linked from home? |
|---|---|---|
| `/` | Homepage (one long scroll, anchors `#work`, `#about`, `#contact`) | n/a |
| `/cameo-licensing` | Case study → `case-studies/cameo-licensing/` | Yes (card 1) |
| `/jdrf-fundraising` | Case study → `case-studies/jdrf-fundraising/` | Yes (card 2) |
| `/jdrf-navigation` | Case study → `case-studies/jdrf-navigation/` | **No** (orphan) |

Page title: "Patrick McKowen · Portfolio". Footer on case studies: "Patrick McKowen · 2023".

## Homepage, in order (verbatim copy)

**Nav (fixed, top):** wordmark "Patrick McKowen" (left) · pills "Work", "About", "Contact" (right)

### 1. Hero (`#work` starts here, light + pastel shader gradient)
> Hi there, I’m Patrick—a product designer working to uplift people with humane technology.

### 2. Project cards (2-up)
| Card | Title | CTA | Thumbnail | Icon |
|---|---|---|---|---|
| 1 | Connecting brands and star creators with Cameo for Business. | View story → `/cameo-licensing` | `case-studies/cameo-licensing/media/00-card-thumbnail.png` | `…/00-company-icon-cameo.png` |
| 2 | Fundraising tools to change the world with JDRF International. | View story → `/jdrf-fundraising` | `case-studies/jdrf-fundraising/media/00-card-thumbnail.png` | `…/00-company-icon-jdrf.png` |

### 3. What I offer
Strategy · Visual Design · Prototyping · UX Design · 0-to-1 Projects · User Research · Mentoring · Design Systems → `profile/services-skills-approach.md`

### 4. Gallery of recent work
7 items in a masonry grid → `gallery/gallery.md`

### 5. Featured testimonial (single large quote)
> Patrick helped elevate the work of everyone around him.
> — VP of Design, Cameo (Jason Culbertson)

### 6. About (`#about`, dark section)
"Hey, I'm Patrick. A digital product designer based in Oakland, CA with 10 years of experience." plus 8 photo tiles → `about/about.md`

### 7. Background
4 paragraphs plus "Resume" and "LinkedIn" links → `profile/profile.md` § Bios

### 8. Approach
6 numbered principles → `profile/services-skills-approach.md`

### 9. Praise
9 quote cards in a 3-column grid. The key phrase is highlighted, with name and title below → `testimonials/testimonials.json`

### 10. Contact (`#contact`)
> Interested in working together? Send me an email at patrick.mckowen@gmail.com

Buttons: "Email" (mailto), "LinkedIn"

### Footer
> Thanks for stopping by!

## SEO / meta
- `<title>` Patrick McKowen · Portfolio
- description / og:description: "I'm a digital product designer based in Oakland, CA with 10+ years of experience."
- og:image: `brand/current-site/og-image.png`
- favicon: `brand/current-site/favicon.png`
