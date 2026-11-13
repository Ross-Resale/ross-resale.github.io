/* =========================================================================
   CONFIG: edit this block, then redeploy. Nothing else needs to change.
   ========================================================================= */
const CONFIG = {
  // Google Form links, one per CTA (the "Send > link" URL, ending in /viewform).
  forms: {
    list:    "https://docs.google.com/forms/d/e/1FAIpQLSdk-Bo9BtJqcnnn9nm0_KvtmhgWREDMapY9RizrfmVv9UaOTA/viewform", // "List an item"
    pickup:  "https://docs.google.com/forms/d/e/1FAIpQLSfJciVvaV1r2gYFaETBzQjPfTEAzv28zt2TPPle-_4ntrGxnQ/viewform", // "Book a pickup"
    bundle:  "https://docs.google.com/forms/d/e/1FAIpQLSeWLHaZpbQhhTVUiwUaETrsgs2wErnuFHkHNSNyMIa6m1XHYg/viewform", // whole-setup bundle line
    reserve: "https://docs.google.com/forms/d/e/1FAIpQLScFFuU3Wz2xLnaIn56IGXX2n5u1AOjJt2_7reBwzs8QJDqkUw/viewform", // every listing "Reserve"
    remind:  "https://docs.google.com/forms/d/e/1FAIpQLSfQPiR21TycdE0D-OTi0UbG2_kRpWx8aM9b3Z_9GTdW9kzAkQ/viewform", // "Remind me in March"
  },

  // Prefill entry IDs: one slot per tracked parameter, per form.
  // "" skips a field (the value still travels as a plain URL param, but the form won't capture it).
  entryIds: {
    list:    { src: "entry.677976045",  segment: "entry.1632646360", segment_source: "entry.1032519999", role: "entry.644311723",  model: "entry.1251220424", order: "entry.232137060", item: "entry.1087205914", intent: "entry.1432546577" },
    pickup:  { src: "entry.79385715",   segment: "entry.1636570176", segment_source: "entry.314272298", role: "entry.767686248",  model: "entry.1609845146", order: "entry.435577424", item: "entry.676806321",  intent: "entry.1838633127" },
    bundle:  { src: "entry.1669151282", segment: "entry.349446310",  segment_source: "entry.194942234", role: "entry.1445233054", model: "entry.1179835521", order: "entry.169264949", item: "entry.1774453204", intent: "entry.516654492" },
    reserve: { src: "entry.103907061",  segment: "entry.987412449",  segment_source: "entry.18515739", role: "entry.2039685305", model: "entry.1812600123", order: "entry.598492394", item: "entry.723724596",  intent: "entry.1429252411" },
    remind:  { src: "entry.1964159990", segment: "entry.1431058766", segment_source: "entry.1525714072", role: "entry.269617889",  model: "entry.1457797625", order: "entry.371992717", item: "entry.907222145",  intent: "entry.647261115" },
  },

  // Google Analytics 4 measurement ID, e.g. "G-ABC123XYZ". Leave "" to disable GA.
  ga4Id: "",

  source: "ross-resale-site",
  defaultSrc: "direct",
  defaultSegment: "mba2",
};
/* ========================================================================= */

/* Listing photos.
   img = a product photo stored in /images, shown whole. A white or transparent backdrop blends into the category tint;
   bg = the photo's own off-white backdrop color, used as the tile color instead so no box shows.
   rotate: true angles a tall, narrow photo (e.g. skis) across the 4:3 frame.
   photo = a free Unsplash photo id (unsplash.com/license), cropped to 4:3 from Unsplash's CDN; crop = extra crop params;
   by = Unsplash photographer handle (credits in README). */
const photoUrl = (l, w) =>
  `https://images.unsplash.com/${l.photo}?w=${w}&h=${Math.round(w * 0.75)}&fit=crop${l.crop || ""}&auto=format&q=70`;

function photoHtml(l) {
  if (l.img) {
    return `<img class="product${l.rotate ? " product-rotate" : ""}" src="${l.img}" alt="${esc(l.title)}" loading="lazy" decoding="async">`;
  }
  return `<img src="${photoUrl(l, 480)}" srcset="${photoUrl(l, 480)} 480w, ${photoUrl(l, 800)} 800w"
             sizes="(max-width: 700px) 50vw, 340px" width="480" height="360"
             alt="${esc(l.title)}" loading="lazy" decoding="async">`;
}

