# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS and vanilla JS. No framework, no build step. Hosted on GitHub Pages (`mikeandrews-umich/ross-resale`, served from `main` root). The only allowed external dependencies are Google Fonts, Google Forms (sign-up destinations) and an optional GA4 tag.

## Users

Ross MBA students, aged roughly 26 to 34. They are busy and mobile-first, and already used to Facebook Marketplace, Craigslist and class WhatsApp groups. Two sides:

- **Incoming MBA1s** are moving to Ann Arbor, often from far away. They need furniture, winter gear and household essentials, and want them ready on arrival without buying new or hunting through strangers' listings.
- **Graduating MBA2s** are leaving Ann Arbor in May. They have a full apartment of things to get rid of, during finals and a cross-country or international move.

Both sides are in the middle of a stressful move. They value trust (only classmates), convenience and fair prices.

## Product Purpose

Ross Resale is a student-to-student resale service just for Ross MBAs. The flow:

1. **Reserve:** incoming MBA1s browse and reserve items before they arrive.
2. **Store:** graduating MBA2s make one drop-off in May. Items are held over the summer.
3. **Collect:** buyers pick up at August orientation or arrange delivery.

Value proposition: less hassle, lower costs, less waste.

**This site is a fake-door pretotype for a Ross MBA class project.** Nothing is real: there are no transactions, no inventory and no backend. Its only job is to measure which of three models students would most likely use or pay for:

1. `marketplace`: pre-arrival resale marketplace
2. `storage`: full-service storage and resale (we pick up, store and sell for you)
3. `apartment`: whole-apartment transfer (buy or sell a full furnished setup as a bundle)

Success means a clean, comparable intent signal for each model: CTA clicks (GA4 `cta_click` events with `model` and `item`) and Google Form sign-ups (one form per model, plus a Reserve form).

## Positioning

The difference is a closed, trusted community plus logistics timed to the MBA calendar: May drop-off, summer storage, August orientation pickup. A general marketplace can't truthfully claim "every buyer and seller is a classmate," or a handoff built around the dates Ross students actually arrive and leave.

## Operating Context

- Visitors arrive from a link in class channels or WhatsApp groups, usually on a phone, often mid-task.
- CTAs open Google Forms in a new tab, with `source`, `model` and `item` passed as URL params and prefilled form fields.
- The forms are restricted to University of Michigan Google accounts. The site itself is public.
- Configuration (form URLs, entry IDs, GA4 ID) lives in the `CONFIG` object at the top of `app.js`.

## Capabilities and Constraints

- 12 mock listings across the categories Furniture, Winter Gear, Kitchen, Electronics and Other, with client-side filtering.
- Each listing shows a title, a price, the seller's class year (MBA2), "Available Aug pickup" and a Reserve CTA.
- Three model offers, each with a description, an illustrative price and a "Join waitlist" CTA.
- The illustrative prices are hypotheses being tested, not commitments: 10% buyer fee (marketplace); $49 pickup + 20% of sale (storage); about $1,500 bundle with a $99 seller listing fee (apartment).
- No localStorage, accounts or payments.
- The footer must state: "Pretotype for a Ross MBA class project. No real transactions."
- All three models should get comparable visual weight, so the page design doesn't bias which one gets clicked.

## Brand Commitments

- **Name:** Ross Resale.
- **Voice:** warm, sharp and peer-to-peer, as if a classmate built it rather than a corporation. Short sentences. No hype, no exclamation marks, no corporate buzzwords ("revolutionize," "seamless," "unlock").
- **Emotional goal:** calm, like a deep breath during a stressful move. Settled, quiet and trustworthy.
- **Colors:** Michigan-inspired navy (#00274C) as the primary color, with maize (#FFCB05) as a sparing accent. It must not read as official university branding.
- **No Ross or University of Michigan logos or marks.** Keep the "Not affiliated with or endorsed by the University of Michigan" disclaimer.

## Evidence on Hand

None. There are no real users, testimonials, sales figures, partners or press. Listings are mock items. Future work must not invent testimonials, user counts, "as seen in" claims, savings statistics or waitlist sizes.

## Product Principles

1. **Measure honestly.** Every design choice should keep the three-model comparison fair: equal weight, equal clarity, no dark patterns.
2. **Trust before transaction.** Lead with "only classmates" and plain, specific logistics, not with promotion.
3. **Calm over clever.** The visitor is already stressed. Remove decisions, noise and urgency instead of adding them.
4. **Truthful fake door.** It's fine to be a pretotype. Say so plainly, and never imply a transaction happened.
5. **Phone first.** Most visits come from a group-chat link on a phone.

## Accessibility & Inclusion

Target WCAG 2.2 AA: body text contrast of 4.5:1 or more, visible focus, full keyboard operation, and `prefers-reduced-motion` respected. Some incoming students are international, so use plain language and avoid US-only idioms where possible.
