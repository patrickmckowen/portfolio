---
slug: jdrf-navigation
title: Unifying a fragmented navigation system
company: JDRF International (renamed Breakthrough T1D in 2024)
years: 2019
role_summary: Product manager AND designer. Wrote the strategy, did research and design, supported engineers, managed stakeholders across every team at JDRF
platforms: [responsive web, global navigation + search across all JDRF properties]
status_on_current_site: published, in the sitemap, but NOT linked from the homepage (orphan page)
source_url: https://www.patrickmckowen.com/jdrf-navigation
headline_metrics:
  - 88% improvement in usability scores (task success)
  - 90/100 Maze usability score on the navigation prototype
  - 65% of people had trouble finding the correct path before the redesign (baseline)
  - Launched on time; consolidated all nav + search systems into one
media_dir: ./media
---

# Unifying a fragmented navigation system

> Verbatim copy from the live site, in page order. Media references in `[brackets]` point to `./media/`.

**Eyebrow:** JDRF | 2019

## Summary
Using research and collaboration, I helped transform a fragmented information architecture, navigation, and search into a unified system across all JDRF products. The result was an 88% improvement in usability scores and significant reduction in tech debt.

## My role
I was the product manager and designer. I wrote the strategy, did the research and design, supported the engineers, and managed stakeholders on a project that impacted every team at JDRF.

## Team
| Person | LinkedIn | Avatar |
|---|---|---|
| Brittany Jackson | linkedin.com/in/brittany-jackson-b19a8613 | `media/team/brittany-jackson.png` |
| Tyler C. | linkedin.com/in/tyler-c-6662063a | `media/team/tyler-c.png` |
| Darin Kotter | linkedin.com/in/darin-kotter-32560020 | `media/team/darin-kotter.png` |
| Joe Snell | linkedin.com/in/joesnellpdx | `media/team/joe-snell.png` |

Roles are not stated on the site.

[`media/01-hero.jpg`: hero poster] [`media/01-hero.mp4`: hero video]

---

## Context
JDRF is the leader in scientific research for Type 1 diabetes, with over $200 million in annual revenue, and a support network for millions of people around the world.

JDRF had followed a strategy of creating unique websites for each of their products. This resulted in people needing to move across multiple properties, each with their own unique navigation and search.

[`media/02-context-fragmented-navs.png`]
*Caption:* Each product had their own navigation and search.

### Problem definitions
This fragmented ecosystem was causing several problems, but a few stood out as priorities:
- **User problem**: navigation and branding are inconsistent, eroding trust, and making it difficult for people to find relevant content.
- **Business problem**: it’s expensive to build and maintain so many different navigation and search systems.

### Solution
- **Information architecture**: research and develop a new IA that aligns with people’s goals and mental model of JDRF.
- **Navigation**: design a global system that helps people find what they’re looking for, regardless of where they are in the product ecosystem.
- **Search**: design a search experience that seamlessly spans all products, and provides fast, smart results.

---

## Research
Over the next month, I ran research studies and poured over analytics to better understand the key tasks, motivations, and mental models people had for JDRF.

### Research inputs
Card sorting · Tree testing · Surveys · Product analytics · A/B experiments

[`media/03-research-optimal-workshop-1.png`, `-2.png`]
*Caption:* I used Optimal Workshop for remote card sorting and tree testing.

### Key findings
- **Too many top-level categories**: a lack of clear pathways caused people to stop, think, and often backtrack.
- **Misalignment with people's expectations**: 65% of people had trouble finding the correct path to complete tasks.
- **Two modes of information-seeking**: people came to JDRF either looking for a *known item* (filling a specific knowledge gap) or looking for an *unknown item* (don’t know what they don’t know).

---

## Foundations
After creating alignment with stakeholders on the research findings, I got to work on a new sitemap and taxonomy.

[`media/04-sitemap-flowmap.png`]
*Caption:* I used Flowmap and Google Sheets to collaborate with teammates on the new sitemap and taxonomy.

### Iterating on a new IA
Before starting on the UI design, I tested the usability of the structure and labels with a tree test in Optimal Workshop.

