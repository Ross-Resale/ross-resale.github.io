# Ross Resale: fake-door pretotype

A static site (`index.html`, `styles.css`, `app.js`) for a Ross MBA class project. Ross Resale is presented as a marketplace where Ross students buy and sell furniture and gear, with a premium option where we pick things up, store them over the summer and sell them for you. It is shared in mid-November with current students: MBA2s (the main target, who move out in May) and MBA1s.

**The key test:** of the people who want to sell, how many choose the full-service option over listing items themselves. Buyer interest is tracked separately and never mixed into that comparison.

| What the visitor clicks | `role` | `model` | Illustrative price |
|---|---|---|---|
| **List an item** ("List it yourself") | `seller` | `marketplace` | 5% of the sale price |
| **Book a pickup** ("We handle everything") | `seller` | `storage` | 15% of the sale price, $10 minimum per item, nothing upfront |
| Bundle line ("selling the whole setup as one bundle") | `seller` | `apartment` | none shown |
| **Remind me in March** | `seller` | `undecided` (+ `intent=remind`) | none shown |
| **Reserve** on any listing | `buyer` | `none` (+ `item=<slug>`) | listing price |

The two selling options sit side by side at equal width, with the same button style and no badge, so neither is favored. Which one comes first (left on desktop, top on mobile) is **randomized per visit** and recorded as `order`, so position can't bias the result.

A **"Who are you?"** toggle (MBA2 by default, or MBA1) changes the line under the hero and the section order. MBA2 sees "Two ways to sell" first, and MBA1 sees the listings first. The headline is the same in both views.

## Links to share

Use a different link per channel so you can tell where sign-ups came from:

| Where | Link |
|---|---|
| Ross Slack channels | `https://mikeandrews-umich.github.io/ross-resale/?src=slack` |
| MBA-wide email | `https://mikeandrews-umich.github.io/ross-resale/?src=email` |
| Anything else | the plain URL, which is recorded as `src=direct` |

Optional: add `&segment=mba1` to open the page in the MBA1 view, for example in an MBA1-only channel (`?src=slack&segment=mba1`). `src` accepts any short lowercase label, so `?src=whatsapp` also works.

## What gets tracked

Every CTA opens a Google Form in a new tab. Every CTA URL and every GA4 `cta_click` event carries:

| Param | Values | When |
|---|---|---|
| `src` | `slack`, `email`, `direct`, … | always |
| `segment` | `mba2`, `mba1` (the toggle at the time of the click) | always |
| `segment_source` | `default` (never touched the toggle), `toggle` (chose it), `link` (came from a `&segment=` link) | always |
| `role` | `seller`, `buyer` | always |
| `model` | `marketplace`, `storage`, `apartment`, `undecided`, `none` | always |
| `order` | `ms` (marketplace shown first) or `sm` (storage shown first) | "List an item" and "Book a pickup" |
| `item` | listing slug, e.g. `commuter-bike` | Reserve buttons |
| `intent` | `remind` | "Remind me in March" link |

The URLs also carry the constant `source=ross-resale-site`. GA4 events also carry `cta` (`list`, `pickup`, `bundle`, `remind` or `reserve`).

Nothing is real: no payments and no backend.

---

## 1. Create the Google Forms (5 total)

| Form | `CONFIG.forms` key | Opened by |
|---|---|---|
| A. List it yourself | `marketplace` | "List an item" |
| B. We handle everything | `storage` | "Book a pickup" |
| C. Whole-setup bundle | `apartment` | the bundle line |
| D. Reserve | `reserve` | every listing's "Reserve" |
| E. Reminder | `remind` | "Remind me in March" |

In each form:

1. Add the questions below. **Every form includes "Which are you?" (MBA1 / MBA2 / Other).**
2. Add **short-answer** questions at the end called `src`, `segment`, `segment_source`, `role`, `model`, `order`, `item` and `intent` to hold the tracking values. Put them in their own last section titled "Internal, do not edit" if you want them out of the way.
3. **Segment prefill:** the site sends `segment` as lowercase `mba1` or `mba2`. **A multiple-choice prefill only works if the option text matches the value exactly**, so either name the "Which are you?" options `mba1` / `mba2` / `other`, or leave that question as Title Case for people to answer themselves and prefill the hidden short-answer `segment` field instead.
4. **Settings → Responses → turn on "Restrict to users in University of Michigan and its trusted organizations."** Do this on every form. It requires a umich Google login, which also checks that the respondent is a student.
5. **Settings → Responses → Collect email addresses → "Verified".** This captures the umich email automatically, so the email question below is optional.
6. Click **Send → link icon → copy the URL** (ends in `/viewform`).

### Form A: List it yourself (`marketplace`)
1. **How likely are you to list your things here and handle the sale with buyers yourself?** (Linear scale 1–5, "Not at all" → "Definitely")
2. **What share of the sale price would feel fair for a Ross-only marketplace?** (Nothing / Up to 5% / Up to 10% / More than 10%)
3. **Your umich email, so we can tell you when listing opens.** (Short answer, validation: Regular expression → matches `.*@umich\.edu$`)
4. **Which are you?** (MBA1 / MBA2 / Other)

