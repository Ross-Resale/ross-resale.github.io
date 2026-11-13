---
name: Ross Resale
description: A calm, editorial resale noticeboard for Ross MBA classmates. Navy ink on warm paper, with a single maize mark.
colors:
  navy-ink: "#00274C"
  navy-deep: "#001A33"
  slate: "#3B5470"
  muted: "#5A6B7F"
  hairline: "#D6DCE3"
  paper: "#F5F4EF"
  paper-blue: "#ECEFF2"
  surface: "#FBFAF7"
  maize: "#FFCB05"
  tile-fog: "#DCE3EA"
  tile-sand: "#E8E2D6"
  tile-sage: "#DCE2D9"
  tile-clay: "#E9DDD4"
  tile-stone: "#E1E3E5"
typography:
  display:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.5rem, 5.2vw, 4.25rem)"
    fontWeight: 350
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  title-small:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  lede:
    fontFamily: "'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  meta:
    fontFamily: "'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  body-small:
    fontFamily: "'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.01em"
  price:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "72px"
  3xl: "112px"
components:
  button-primary:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.surface}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.navy-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.slate}"
    typography: "{typography.body-small}"
    padding: "8px 2px"
  filter-active:
    backgroundColor: "transparent"
    textColor: "{colors.navy-ink}"
  listing-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "0"
  listing-tile:
    backgroundColor: "{colors.tile-fog}"
    rounded: "{rounded.md}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.slate}"
    typography: "{typography.meta}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  segment-btn:
    backgroundColor: "transparent"
    textColor: "{colors.slate}"
    typography: "{typography.body-small}"
    rounded: "{rounded.sm}"
    padding: "8px 14px"
  segment-btn-active:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.surface}"
---

# Design System: Ross Resale

## Overview

**North star: "The noticeboard in a quiet hallway."** Ross Resale should feel like a well-kept, hand-ruled list that a thoughtful classmate pinned up, not a storefront. Navy ink on warm paper, generous margins, and serif headlines that carry the voice. Every surface should lower the visitor's pulse. They are mid-move, on a phone, and need to see that the stuff is real, the people are classmates and the logistics are handled.

Reference points: calm editorial layouts (independent magazines, a good restaurant menu, a university press catalog page). The opposite of a startup landing page or a Craigslist grid.

Personality: settled, precise, warm. Confidence comes from restraint and good type, not from color or motion.

**Current build vs. this system.** The deployed v1 (DM Sans, gradient navy hero, maize-filled buttons, emoji tiles, drop shadows, a row of three identical model cards) predates this file and does not follow it. Treat v1 as evidence of content and function only. Restyle it to this system; don't polish the v1 look.

## Colors

The palette is two inks on two papers, plus one maize mark. All neutrals are tinted slightly toward navy-blue, never pure gray, black or white.

### Primary
- **Navy ink `#00274C`**: headlines, body text, primary buttons, rules on emphasis. Contrast is 13.7:1 on paper.
- **Navy deep `#001A33`**: hover and pressed states for navy actions only.
- **Slate `#3B5470`**: secondary text, descriptions, inactive filters (7.1:1 on paper).
- **Muted `#5A6B7F`**: metadata such as seller year, pickup line and footnotes (5.0:1 on paper; 4.7:1 on paper-blue). Never go lighter for text.

### Accent
- **Maize `#FFCB05`**: a mark, never a surface. See the Maize Budget rule.

### Neutral
- **Paper `#F5F4EF`**: page background. Warm off-white, a deliberate choice from the brief ("soft, warm off-white… not pure white"), tinted toward the navy family rather than toward beige.
- **Paper blue `#ECEFF2`**: the one alternate band (the model comparison section). Flat, with no gradient.
- **Surface `#FBFAF7`**: listing cards, sitting a half-step lighter than paper.
- **Hairline `#D6DCE3`**: 1px rules and card borders. Decorative only; never the sole carrier of meaning.

### Listing tiles
Flat, muted, solid fills, one per category: Furniture `tile-sand`, Electronics `tile-stone`, Kitchen `tile-clay`, Home `tile-sage`, Sports & Outdoor and Clothing `tile-fog`. Each carries a single navy line icon at about 70% opacity.

