# Ross Resale — fake-door pretotype

A static site (`index.html`, `styles.css`, `app.js`) that tests which of three models Ross MBA students would use or pay for:

| Model key     | Offer shown                          | Illustrative price            |
|---------------|--------------------------------------|-------------------------------|
| `marketplace` | Pre-arrival resale marketplace       | 10% buyer fee, free to list   |
| `storage`     | Full-service storage + resale        | $49 pickup + 20% of sale      |
| `apartment`   | Whole-apartment transfer (bundle)    | ~$1,500 bundle, $99 listing   |

Every CTA opens a Google Form in a new tab with `?source=ross-resale-site&model=<key>&item=<slug>`. The 12 listing **Reserve** buttons go to the Reserve form with `model=marketplace` and the item slug. Nothing is real: no payments and no backend.

**What you measure:**
- **Sign-ups** = responses per form (the conversion signal).
- **Clicks** = GA4 `cta_click` events, broken down by `model` and `item` (the interest signal; also catches people who click and then don't submit).

---

## 1. Create the Google Forms (4 total)

Create one form per model, plus one for Reserve. In each form:

1. Add the 3 questions below.
2. Add 3 **short-answer** questions at the end called `source`, `model` and `item`. These hold the tracking values. Put them in their own last section titled "Internal, do not edit" if you want to keep them out of the way.
3. **Settings → Responses → turn on "Restrict to users in University of Michigan and its trusted organizations."** Do this on every form. It requires a umich Google login, which also verifies the respondent is a student.
4. **Settings → Responses → Collect email addresses → "Verified".** This captures the umich email automatically, so you can drop Q3 below if you like.
5. Click **Send → link icon → copy the URL** (ends in `/viewform`).

### Form A: Pre-arrival marketplace (`marketplace`)
1. **How likely are you to use a Ross-only marketplace to buy or sell before move-in?** (Linear scale 1–5, "Not at all" → "Definitely")
2. **What fee would you pay per purchase for verified Ross sellers and guaranteed August pickup?** (Multiple choice: $0 only / Up to 5% / Up to 10% / Up to 15% / More than 15%)
3. **Your umich email (we'll notify you at launch).** (Short answer, validation: Regular expression → matches `.*@umich\.edu$`)

### Form B: Storage + resale, done for you (`storage`)
1. **Would you use a service that picks up your stuff in May, stores it and sells it for you?** (Multiple choice: Yes, definitely / Probably / Only for big items / No)
2. **What's the most you'd pay for pickup plus summer storage, before commission?** (Multiple choice: $0 / $25 / $50 / $100 / $150+)
3. **Your umich email.** (Short answer, same regex validation)

### Form C: Whole-apartment transfer (`apartment`)
1. **Are you looking to buy or sell a full furnished apartment setup?** (Multiple choice: Buy (incoming) / Sell (graduating) / Both / Just curious)
2. **For a complete 1BR setup (bed, sofa, desk, kitchen, essentials), what would you pay or accept?** (Multiple choice: Under $750 / $750–1,250 / $1,250–2,000 / $2,000+)
3. **Your umich email.** (Short answer, same regex validation)

### Form D: Reserve (Reserve buttons on listings)
1. **How likely would you be to pick this item up at orientation in August?** (Linear scale 1–5)
2. **Would you put down a refundable $20 deposit to hold it?** (Yes / Maybe / No)
3. **Your umich email.** (Short answer, same regex validation)

The `item` field tells you which listing they clicked.

## 2. Get the prefill entry IDs

So that `source`, `model` and `item` fill in automatically:

1. Open the form editor → **⋮ menu → Get pre-filled link**.
2. Type dummy values in the three tracking questions: `SRC`, `MODEL`, `ITEM`. Click **Get link → Copy link**.
3. The link looks like `...viewform?usp=pp_url&entry.111111=SRC&entry.222222=MODEL&entry.333333=ITEM`. Those `entry.NNNN` names are your IDs.
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
  },
  entryIds: {
    marketplace: { source: "entry.111111", model: "entry.222222", item: "entry.333333" },
    // ...same for storage, apartment, reserve
  },
  ga4Id: "G-XXXXXXXXXX",   // leave "" to turn GA off
  source: "ross-resale-site",
};
```

- Until a form URL is filled in (it still contains `REPLACE_ME`), its buttons show a "Form not connected yet" message instead of opening a broken link.
- **GA4:** at analytics.google.com, create a property, then **Admin → Data streams → Web**, and add your Pages URL. Copy the **Measurement ID** (`G-...`). Each click sends a `cta_click` event with the `cta` (`reserve` or `waitlist`), `model` and `item` parameters. To use `model` and `item` in reports, register them under **Admin → Custom definitions → Create custom dimension** (event scope). Data can take 24–48 hours to show up in standard reports, but it appears in **Realtime** within seconds.

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

Compare across the three models:
- **Click-through rate:** GA4 `cta_click` events where `cta = waitlist`, by `model`.
- **Sign-up rate:** responses in each form, which you can link to a Sheet.
- **Willingness to pay:** the Q2 distribution in each form.
- **Reserve demand:** Form D responses by `item`, showing which categories pull hardest.

Note: model order on the page (marketplace, storage, apartment) can bias clicks toward the first card. If you have time, run a second week with the order shuffled.
