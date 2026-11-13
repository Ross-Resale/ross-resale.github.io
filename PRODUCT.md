# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS and vanilla JS. No framework, no build step. Hosted on GitHub Pages (`mikeandrews-umich/ross-resale`, served from `main` root). The only allowed external dependencies are Google Fonts, Google Forms (sign-up destinations) and an optional GA4 tag.

## Users

Ross MBA students, aged roughly 26 to 34. They are busy and mobile-first, and already used to Facebook Marketplace, Craigslist and class WhatsApp groups. They value trust (only classmates), convenience and fair prices.

## Context and Strategy

- We are sharing the site in mid-November 2026 through Ross Slack channels and an MBA-wide email.
- The primary audience is current Ross students, not incoming students.
  - **MBA2s (main target):** they own a full apartment of furniture and other things that they will need to sell when they move out in May. The problem is months away, so it is not top of mind yet.
  - **MBA1s:** they remember how much work it was to furnish an apartment in August, and they will be sellers next year.
- Ross Resale is a general resale platform for anything students buy and sell: furniture, electronics, kitchen items, home goods, bikes, sports and outdoor gear, winter clothing and more. Winter items are relevant in November, but they are one category among many, not the focus.
- **Business model:** Ross Resale is primarily a peer-to-peer marketplace. Sellers list items, buyers find them, and we take a small cut of the sale price. (Internal reference: it works the way MaizeTix does for tickets. Never mention MaizeTix on the site.)
- **Premium service:** for sellers who would rather not deal with it, we pick items up, store them over the summer, and sell them to incoming students for a larger cut. This is the main revenue opportunity, so it must be clearly visible on the page, but presented with equal weight to the self-serve option so the test stays neutral.
- **The key test:** of the people who want to sell, how many choose the full-service option (`model=storage`) over listing items themselves (`model=marketplace`). Buyer interest (`role=buyer`) is tracked separately and never mixed into this comparison.
- A "Who are you?" toggle (MBA2 by default, MBA1 as the alternative) changes the line under the hero and the section order. It is recorded as `segment` on every CTA. The headline is the same in both views.

## Product Purpose

Ross Resale is a student-to-student marketplace just for Ross students. Classmates list things for each other and for the incoming class. Sellers who would rather not deal with it can book a pickup: we store their items over the summer and sell them to incoming students.

Value proposition: less hassle, lower costs, less waste.

**This site is a fake-door pretotype for a Ross MBA class project.** Nothing is real: there are no transactions, no inventory and no backend. Its job is to measure seller intent for self-serve listing against full-service pickup, with buyer interest measured on the side.

## Positioning

The difference is a closed, trusted community plus logistics timed to the MBA calendar: sell to classmates any time, or hand everything off at move-out and have it sold to the incoming class in August. A general marketplace can't truthfully claim that every buyer and seller is a Ross student.

## Operating Context

- Visitors arrive from Ross Slack channels (`?src=slack`) and an MBA-wide email (`?src=email`), usually on a phone and often mid-task. Any other visit is `src=direct`.
- CTAs open Google Forms in a new tab. Every CTA URL and GA4 `cta_click` event carries `src`, `segment` (`mba1`/`mba2`), `role` (`seller`/`buyer`) and `model`, plus `item` and `intent` (`remind`) when they apply. The constant `source=ross-resale-site` also stays on every URL.
- The forms are restricted to University of Michigan Google accounts. The site itself is public.
- Configuration (form URLs, prefill entry IDs for every parameter, GA4 ID) lives in the `CONFIG` object at the top of `app.js`.

## Capabilities and Constraints

- **Two ways to sell**, shown side by side at equal width and weight, with no badge or emphasis on either:
  - *List it yourself* (`model=marketplace`, CTA "List an item"): illustrative fee of 5% of the sale price.
  - *We handle everything* (`model=storage`, CTA "Book a pickup"): illustrative fee of 15% of the sale price, with a $10 minimum per item and no upfront cost.
- Which option appears first is randomized per visit and recorded as `order` (`ms`/`sm`). How the segment was set is recorded as `segment_source` (`default`/`toggle`/`link`).
- One quiet line under the two options offers selling a whole furnished setup as a bundle (`model=apartment`).
- A "Listed by classmates" section with 12 mock listings across furniture, electronics, kitchen, home, sports and outdoor, and clothing. It has category filters. Each listing has a "Reserve" CTA tracked as `role=buyer`, `model=none`.
- A quiet "Remind me in March" line (`role=seller`, `model=undecided`, `intent=remind`).
- Prices are illustrative hypotheses, not commitments.
- No localStorage, accounts or payments.
- The footer must state: "Pretotype for a Ross MBA class project. No real transactions."

## Brand Commitments

- **Name:** Ross Resale.
- **Voice:** warm, sharp and peer-to-peer, like a classmate built it rather than a company. Conversational, flowing sentences. No hype, no exclamation marks, no corporate buzzwords.
- **Tone:** calm and practical, never urgent. Avoid anything that makes moving out feel sad or like the end of an era. No countdown timers and no "Don't miss out" language.
- **Copy style:** write in natural, flowing sentences the way a classmate would talk. Do not use clipped, fragment-style copy such as "One drop-off. Done." or "No strangers. No haggling." Avoid strings of short punchy sentences, tricolons and slogan rhythm. No em dashes anywhere.
- **Emotional goal:** calm, like a deep breath during a stressful move. Settled, quiet and trustworthy.
- **Colors:** Michigan-inspired navy (#00274C) as the primary color, with maize (#FFCB05) as a sparing accent. It must not read as official university branding.
- **No Ross or University of Michigan logos or marks.** Keep the "Not affiliated with or endorsed by the University of Michigan" disclaimer.

## Evidence on Hand

None. There are no real users, testimonials, sales figures, partners or press. Listings are mock items. Future work must not invent testimonials, user counts, "as seen in" claims, savings statistics or waitlist sizes.

## Product Principles

1. **Measure honestly.** Keep the self-serve vs. full-service comparison fair: equal weight, equal clarity, no dark patterns, and buyer clicks never mixed in.
2. **Trust before transaction.** Lead with "only Ross students" and plain, specific logistics, not with promotion.
3. **Calm over clever.** Remove decisions, noise and urgency instead of adding them.
4. **Truthful fake door.** It's fine to be a pretotype. Say so plainly, and never imply a transaction or pickup happened.
5. **Phone first.** Most visits come from a Slack or email link on a phone.

## Accessibility & Inclusion

Target WCAG 2.2 AA: body text contrast of 4.5:1 or more, visible focus, full keyboard operation, 44px touch targets, and `prefers-reduced-motion` respected. Some students are international, so use plain language and avoid US-only idioms where possible.