### Named Rules
- **The Maize Budget.** At most three maize marks are visible on any one screen. Approved uses: (1) the underline on one word of the hero headline, (2) the active filter's 2px underline. Listing tags are neutral (hairline outline), not maize, so a row of cards never breaks the budget. Never a button fill, section background, large block or text color on paper (it fails contrast).
- **No gradients, anywhere.** Not in backgrounds, buttons, text or tiles. No glass, blur, glow, mesh or blobs.
- **No purple.** Any tint that drifts violet (including blue-purple "stone") gets corrected toward neutral gray-blue.

## Typography

A two-family pairing. **Newsreader** (a variable serif with optical sizes, designed for reading) carries headlines, model names and prices: literate, warm and calm at light weights. **Hanken Grotesk** (a quiet, humanist-leaning grotesque) handles body, UI and labels. Both are loaded from Google Fonts with `display=swap`. Never use Inter, Roboto, DM Sans or system-default UI faces as the primary type.

### Hierarchy
- **Display** (Newsreader 350, clamp 2.5 to 4.25rem, line-height 1.04): hero headline only. Left-aligned, 21ch measure, at most three lines on desktop.
- **Headline** (Newsreader 400, clamp 1.75 to 2.5rem): section titles.
- **Title** (Newsreader 500, 1.375rem): listing titles, the wordmark and step names on desktop.
- **Title small** (Newsreader 500, 1.125rem): listing titles and step names on mobile.
- **Price** (Newsreader 500, 1.5rem): listing and model prices. Tabular figures where supported.
- **Lede** (Hanken 400, fluid 1.0625 to 1.1875rem): the one line under the hero headline.
- **Body** (Hanken 400, 1.0625rem / 1.6): paragraphs, capped at 60ch.
- **Body small** (Hanken 400, 0.9375rem): descriptions, filters and metadata.
- **Meta** (Hanken 400, 0.875rem): seller and pickup lines, price notes, footer.
- **Label** (Hanken 600, 0.875rem, +0.01em): buttons and tags. Sentence case.

### Named Rules
- **No eyebrows.** Never put a small uppercase, letter-spaced kicker above a headline. Context goes into the headline or the line under it.
- **Sentence case everywhere**, including buttons ("Join the waitlist", "Reserve"). No all-caps.
- **The serif speaks, the sans works.** Serif for anything the visitor should feel (names, prices, headlines). Sans for anything they operate (filters, buttons, metadata).

## Layout

- **Page measure:** max-width 1080px, with side gutters of 20px (mobile) and 40px (desktop). Text blocks are capped at 60ch.
- **Rhythm:** sections are separated by `3xl` (112px) on desktop and `2xl` (72px) on mobile. Few sections, lots of air: hero, listings, models, footer. Nothing else.
- **Hero:** left-aligned, never centered. The headline, a one-sentence subhead, one primary button and one plain text link. Below a hairline, the "Who are you?" toggle and the segment line it controls. No step strip: a step sequence would describe one selling option and tilt the test.
- **Listings:** 3 columns on desktop, 2 on tablet and mobile (including 375px phones), 1 below 340px. The gap is `lg` (24px) desktop and `md` (16px) mobile. Filters sit on one line above the grid as text tabs and scroll sideways on mobile.
- **Two ways to sell:** two equal, side-by-side columns separated by a vertical hairline on desktop (not floating cards), each topped by its serif name. On mobile they become two stacked rows separated by a horizontal hairline. Equal width, equal type, identical CTA styling and no badge keep the test fair. A single quiet bundle line sits under both, set off by a hairline.
- **Breakpoints:** 340px, 700px, 800px (models stack), 960px.

## Elevation & Depth

Flat. Depth comes from paper tone and hairlines, never from shadow.

- Cards: `surface` on `paper` with a 1px `hairline` border. No box-shadow.
- Hover on cards: the border darkens to `muted`. No lift and no shadow.
- The sticky top bar sits on `paper` with a 1px bottom hairline once scrolled. No blur or translucency.

### Named Rules
- **No shadows.** The one exception is the system focus ring.

## Shapes