/* when: "now" = in Ann Arbor now; "may" = available when the seller moves out in May */
const LISTINGS = [
  { slug: "sofa-3-seat",       title: "Three-seat sofa, light grey",     price: 220, cat: "furniture",   year: "MBA2", hood: "Burns Park",       cond: "Good",     when: "may", img: "images/sofa.avif", bg: "#f5f6f5" },
  { slug: "standing-desk",     title: "Electric standing desk",          price: 180, cat: "furniture",   year: "MBA2", hood: "Kerrytown",        cond: "Like new", when: "may", photo: "photo-1623177623442-979c1e42c255", by: "ergonofis" },
  { slug: "bookshelf-5-shelf", title: "Tall wooden bookshelf",           price: 40,  cat: "furniture",   year: "MBA1", hood: "Old West Side",    cond: "Good",     when: "now", img: "images/bookshelf.avif", bg: "#f2f3f2" },
  { slug: "monitor-27-4k",     title: "27-inch 4K monitor",              price: 140, cat: "electronics", year: "MBA2", hood: "Downtown",         cond: "Like new", when: "now", photo: "photo-1764588029885-d115de3bda1e", by: "martinkatler" },
  { slug: "laser-printer",     title: "Wireless laser printer",          price: 60,  cat: "electronics", year: "MBA2", hood: "North Campus",     cond: "Good",     when: "may", photo: "photo-1612815154858-60aa4c59eaa6", by: "mahrous_houses" },
  { slug: "cookware-set",      title: "Ten-piece nonstick cookware set", price: 90,  cat: "kitchen",     year: "MBA2", hood: "South University", cond: "Good",     when: "may", img: "images/cookware.webp" },
  { slug: "coffee-maker",      title: "Moccamaster coffee maker with thermal carafe", price: 140, cat: "kitchen", year: "MBA1", hood: "Water Hill", cond: "Like new", when: "now", img: "images/coffee-maker.webp", bg: "#f8f8f8" },
  { slug: "air-purifier",      title: "HEPA air purifier",               price: 60,  cat: "home",        year: "MBA2", hood: "Kerrytown",        cond: "Like new", when: "now", photo: "photo-1709745634912-2a79b938f3c2", by: "nicsandman20" },
  { slug: "area-rug",          title: "Patterned area rug, 5 by 8 feet", price: 65,  cat: "home",        year: "MBA2", hood: "Old West Side",    cond: "Good",     when: "may", photo: "photo-1767159601823-96d0295344ce", by: "kesarihome" },
  { slug: "commuter-bike",     title: "Hybrid commuter bike with lock",  price: 160, cat: "sports",      year: "MBA2", hood: "Lower Town",       cond: "Good",     when: "now", photo: "photo-1613773038029-2dd0cdb924aa", by: "zoltantasi" },
  { slug: "skis-bindings",     title: "Atomic Bent 100 skis with bindings", price: 250, cat: "sports",   year: "MBA2", hood: "Burns Park",       cond: "Used",     when: "now", img: "images/skis.jpg", rotate: true },
  { slug: "patagonia-down-parka", title: "Patagonia Down With It parka, women's M", price: 180, cat: "clothing", year: "MBA1", hood: "Downtown", cond: "Like new", when: "now", img: "images/parka.webp", bg: "#f3f4ef" },
];

const CATEGORIES = [
  { id: "all",         label: "All" },
  { id: "furniture",   label: "Furniture" },
  { id: "electronics", label: "Electronics" },
  { id: "kitchen",     label: "Kitchen" },
  { id: "home",        label: "Home" },
  { id: "sports",      label: "Sports & Outdoor" },
  { id: "clothing",    label: "Clothing" },
];

