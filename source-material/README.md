# Source material: Patrick McKowen portfolio

Source content for the new patrickmckowen.com: facts, verbatim copy, testimonials, case studies, media, and a reference for the current site's design. Agents writing copy or building pages should start here.

**Captured:** 2026-11-22 from patrickmckowen.com (live Framer site), LinkedIn (linkedin.com/in/pmckowen, signed-in view), and this repo's `main` branch (earlier Framer export and Next.js build).

## Read these first
1. **`profile/profile.md`**: who Patrick is, current role, bios (verbatim and draft), voice and tone notes, career summary.
2. **`OPEN-QUESTIONS.md`**: what's missing or stale. Don't invent Linktree work, metrics, or dates.
3. **`current-site-structure.md`**: today's sitemap and homepage copy, section by section.

## Map
```
source-material/
├── README.md                     ← you are here
├── OPEN-QUESTIONS.md             ← gaps, stale facts, things to confirm with Patrick
├── current-site-structure.md     ← current IA + homepage copy in order
├── MEDIA-MANIFEST.md             ← every asset with dimensions + size (auto-generated)
├── profile/
│   ├── profile.md                ← quick facts, positioning lines, bios, voice, timeline
│   ├── services-skills-approach.md ← "What I offer", 6 Approach principles, skills, tools
│   └── media/headshot.jpg
├── experience/experience.json    ← structured career history (LinkedIn + site context, gaps)
├── testimonials/testimonials.json← 9 testimonials: short site quote + highlight + full LinkedIn text
├── case-studies/
│   ├── cameo-licensing/          ← case-study.md (frontmatter + verbatim copy) + media/ (+ team/)
│   ├── jdrf-fundraising/
│   └── jdrf-navigation/          ← published but not linked from the current homepage
├── gallery/                      ← gallery.md + 7 gallery shots/videos + iPhone frame overlay
├── about/                        ← about.md + 8 personal photo tiles
├── brand/
│   ├── design-reference.md       ← current type scale, color tokens, layout, components
│   ├── current-site/             ← screenshots, favicon, OG image, web fonts, Framer CSS tokens
│   ├── fonts/tiempos/            ← Tiempos files (trial "Test" fonts, so check the license)
│   └── device-frames/
└── _raw/html-snapshots/          ← raw HTML of all 4 pages (for re-parsing if needed)
```

## Conventions
- **Verbatim vs. draft.** Anything quoted from a source is verbatim. Writing that is new is marked *[draft]*. Case study files keep the live site's copy word for word, with `[media/…]` references placed where the media appears on the page.
- **Media naming.** In each `media/` folder, files are `NN-section-description.ext` in page order. `00-*` are card thumbnails and icons, `extra-*` are assets not on the live page, and `team/` holds 40px avatars.
- **Frontmatter.** Each `case-study.md` has YAML frontmatter (slug, title, company, years, role, headline_metrics) for building index cards without parsing the body.
- **JSON for structure.** `experience.json` and `testimonials.json` are made to be imported directly into pages.

## Key facts at a glance
- **Patrick McKowen**: self-taught product designer, Oakland / SF Bay Area.
- **Now:** Principal Product Designer at **Linktree** (Sep 2026–). Design lead for the core product and AI. Staff from Mar 2025, Senior from Jul 2024.
- **Before:** Senior Product Designer at **Cameo** (2021–23). Led 0→1 Cameo for Business and the design system team.
- **Before that:** 8 years at **JDRF** (2012–20). Rose to Product Design Director, a player-coach role managing designers, PMs and a front-end dev, and built JDRF's first design and PM teams.
- **Theme:** "humane technology" that uplifts and empowers people.
- **Best metrics:** 95% less staff time on licensing (Cameo) · 6% revenue lift and 30% more sharing (JDRF fundraising) · 88% better usability scores (JDRF nav).
- **Contact:** patrick.mckowen@gmail.com · linkedin.com/in/pmckowen
