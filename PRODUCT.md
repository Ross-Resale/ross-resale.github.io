# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS and vanilla JS. No framework, no build step. Hosted on GitHub Pages (`mikeandrews-umich/ross-resale`, served from `main` root). The only allowed external dependencies are Google Fonts, Google Forms (sign-up destinations) and an optional GA4 tag.

## Users

Ross MBA students, aged roughly 26 to 34. They are busy and mobile-first, and already used to Facebook Marketplace, Craigslist and class WhatsApp groups. They value trust (only classmates), convenience and fair prices.

**This launch targets current Ross students, not incoming ones.** The site is shared in mid-November 2026.

- **MBA2s (main target).** They graduate in May 2027 and must sell or move everything. The problem is six months away, so it isn't top of mind yet. They are the supply side and the sign-up we most want.
- **MBA1s (secondary).** They remember how painful it was to furnish an apartment in August, and they'll be the sellers next year. Today they're also buyers of winter gear.
- **Incoming MBA1s (Class of 2029)** are the eventual buyers of May listings. They aren't the audience for this launch.

The site has a "Who are you?" toggle (MBA2 by default, MBA1 as the alternative). It changes the hero headline and subhead and the section order, and is recorded as `segment` on every CTA.

## Launch Strategy

- **Timely hook:** winter is starting in Ann Arbor, and students need parkas, boots and ski gear now. Winter gear listings earn the click today.
- **Real ask:** the May move-out problem earns the sign-up. The three models are framed from the seller's side as answers to "What do I do with my things in May?"
- **Not ready yet:** students who don't feel the problem yet get one quiet "Remind me in March" option (`intent=remind`) rather than pressure.

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

- Visitors arrive in mid-November from Ross Slack channels (`?src=slack`) and an MBA-wide email (`?src=email`), usually on a phone and often mid-task. Any other visit is `src=direct`.
- CTAs open Google Forms in a new tab. Every CTA URL and GA4 `cta_click` event carries `src`, `segment` (`mba1`/`mba2`) and `model`, plus `item` and `intent` (`remind`) when relevant. The constant `source=ross-resale-site` also stays on every URL.
- The forms are restricted to University of Michigan Google accounts. The site itself is public.
- Configuration (form URLs, entry IDs, GA4 ID) lives in the `CONFIG` object at the top of `app.js`.

## Capabilities and Constraints

- Winter-gear Reserve clicks are tracked with `model=none` so they never count toward a model. Only the furniture "May listing" Reserves count as `marketplace`.
- 12 mock listings in a "Winter gear from classmates" section, mostly winter items plus a few furniture items shown as examples of May listings. Client-side category filters and a Reserve CTA on each.
- Three model offers, written from the seller's point of view, each with an illustrative price and a "Join the waitlist" CTA.
- The illustrative prices are hypotheses being tested, not commitments: 10% of the sale (marketplace); $15 per item + 25% of the sale (storage); 10% of the sale, shown with an example full one-bedroom setup listed at $1,500 (apartment). All three price lines are stated as seller fees so they can be compared.
- A "Remind me in March" link opens the waitlist form with `intent=remind`.
- No localStorage, accounts or payments.
- The footer must state: "Pretotype for a Ross MBA class project. No real transactions."
- All three models should get comparable visual weight, so the page design doesn't bias which one gets clicked.

## Brand Commitments

- **Name:** Ross Resale.
- **Voice:** warm, sharp and peer-to-peer, as if a classmate built it rather than a corporation. Short sentences. No hype, no exclamation marks, no corporate buzzwords ("revolutionize," "seamless," "unlock").
- **Tone:** calm and practical, never urgent. No countdown timers, no "Don't miss out," no scarcity or FOMO language. The deadline (May) is stated as a fact, not as pressure.
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