/* Two ways to sell. Same component, same structure, same button style: keep them equal. */
const OPTIONS = [
  {
    id: "marketplace",
    name: "List it yourself",
    body: "You post your items, interested buyers reach out, and you arrange the handoff with them directly.",
    price: "5% of the sale price",
    note: "This comes out of the sale price only when an item sells, and listing is free.",
    cta: "List an item",
    ctaType: "list",
    form: "list",
  },
  {
    id: "storage",
    name: "We handle everything",
    body: "We pick your items up from your apartment, store them over the summer, list and sell them to incoming students, and send you the money once they sell.",
    detail: "If something doesn’t sell by the end of the summer, we’ll donate it to a local Ann Arbor charity, or you can ask for it back.",
    price: "15% of the sale price",
    note: "This comes out of the sale price only when an item sells, with a $10 minimum per item and nothing to pay upfront.",
    cta: "Book a pickup",
    ctaType: "pickup",
    form: "pickup",
  },
];

const SEGMENTS = {
  mba2: {
    line: "Whenever you’re ready to clear out your apartment, you can sell to classmates yourself or let us take care of all of it.",
    order: ["sell", "listings"],
  },
  mba1: {
    line: "You probably remember how much work it was to furnish your place in August, and next year you’ll be the one selling.",
    order: ["listings", "sell"],
  },
};

/* ---------- State from the page URL ---------- */
const pageParams = new URLSearchParams(window.location.search);
const clean = (v) => (v || "").toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 32);
const state = {
  src: clean(pageParams.get("src")) || CONFIG.defaultSrc,
  segment: SEGMENTS[clean(pageParams.get("segment"))] ? clean(pageParams.get("segment")) : CONFIG.defaultSegment,
  category: "all",
};
/* "link" if ?segment= was in the URL, "default" until the visitor touches the toggle, then "toggle". */
state.segmentSource = SEGMENTS[clean(pageParams.get("segment"))] ? "link" : "default";
/* Randomize which option comes first (left on desktop, top on mobile) so position can't bias the test.
   "ms" = marketplace first, "sm" = storage first. Recorded on both seller option CTAs. */
state.order = Math.random() < 0.5 ? "ms" : "sm";

/* ---------- Tracking helpers ---------- */
function buildFormUrl(formKey, params) {
  const url = new URL(CONFIG.forms[formKey]);
  const ids = CONFIG.entryIds[formKey] || {};
  let hasPrefill = false;
  Object.entries(params).forEach(([key, value]) => {
    if (value == null || value === "") return;
    url.searchParams.set(key, value);
    if (ids[key]) {
      url.searchParams.set(ids[key], value);
      hasPrefill = true;
    }
  });
  if (hasPrefill) url.searchParams.set("usp", "pp_url");
  return url.toString();
}

/* Every CTA carries src, segment, role and model; item and intent only when they apply. */
function ctaParams(a) {
  return {
    source: CONFIG.source,
    src: state.src,
    segment: state.segment,
    segment_source: state.segmentSource,
    role: a.dataset.role,
    model: a.dataset.model,
    order: a.dataset.order || "",
    item: a.dataset.item || "",
    intent: a.dataset.intent || "",
  };
}

function refreshCtaLinks() {
  document.querySelectorAll("a[data-cta]").forEach((a) => {
    a.href = buildFormUrl(a.dataset.form, ctaParams(a));
  });
}

function initGA() {
  const id = (CONFIG.ga4Id || "").trim();
  if (!id) return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", id);
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
    document.head.appendChild(s);
  } catch (e) { /* never block the page on analytics */ }
}

function trackClick(a) {
  if (typeof window.gtag !== "function") return;
  const p = ctaParams(a);
  try {
    window.gtag("event", "cta_click", {
      cta: a.dataset.cta,
      src: p.src,
      segment: p.segment,
      segment_source: p.segment_source,
      role: p.role,
      order: p.order || "(none)",
      model: p.model,
      item: p.item || "(none)",
      intent: p.intent || "(none)",
      transport_type: "beacon",
    });
  } catch (e) { /* ignore */ }
}

/* ---------- Rendering ---------- */
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const catLabel = (id) => (CATEGORIES.find((c) => c.id === id) || {}).label || id;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function ctaButton({ form, role, model, item, cta, label, context, order, variant = "primary" }) {
  return `<a class="btn btn-${variant} btn-block" href="#" target="_blank" rel="noopener"
            aria-label="${esc(label + ": " + context)}"
            data-cta="${esc(cta)}" data-form="${esc(form)}" data-role="${esc(role)}"
            data-model="${esc(model)}" data-item="${esc(item || "")}"${order ? ` data-order="${esc(order)}"` : ""}>${esc(label)}</a>`;
}

