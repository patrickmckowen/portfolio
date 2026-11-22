---
slug: cameo-licensing
title: Content licensing for celebrity marketing videos
company: Cameo (Cameo for Business)
years: 2022–23
role_summary: Research, strategy workshops, end-to-end design for businesses and creators
platforms: [web (desktop + mobile web), iOS creator app]
status_on_current_site: live, linked from homepage as the first "View story" card
homepage_card_title: Connecting brands and star creators with Cameo for Business.
source_url: https://www.patrickmckowen.com/cameo-licensing
headline_metrics:
  - 95% reduction in staff time spent on licensing
  - 14 of 15 participants picked the correct license in validation testing
  - Significant driver of new and renewed enterprise deals
  - New revenue stream from license extensions
media_dir: ./media
---

# Content licensing for celebrity marketing videos

> Verbatim copy from the live site, kept in page order. Media references in `[brackets]` point to files in `./media/`. Section headings match the site's H1/H3 structure.

**Eyebrow:** CAMEO | 2022–23

## Summary
Licensing agreements was one of the trickier problems we faced in building Cameo for Business. We didn’t get it right on the first try, but by shipping an MVP, listening to our customers, and finding our focus, we arrived at a solution that set the foundation for the platform.

## My role
I helped run research, facilitated strategy workshops, and designed the end-to-end experience for both businesses and creators.

## Team
Shown on the site as 40px avatars linking to LinkedIn. Names come from the LinkedIn URL slugs; roles are filled in only where another source confirms them.

| Person | Role (if known) | LinkedIn | Avatar |
|---|---|---|---|
| Prescott Rynewicz | Engineering Manager / Product Engineering Leader | linkedin.com/in/prescott-rynewicz-36295182 | `media/team/prescott-rynewicz.png` |
| Prajit Gopal | Head of Product | linkedin.com/in/prajit-gopal-47410077 | `media/team/prajit-gopal.png` |
| Thalia Lee | — | linkedin.com/in/thalia-lee | `media/team/thalia-lee.png` |
| Rodolfo Diaz | — | linkedin.com/in/diazrodolfo | `media/team/rodolfo-diaz.png` |
| Danielle Fox | — | linkedin.com/in/foxdanielle | `media/team/danielle-fox.png` |
| Logan Wishart-Craig | Software Engineer | linkedin.com/in/loganwishartcraig | `media/team/logan-wishart-craig.png` |
| (lautaguirre) | — | linkedin.com/in/lautaguirre | `media/team/lautaguirre.png` |
| Orlando del Aguila | — | linkedin.com/in/orlandodelaguila | `media/team/orlando-del-aguila.png` |
| Henrique Sosa | — | linkedin.com/in/henrique-sosa | `media/team/henrique-sosa.png` |

[`media/01-hero.jpg`: hero image, 4:3, used as poster] [`media/01-hero.mp4`: hero video]

---

## Context
Cameo's mission is to create the most personalized fan experiences on earth. Your mom’s favorite TV star can wish her happy birthday, or a legendary athlete can give your friend a pep talk.

But what if a business could use Cameo to create marketing content?

[`media/02-context-sample-cameo-video-1.mp4`, `media/02-context-sample-cameo-video-2.mp4`, `media/02-context-sample-cameo-video-3.mp4`, `media/02-context-sample-cameo-video-4.mp4`: four example business Cameo videos shown as a row]

This idea gained traction and the sales team started bringing in customers. But a patchwork of internal tooling and manual processes were needed to fill gaps in a product originally designed for consumers.

To help Cameo for Business grow, a team was formed to build a new B2B product as an extension of the core Cameo app.

### Problem definitions
Of the many problems we identified, one stood out as the clear priority: licensing agreements are manually created for each customer.

- **Customer problem**: customers are confused about the pricing and terms.
- **Creator problem**: creators aren’t clear how their content will be distributed.
- **Business problem**: Cameo staff waste time on a highly-manual process, and bespoke agreements are hard to enforce.

### Solution
Automate licensing agreements between businesses and talent by building a standard set of terms and pricing into the purchase and fulfillment flows.

---

## Ideation
The team had aligned on a pricing model, but there were still many open questions about the purchase experience.

To help us make decisions, I explored a wide range of concepts before narrowing it down to a few options to discuss with the team.

[`media/03-ideation-concept-1.png`, `-2.png`, `-3.png`: three concept explorations]

### Decision-making principles
After discussing priorities and trade-offs, we picked a direction based on the following principles:

- **Simplicity over flexibility**: customers would choose from channel bundles instead of building a custom license.
- **Frictionless over emphasis**: selecting a license would be treated like an optional upsell at the end of the booking flow.
- **Velocity**: reuse existing UI components to help us get feedback from customers more quickly.

---

## Iteration

### Testing our assumptions
To quickly get feedback from users, I created a simple prototype and worked with our researcher to create a test plan. We used UserTesting.com to recruit participants and record the sessions.

[`media/04-usertesting-prototype.mp4`: prototype / test session clip]

### Making revisions
Feedback from users showed we were on the right track, but that we needed to make the license choices easier to scan.

I wrote 1-line summaries to replace the benefit lists, and created a custom radio button to improve the information hierarchy.

[`media/05-revisions-license-radio.png`]

### Validating the new design
I ran another test with our target audience, and wrote a report on the findings. The participants had no issues completing the tasks and praised the designs.

Most importantly, they selected the correct license for a given scenario 14 out of 15 times. We had the confidence to ship it.

[`media/06-validation-report.png`]

---

## Ship and Learn
The first version of licensing was a major milestone. It brought in new revenue, solved operational issues, and built technical foundations.

But after analyzing the post-launch data, and talking more with customers, we realized it wasn't having the desired impact.

### Finding our focus
We were selling three different use cases for business videos, which was adding significant complexity throughout the product.

We made a bet that only supporting a single use case, advertising, would bring much needed clarity and improve the user experience.

With this new product focus, we were able to make several changes:

- **A simplified license model**: we revised the license model to make it more useful for advertising. Marketers could test their content for two weeks, and then buy more time if it performed well.
  [`media/07-simplified-license-model.png`]
- **Reducing steps in the booking flow**: now that we only supported a single use case, I was able to simplify the booking flow to four steps.
  [`media/08-four-step-booking-flow.png`]
- **Building trust with customers**: I designed a new component on the talent profile that provided the total cost upfront, including licensing.
  [`media/09-talent-profile-total-cost-1.png`, `-2.png`]

---

## Final Designs
- **Booking**: understand licensing costs upfront before deciding to book. [`media/10-final-booking.mp4`]
- **Order tracking**: follow the status of your videos from request to delivery. [`media/11-final-order-tracking.mp4`]
- **License management**: easily keep track of your licenses, and buy more time to continue using the videos that perform well. [`media/12-final-license-management.mp4`]
- **Creator experience**: helping creators understand how business videos can be used, with a focus on the passive income they can make with licensing. [`media/13-creator-app-1.png`, `media/13-creator-app-2.png`, `media/13-creator-app-3.png`, `media/13-creator-app-4.png`: four iPhone screens]

---

## Results
Shipping licensing was an important milestone at Cameo for Business. There was room for improvement, particularly around new user education, but the early version still had a positive impact.

- **Customer sales**: the new licensing model was a significant driver of new and renewed enterprise deals.
- **Improved efficiency**: 95% reduction in staff time spent on licensing.
- **New revenue stream**: license extensions helped generate more revenue.

---

## Extra assets not on the live case study page
- `media/00-card-thumbnail.png`: homepage project card (4:3, MacBook mockup of license detail)
- `media/00-card-thumbnail-16x9-license-detail.png`: 3840×2160 version of the same mockup
- `media/00-company-icon-cameo.png`: 32px Cameo icon used on the homepage card
- `media/extra-cameo-app-icon.png`, `media/extra-c4b-home-thumb-4x3.png`, `media/extra-c4b-home-thumb-16x9.png`: from the earlier Next.js build in this repo (`main` branch)
- `media/extra-order-detail-desktop-*.png`: high-res desktop "Order Detail" screens (macOS window / Safari frame)
- `media/source-files/c4b-home-thumb-4x3.rotato`: Rotato mockup project file for the card thumbnail

## Extra context from LinkedIn (not on the case study page)
- Senior Product Designer, Cameo, Dec 2021 to Aug 2023.
- "Led design on Cameo's first B2B product Cameo for Business. I co-created the zero-to-one product strategy, helped run research, and designed the end-to-end experience for both businesses and creators."
- "Led the Cameo Design System team." (Also helped with the creator app, per the site's Background section.)
- Recommenders who worked on this: Jason Culbertson (VP Design, managed Patrick), Prajit Gopal (Head of Product), Prescott Rynewicz (Eng), Logan Wishart-Craig (Eng), Ali Forrest (Content Design). See `../../testimonials/`.