### Form B: We handle everything (`storage`)
1. **How likely are you to book a pickup and have us store and sell your things?** (Linear scale 1–5)
2. **Which items would you want picked up?** (Checkboxes: Sofa or chairs / Bed or mattress / Desk or table / Shelving or storage / TV or monitor / Kitchen items / Bike / Sports or outdoor gear / Winter clothing / Other)
3. **Would 15% of the sale price, with a $10 minimum per item and nothing upfront, work for you?** (Yes / Only for bigger items / I'd want a lower rate / No)
4. **Your umich email.** (Short answer, same regex validation)
5. **Which are you?** (MBA1 / MBA2 / Other)

### Form C: Whole-setup bundle (`apartment`)
1. **What would you include in the bundle?** (Checkboxes: Bedroom / Living room / Kitchen / Desk and office / Everything)
2. **When does your lease end?** (Short answer)
3. **Your umich email.** (Short answer, same regex validation)
4. **Which are you?** (MBA1 / MBA2 / Other)

### Form D: Reserve (`reserve`)
1. **How likely would you be to buy this from a classmate if it were real?** (Linear scale 1–5)
2. **What else would you want to buy from classmates?** (Checkboxes: Furniture / Electronics / Kitchen items / Home goods / Bikes / Sports and outdoor gear / Winter clothing / Other)
3. **Your umich email.** (Short answer, same regex validation)
4. **Which are you?** (MBA1 / MBA2 / Other)

The `item` field tells you which listing they clicked.

### Form E: Reminder (`remind`)
1. **When you do sell, which sounds more like you?** (I'd list things myself / I'd rather someone handled it / Not sure yet)
2. **Your umich email, for one reminder in March and nothing else.** (Short answer, same regex validation)
3. **Which are you?** (MBA1 / MBA2 / Other)

## 2. Get the prefill entry IDs

So that the tracking fields fill in automatically:

1. Open the form editor → **⋮ menu → Get pre-filled link**.
2. Type dummy values in the tracking questions (`SRC`, `SEGMENT`, `SEGSRC`, `ROLE`, `MODEL`, `ORDER`, `ITEM`, `INTENT`). Click **Get link → Copy link**.
3. The link looks like `...viewform?usp=pp_url&entry.111111=SRC&entry.222222=SEGMENT&...`. Those `entry.NNNN` names are your IDs.
4. Repeat for each form. The IDs are different in every form.

## 3. Fill in CONFIG

Open `app.js`. Everything you need is in the `CONFIG` block at the top, with one prefill slot per parameter for every form:

```js
const CONFIG = {
  forms: {
    marketplace: "https://docs.google.com/forms/d/e/1FAIpQ.../viewform",
    storage:     "https://docs.google.com/forms/d/e/1FAIpQ.../viewform",
    apartment:   "https://docs.google.com/forms/d/e/1FAIpQ.../viewform",
    reserve:     "https://docs.google.com/forms/d/e/1FAIpQ.../viewform",
    remind:      "https://docs.google.com/forms/d/e/1FAIpQ.../viewform",
  },
  entryIds: {
    storage: { source: "", src: "entry.111111", segment: "entry.222222", segment_source: "entry.333333",
               role: "entry.444444", model: "entry.555555", order: "entry.666666", item: "", intent: "" },
    // ...same shape for marketplace, apartment, reserve, remind ("" skips a field)
  },
  ga4Id: "G-XXXXXXXXXX",   // leave "" to turn GA off
  source: "ross-resale-site",
  defaultSrc: "direct",
  defaultSegment: "mba2",
};
```

- Until a form URL is filled in (it still contains `REPLACE_ME`), its buttons show "This form isn't connected yet" instead of opening a broken link.
- **GA4:** at analytics.google.com, create a property, then **Admin → Data streams → Web**, and add your Pages URL. Copy the **Measurement ID** (`G-...`). Each click sends a `cta_click` event with `cta`, `src`, `segment`, `segment_source`, `role`, `model`, `order`, `item` and `intent`. To use these in reports, register them under **Admin → Custom definitions → Create custom dimension** (event scope). Data can take 24–48 hours to show up in standard reports, but it appears in **Realtime** within seconds.

## 4. Deploy / redeploy (GitHub Pages)

The site is already live at `https://mikeandrews-umich.github.io/ross-resale/`. **After any edit** (e.g., filling in CONFIG):

```bash
git add . && git commit -m "Update config" && git push
```

Pages rebuilds automatically within about a minute. Hard-refresh (Ctrl+Shift+R) to bypass the cache.

## 5. Preview locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Reading results

**The main comparison uses sellers only** (`role=seller`), split by `segment` (MBA2 is the main target) and `src`:

- **Full-service share:** `model=storage` ÷ (`model=storage` + `model=marketplace`), for clicks (GA4) and for form responses. This is the number the test is about. Filter to those two models only, because `role=seller` also includes the bundle (`apartment`) and remind (`undecided`) links.
- **Position check:** compare the share for `order=ms` and `order=sm`. If they differ a lot, position mattered, and the average of the two is your best estimate.
- **Segment quality:** `segment_source=default` means the visitor never touched the toggle, so their `mba2` is an assumption. Treat `toggle` and `link` as confirmed.
- **Bundle interest:** `model=apartment` responses, as a side signal.
- **Not yet:** `intent=remind` responses. Form E's first question also gives an early lean toward self-serve or full service.
- **Slack vs. email:** which channel brings more seller sign-ups per visit.

**Buyer interest stays separate** (`role=buyer`): Reserve clicks and Form D responses by `item`, plus Form D's "what else would you buy" answers. Never add these to the seller comparison.

Note: one person can click more than one CTA, and nothing on the site deduplicates them. Form responses (one per verified umich email) are the cleaner count.