function renderFilters() {
  $("#filters").innerHTML = CATEGORIES.map((c) =>
    `<button type="button" class="filter" data-cat="${c.id}" aria-pressed="${c.id === state.category}">${esc(c.label)}</button>`
  ).join("");
}

function gridHtml() {
  const items = LISTINGS.filter((l) => state.category === "all" || l.cat === state.category);
  if (!items.length) return `<p class="empty">Nothing in this category yet.</p>`;
  return items.map((l) => `
    <article class="card">
      <div class="tile tile-${l.cat}${l.img ? " tile-product" : ""}${l.bg ? " tile-matte" : ""}"${l.bg ? ` style="background:${l.bg}"` : ""}>
        ${photoHtml(l)}
      </div>
      <div class="card-body">
        <p class="card-cat">${esc(catLabel(l.cat))}</p>
        <h3 class="card-title">${esc(l.title)}</h3>
        <div class="card-price"><span class="price">$${l.price}</span><span class="tag">${esc(l.cond)}</span></div>
        <p class="card-meta">${esc(l.year)} in ${esc(l.hood)} · ${l.when === "may" ? "Available in May" : "In Ann Arbor now"}</p>
        <div class="card-actions">
          ${ctaButton({ form: "reserve", role: "buyer", model: "none", item: l.slug, cta: "reserve", label: "Reserve", context: l.title, variant: "secondary" })}
        </div>
      </div>
    </article>`).join("");
}

function renderGrid(animate) {
  const grid = $("#grid");
  const paint = () => { grid.innerHTML = gridHtml(); refreshCtaLinks(); };
  if (!animate || reducedMotion) { paint(); return; }
  grid.classList.add("is-fading");
  setTimeout(() => { paint(); grid.classList.remove("is-fading"); }, 240);
}

function renderOptions() {
  const ordered = state.order === "sm" ? [OPTIONS[1], OPTIONS[0]] : OPTIONS;
  $("#models").innerHTML = ordered.map((o) => `
    <article class="model">
      <h3 class="model-name">${esc(o.name)}</h3>
      <p class="model-lead">${esc(o.body)}</p>
      ${o.detail ? `<p class="model-detail">${esc(o.detail)}</p>` : ""}
      <div class="model-price">
        <span class="price">${esc(o.price)}</span>
        <p class="model-note">${esc(o.note)}</p>
      </div>
      ${ctaButton({ form: o.form, role: "seller", model: o.id, item: "", cta: o.ctaType, label: o.cta, context: o.name, order: state.order })}
    </article>`).join("");
}

function applySegment(animate) {
  const seg = SEGMENTS[state.segment];
  document.querySelectorAll(".segment-btn").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.segment === state.segment)));

  const paint = () => {
    $("#segment-line").textContent = seg.line;
    const flow = $("#flow");
    seg.order.forEach((id) => flow.appendChild(document.getElementById(id)));
    refreshCtaLinks();
  };
  if (!animate || reducedMotion) { paint(); return; }
  $("#segment-line").classList.add("is-fading");
  $("#flow").classList.add("is-fading");
  setTimeout(() => {
    paint();
    $("#segment-line").classList.remove("is-fading");
    $("#flow").classList.remove("is-fading");
  }, 240);
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initGA();
  renderFilters();
  renderOptions();
  renderGrid(false);
  applySegment(false);

  document.querySelector(".segment").addEventListener("click", (e) => {
    const btn = e.target.closest(".segment-btn");
    if (!btn || btn.dataset.segment === state.segment) return;
    state.segment = btn.dataset.segment;
    state.segmentSource = "toggle";
    applySegment(true);
  });

  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn || btn.dataset.cat === state.category) return;
    state.category = btn.dataset.cat;
    renderFilters();
    renderGrid(true);
  });

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-cta]");
    if (!a) return;
    a.href = buildFormUrl(a.dataset.form, ctaParams(a)); // always current
    trackClick(a);
  });

  const topbar = $("#topbar");
  const onScroll = () => topbar.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
