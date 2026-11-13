# Ross Resale — fake-door pretotype

A static site (`index.html`, `styles.css`, `app.js`) that tests which of three models Ross MBA students would use or pay for. It is shared in mid-November with current students: MBA2s (the main target, who move out in May) and MBA1s. Winter gear listings get the click today; the May move-out problem gets the sign-up.

| Model key     | Offer shown (seller's view)                                   | Illustrative price            |
|---------------|---------------------------------------------------------------|-------------------------------|
| `marketplace` | List now. Sell to the incoming class before you leave.        | 10% of the sale               |
| `storage`     | One drop-off. We store it, sell it, and send you the money.   | $15 per item + 25% of sale    |
| `apartment`   | Hand off your whole apartment setup to one incoming student.  | Full 1BR setup listed at $1,500 |

A **"Who are you?"** toggle (MBA2 by default, or MBA1) changes the hero subhead and the section order. MBA2 sees the models first, MBA1 sees winter gear first.

## Links to share

Use a different link per channel so you can tell where sign-ups came from:

| Where              | Link |
|--------------------|------|
| Ross Slack channels | `https://mikeandrews-umich.github.io/ross-resale/?src=slack` |
| MBA-wide email      | `https://mikeandrews-umich.github.io/ross-resale/?src=email` |
| Anything else       | the plain URL, which is recorded as `src=direct` |

Optional: add `&segment=mba1` to open the page in the MBA1 view, for example in an MBA1-only channel (`?src=slack&segment=mba1`). `src` accepts any short lowercase label, so `?src=whatsapp` or `?src=slack-mba2` also work.

## What gets tracked

Every CTA opens a Google Form in a new tab. Every CTA URL and every GA4 `cta_click` event carries:

| Param     | Values | When |
|-----------|--------|------|
| `src`     | `slack`, `email`, `direct`, … | always |
| `segment` | `mba2`, `mba1` (the toggle at the time of the click) | always |
| `model`   | `marketplace`, `storage`, `apartment`; `none` for winter-gear Reserves (so they don't inflate marketplace); `undecided` for the remind link | always |
| `item`    | listing slug, e.g. `down-parka-m` | Reserve buttons |
| `intent`  | `remind` | "Remind me in March" link |

The URLs also carry `source=ross-resale-site`. GA4 events also carry `cta` (`reserve`, `waitlist` or `remind`).

**What you measure:**
- **Sign-ups** = responses per form (the conversion signal), split by `segment` and `src`.
- **Clicks** = GA4 `cta_click` events by `model`, `segment` and `src` (the interest signal; this also catches people who click and then don't submit).
- **Not yet, but later** = "Remind me in March" responses (`intent=remind`).
- **Winter pull** = Reserve clicks by `item`.

Nothing is real: no payments and no backend.

---

## 1. Create the Google Forms (5 total)

Create one form per model, plus one for Reserve and one for "Remind me in March." (You can point `remind` at one of the model forms instead; `intent=remind` tells those responses apart.) In each form:

1. Add the questions below. **Every form also gets this question:**
   **Which are you?** (Multiple choice: MBA1 / MBA2 / Other). Prefill it from `segment` (see step 2), so most people only need to confirm it.
2. Add **short-answer** questions at the end called `src`, `segment`, `model`, `item` and `intent`, which hold the tracking values. Put them in their own last section titled "Internal, do not edit" if you want them out of the way. If you prefill the visible "Which are you?" question from `segment`, you can skip the hidden `segment` field. Note that the site sends `mba1`/`mba2` in lowercase, and a multiple-choice prefill must match the option text exactly, so either name the options `mba1`/`mba2`, or use a short-answer field for `segment`.
3. **Settings → Responses → turn on "Restrict to users in University of Michigan and its trusted organizations."** Do this on every form. It requires a umich Google login, which also verifies the respondent is a student.
4. **Settings → Responses → Collect email addresses → "Verified".** This captures the umich email automatically, so you can drop Q3 below if you like.
5. Click **Send → link icon → copy the URL** (ends in `/viewform`).

### Form A: Marketplace (`marketplace`)
1. **How likely are you to list your things here and sell them to the incoming class before you leave?** (Linear scale 1–5, "Not at all" → "Definitely")
2. **What share of the sale price would you pay for verified Ross buyers and a set handoff date?** (Multiple choice: Nothing / Up to 5% / Up to 10% / Up to 15% / More than 15%)
3. **Your umich email (we'll write when this opens).** (Short answer, validation: Regular expression → matches `.*@umich\.edu$`)
4. **Which are you?** (MBA1 / MBA2 / Other)

### Form B: Storage and resale (`storage`)
1. **Would you use a service where you drop everything off once in May, and we store it, sell it and send you the money?** (Multiple choice: Yes, definitely / Probably / Only for big items / No)
2. **Which pricing would you accept?** (Multiple choice: $15 per item + 25% of sale / $25 per item + 15% / Flat 35% of sale, no item fee / None of these)
3. **Your umich email.** (Short answer, same regex validation)
4. **Which are you?** (MBA1 / MBA2 / Other)

### Form C: Apartment transfer (`apartment`)
1. **Would you hand off your whole apartment setup to one incoming student?** (Multiple choice: Yes, I'd sell it as a bundle / Maybe, depends on price / No, I'd sell items separately / I'd want to buy one)
2. **For a full one-bedroom setup (bed, sofa, desk, kitchen, essentials), what would you list it at or pay?** (Multiple choice: Under $750 / $750–1,250 / $1,250–2,000 / $2,000+)
3. **Your umich email.** (Short answer, same regex validation)
4. **Which are you?** (MBA1 / MBA2 / Other)

### Form D: Reserve (Reserve buttons on winter gear and May listings)
1. **How likely would you be to buy this from a classmate if it were real?** (Linear scale 1–5)
2. **When would you want it?** (This week / Before break / Next fall / Just browsing)
3. **Your umich email.** (Short answer, same regex validation)
4. **Which are you?** (MBA1 / MBA2 / Other)

The `item` field tells you which listing they clicked.

### Form E: Remind me in March (`remind`)
1. **What would you most likely do with your things in May?** (Sell them myself / Have someone store and sell them / Hand off the whole apartment / Ship or move them / Not sure yet)
2. **Your umich email (one reminder in March, nothing else).** (Short answer, same regex validation)
3. **Which are you?** (MBA1 / MBA2 / Other)

## 2. Get the prefill entry IDs

So that `source`, `model` and `item` fill in automatically:

1. Open the form editor → **⋮ menu → Get pre-filled link**.
2. Type dummy values in the tracking questions (`SRC`, `SEGMENT`, `MODEL`, `ITEM`, `INTENT`). Click **Get link → Copy link**.
3. The link looks like `...viewform?usp=pp_url&entry.111111=SRC&entry.222222=SEGMENT&...`. Those `entry.NNNN` names are your IDs.
4. Repeat for each form. The IDs are different in every form.

## 3. Fill in CONFIG

Open `app.js`. Everything you need is in the `CONFIG` block at the top:

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
    marketplace: { source: "", src: "entry.111111", segment: "entry.222222", model: "entry.333333", item: "", intent: "" },
    // ...same for storage, apartment, reserve, remind ("" skips a field)
  },
  ga4Id: "G-XXXXXXXXXX",   // leave "" to turn GA off
  source: "ross-resale-site",
  defaultSrc: "direct",
  defaultSegment: "mba2",
};
```

- Until a form URL is filled in (it still contains `REPLACE_ME`), its buttons show a "Form not connected yet" message instead of opening a broken link.
- **GA4:** at analytics.google.com, create a property, then **Admin → Data streams → Web**, and add your Pages URL. Copy the **Measurement ID** (`G-...`). Each click sends a `cta_click` event with `cta`, `src`, `segment`, `model`, `item` and `intent`. To use these in reports, register them under **Admin → Custom definitions → Create custom dimension** (event scope). Data can take 24–48 hours to show up in standard reports, but it appears in **Realtime** within seconds.

## 4. Deploy / redeploy (GitHub Pages)

First-time setup (needs the [GitHub CLI](https://cli.github.com/) and `gh auth login`):

```bash
git init -b main && git add . && git commit -m "Ross Resale pretotype"
gh repo create ross-resale --public --source=. --push
gh api -X POST repos/{owner}/ross-resale/pages -f "source[branch]=main" -f "source[path]=/"
```

Live at `https://<your-github-username>.github.io/ross-resale/` within 1–2 minutes.

**After any edit** (e.g., filling in CONFIG):

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

Compare across the three models, split by `segment` (MBA2 is the main target) and `src`:
- **Click-through rate:** GA4 `cta_click` events where `cta = waitlist`, by `model`. Leave `cta = reserve` out of the model comparison; furniture "May listing" Reserves carry `model=marketplace` and winter-gear Reserves carry `model=none`.
- **Sign-up rate:** responses in each form, which you can link to a Sheet.
- **Willingness to pay:** the Q2 distribution in each form.
- **Slack vs. email:** which channel brings more sign-ups per visit.
- **Reserve demand:** Form D responses by `item`. Winter items show today's pull; the furniture "May listing" items show early interest in May inventory.
- **Remind-me rate:** how many people say "not yet" and want a March reminder.

Note: model order on the page (marketplace, storage, apartment) can bias clicks toward the first card. If you have time, run a second week with the order shuffled.