- `sm` 6px: buttons, tags, inputs.
- `md` 10px: listing image tiles (inside cards).
- `lg` 14px: listing cards.
- No pills (999px) except a toast if one is needed. Corners stay consistent: never mix sharp and round on the same component.
- **Line icons:** inline SVG, 24px grid, 1.5px stroke, round caps and joins, `currentColor`, no fills. One simple icon per category tile (sofa, coat, pot, monitor, bicycle). No emoji anywhere, and no sparkle or star icons.

## Motion

Slow and minimal. Opacity fades only.

- Section and grid entrance: opacity 0 to 1, 400ms, `cubic-bezier(0.22, 1, 0.36, 1)`, and once only.
- Filter change: crossfade the grid, 240ms.
- Hover and focus color changes: 160ms.
- No transforms, slides, parallax, bounce or scroll-jacking.
- `prefers-reduced-motion: reduce` removes all transitions and animations.

## Components

### Buttons
- **Primary:** navy-ink fill, surface text, 6px corners, label type, 12px × 20px padding. Hover: navy-deep. Used for Reserve and Join the waitlist.
- **Quiet:** transparent with navy-ink text and a 1px navy-ink bottom border on hover. Used for secondary links.
- **Focus (all interactive):** `outline: 2px solid #00274C; outline-offset: 3px`.
- Minimum touch target is 44px tall.

### Filters
Text tabs, not chips. Inactive filters use slate body-small; hover turns them navy-ink. The active filter is navy-ink with a 2px maize underline offset 6px below the baseline (one of the maize marks). They are `button` elements with `aria-pressed`.

### Listing card
`surface` background, 1px hairline border, 14px corners, 12px inner padding around the tile. Top: a flat category-colored tile (4:3, 10px corners) with a centered navy line icon. Below, in order: title (serif), price (serif) with an optional neutral tag (1px hairline outline, slate text, e.g. "May listing"), "MBA2 seller · Available Aug pickup" in muted body-small, then a full-width primary "Reserve" button. Show the original new price as muted strikethrough only if it is labeled as an estimate.

### Selling option column (signature component)
Two equal columns in the paper-blue band. Each column has the option name (Newsreader 500, 1.75rem), one flowing sentence of description (slate body, 44ch), the illustrative fee (price serif) with a one-line note (meta), and a primary button aligned to the column bottom. No icon, no fact list, and no "recommended" or "most convenient" badge or highlighted column: any of these would bias the test.

### Segment toggle
"Who are you?" in slate body-small, followed by a two-option segmented control: a surface-colored track with a 1px hairline border and 10px corners, holding two buttons. The active option is filled navy-ink with surface text, and the inactive one is slate on transparent. Buttons use `aria-pressed`. Switching crossfades the segment line and the section order (240ms, opacity only). It sits at the foot of the hero, below a hairline, with the segment line under it.

### Remind line
A single quiet line above the footer, separated by a hairline: slate text plus a quiet underlined link. No box, no button, no maize.

### Navigation
Paper-colored top bar, 56px tall. The wordmark "Ross Resale" is set in Newsreader 500, and is not a logo mark or monogram square. Two quiet text links on the right: "Sell" and "Listings".

### Footer
Paper-blue band with muted body-small text: "Pretotype for a Ross MBA class project. No real transactions." plus the non-affiliation line. No navy slab.

## Do's and Don'ts

### Do:
- Let type and whitespace carry the page. When unsure, remove something.
- Keep the three models visually identical in weight. The test depends on it.
- Use plain, specific logistics language ("One drop-off in May. Pick up at orientation.").
- Keep every navy-on-paper text pairing at 4.5:1 or above (all listed tokens pass).
- Respect `prefers-reduced-motion`.

### Don't:
- Gradients, glassmorphism, glows, blobs or mesh backgrounds.
- Purple, neon, or sparkle and AI-flavored icons.
- A giant centered hero with two pill buttons, or gradient text.
- A row of three identical icon-title-text feature cards.
- Emoji as icons or illustrations.
- Maize as a fill, background, large shape or text color.
- Drop shadows to create hierarchy.
- An uppercase eyebrow above headlines.
- Hype copy: exclamation marks, "Revolutionize," "Seamless," "Unlock," invented stats or testimonials.
- Ross or University of Michigan logos, block M shapes, or anything that reads as official branding.
