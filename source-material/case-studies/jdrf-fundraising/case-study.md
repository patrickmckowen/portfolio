---
slug: jdrf-fundraising
title: Modern tools for a historic fundraising community
title_variant_mobile: Modern tools for a historic community
company: JDRF International (renamed Breakthrough T1D in 2024)
years: 2019
role_summary: Co-created business strategy, led research and discovery, designed the end-to-end experience
platforms: [responsive web, mobile-first campaign pages]
status_on_current_site: live, linked from homepage as the second "View story" card
homepage_card_title: Fundraising tools to change the world with JDRF International.
source_url: https://www.patrickmckowen.com/jdrf-fundraising
headline_metrics:
  - 6% increase in revenue
  - 30% increase in campaigns shared
  - 100% task success in usability testing
  - Significant decrease in customer support cases
  - Four apps consolidated into one codebase
media_dir: ./media
---

# Modern tools for a historic fundraising community

> Verbatim copy from the live site, in page order. Media references in `[brackets]` point to `./media/`.

**Eyebrow:** JDRF | 2019

## Summary
A redesign of JDRF’s community fundraising tools, unifying four separate apps into a single experience. The result was a 6% increase in revenue and 30% increase in sharing.

## My role
I co-created the business strategy, led our research and discovery efforts, and designed the end-to-end experience.

## Team
| Person | Role (if known) | LinkedIn | Avatar |
|---|---|---|---|
| Christy Haught (Christy VH) | Senior Product Manager | linkedin.com/in/christyvh | `media/team/christy-haught.png` |
| Noah Cooper | Engineering lead (inferred from the "PM, engineering lead, and I" line) | linkedin.com/in/noahcooper | `media/team/noah-cooper.png` |

[`media/01-hero.jpg`: hero image]

---

## Background
Founded in 1970, JDRF is the leader in scientific research for Type 1 Diabetes, with over $200 million in annual revenue, and a support network for millions of people around the world.

JDRF Fundraising includes four national events: Walk, Ride, Run, and DIY. Each had its own app.

[`media/02-background-1.png`, `media/02-background-2.png`]

Across the four events, people’s goals and behaviors were pretty much the same: sign up as an individual or team, create campaign pages to collect donations, and share with as many people as possible.

While the in-person experience at these events was world class, the web apps that participants used to fundraise had long been neglected.

---

## Discovery
I initiated and ran research in close partnership with the PM and engineering lead. I led activities around mapping the current experience, gathering metrics and stories about the challenges our users faced, and developing a hypothesis for what to focus on.

### Problem definitions
Of the many issues identified, two stood out as clear priorities. Solving these would lay the foundation for future work, and be the most likely to drive measurable results.

- **User problem**: the campaign pages are outdated and difficult to work with, frequently requiring customer support to resolve issues.
- **Business problem**: maintaining separate apps for each of the fundraising events is expensive, causes confusion for people involved in multiple events, and prevents us from delivering new value quickly to all users.

### Hypothesis
If people can easily create beautiful campaign pages, they’ll be more likely to share them, resulting in increased donations.

Campaign Shared was our north star metric, and we bet that if people were proud of the way their campaign pages looked (and could use the tools to set them up properly), they would share them with a broader audience.

---

## Ideation
I started with the screen central to our hypothesis, going wide and exploring dozens of concepts before selecting a few favorites to review with the team.

[`media/03-ideation-campaign-page-1.png`, `media/03-ideation-campaign-page-2.png`, `media/03-ideation-campaign-page-3.png`: three mobile campaign page concepts]

We discussed priorities, trade-offs, and the scenarios we thought certain concepts might start to break down.

We converged on the option we thought best highlighted their story while nudging people toward making a donation, and taking into consideration the patterns our users were most familiar with.

Next, I made some lo-fi prototypes so we could discuss different interaction models for page editing.

Three interaction models, each a video with pros (+) and cons (−). The live page renders these as lists without labels; the mapping below follows page order.

**Model A** [`media/04-interaction-model-a.mp4`]
- + Fast to edit multiple items.
- + Clean UI when not editing.
- − No preview for how the content will appear.

**Model B** [`media/04-interaction-model-b.mp4`]
- + Always visible edit buttons are clear and obvious.
- + One dialog at a time provides space and focus to edit.
- − Busier UI when not editing

**Model C** [`media/04-interaction-model-c.mp4`]
- + Clean UI when not editing.
- + One dialog at a time provides space and focus to edit.
- − More complicated user flow

---

## Gain confidence
The team aligned on a direction, and we set out for more rigorous usability testing with active fundraisers.

Using Mixpanel, I identified people that had recently edited their pages to get a representative group of users. Meanwhile, the engineering lead had built a prototype that could pull in live user data.

[`media/05-usability-test-prototype.mp4`]

Before we ran the usability studies with customers, we first did trial runs with JDRF staff. This helped build trust with stakeholders, and smooth out any kinks in our study.

The tests were a success:
- **100% task success**: users were able to easily complete page editing tasks that had previously caused issues.
- **Glowing feedback**: both staff and users kept asking when the new designs would be available.

---

## Polish
With the value risks and usability risks tackled, I got to work on final visual design and documentation.

[`media/06-polish-state-1.png`, `media/06-polish-state-2.png`, `media/06-polish-state-3.png`, `media/06-polish-state-4.png`: four final mobile screens]

The PM, engineering lead, and I were a tight knit team. We used regular retrospectives to continuously refine our approach to meeting cadence, written docs, QA, and other aspects of staying organized during delivery.

[`media/07-documentation-sample.jpg`]
*Caption:* Sample documentation for various application and user states.

---

## Results
We used Optimizely to launch the new campaign pages as a series of experiments. The results provided strong evidence that our hypothesis was correct and we were on the right track.

- **6% increase in revenue**
- **30% increase in campaigns shared**
- **Significant decrease in customer support cases**

Plus, we had a single codebase for all four events:
- Unified experience for users
- Reduced maintenance costs
- Faster development cycles

---

## Extra assets
- `media/00-card-thumbnail.png`: homepage card (iPhone "Edit Story" screen, "I'm walking for a world without T1D")
- `media/00-card-thumbnail-mobile-edit-story.png`: 1200×675 crop of the same
- `media/00-company-icon-jdrf.png`: 32px JDRF icon for the card
- `media/extra-edit-story-thumb.png`, `media/extra-edit-story-thumb-mobile.png`, `media/extra-jdrf-app-icon.png`: from the earlier Next.js build (`main` branch)
- Gallery video `../../gallery/media/05-jdrf-edit-photo.mp4` is likely from this project (photo editing on a campaign page)

## Tools named
Mixpanel (recruiting by behavior), Optimizely (experiment rollout), lo-fi prototypes, live-data prototype built by eng.