The results showed the new sitemap was easy to navigate, with one big exception: people were confused by the "Get Involved" label.

We decided to replace one broad category ("Get Involved") with two narrower categories ("Community" and "Fundraising").

[`media/05-ia-iteration-get-involved.png`]

---

## Navigation
With clarity on the structure and labels, I got to work exploring different concepts for the navigation components. I went wide and explored dozens of concepts before landing on a solution that met all our requirements:
- Support a sitemap that was both wide (many 1st level items) and deep (up to 5 levels).
- Easily fit into a wide range of page layouts.
- Flexibility to handle long label names.
- Support multiple audiences with different info-seeking behavior.

[`media/06-navigation-bars.png`: annotated nav bar with numbered callouts 1–4]

1. **Searching for a known item**: people that know what they want, or know the right words to describe it, can quickly jump there.
2. **Exploratory browsing**: people new to JDRF may have some idea what they’re looking for, but may not know how to articulate it, or know the right words to use.
3. **Tertiary audiences**: most people are only interested in the four main categories, but it was a non-starter to just remove everything else from the nav. The “More” menu provides easy access for smaller audiences (academics, scientists, media, etc) while keeping focus on the priority areas.
4. **Local navigation**: a scalable replacement for the old sub-brand logos and site-specific navigation, while helping people discover relevant content.

### Usability testing
Once the team was happy with the navigation bars, I designed the menu system, and pulled everything together into a simple click-thru prototype. I then used Maze.co for remote usability testing.

The prototype scored a 90 out of 100 with Maze’s usability rating, measured by task success, duration, and misclicks. There was still room for improvement, but we were short on time and everyone felt the biggest usability risks had been tackled.

---

## Search

### Principles
I began by writing a set of principles to guide my design and help the engineering team research potential backend solutions.

| Principle | Description |
|---|---|
| Accurate | Search automatically pulls the latest data from a source of truth. |
| Universal | Search works seamlessly across products with a variety of tech stacks. |
| Fast | People expect real-time results, with helpful guidance. |
| Forgiving | Allow people to make mistakes and be inexact with their queries. |
| Insightful | We need actionable insights to identify usability problems and opportunities. |
| Tunable | We need self-service controls to fine-tune results without writing code. |

### Starting with data
Next, I created a schema for the search data. Using the new IA, I worked with the engineering lead to document all the key:value pairs, the relationships between objects, and the initial weighting of different object types.

### Designing the UI
Autocomplete was going to be the biggest improvement over the current search, so I focused my attention there. The biggest challenge was designing for scenarios with a high volume of similar results, and I thought surfacing more contextual details might help.

[`media/07-autocomplete-explorations.png`]
*Caption:* A sample of my early explorations into autocomplete.

### Working with constraints
Unfortunately, we ran into problems retrieving consistent meta data and had to scale back the amount of contextual details we could include in the list of results.

I revisited the search logs and realized that contextual details would be most helpful when **searching for people with common names**. And there was one piece of reliable data that could help with that: the name of the event they had joined, which included a location.

After discussing the trade-offs, I proposed a design that included the event name for participants and teams, but would still worked when presented alongside other result types.

[`media/08-final-search-autocomplete.png`]
*Caption:* The final design wasn't my first choice, but it solved the problem with the data we had available.

---

## Results
- **Successful launch**: launched on time, unblocking other projects that were waiting for this to be completed.
- **Improved user experience**: 88% improvement in usability scores measuring task success.
- **Reduced costs**: reduced engineering costs by consolidating all the old navigation and search systems into one global solution.

---

## Notes for writers
- Copy has small typos on the live site, kept here as-is: "poured over" (should be "pored over"), "would still worked" (should be "would still work"). Fix them when rewriting.
- This is the strongest IA / research / PM-hybrid story in the set. Nikki Bodnar's recommendation calls it out directly ("pivotal in designing a user-centric information architecture").

## Tools named
Optimal Workshop (card sort, tree test), Flowmap, Google Sheets, Maze.co, search logs, product analytics, A/B experiments.
