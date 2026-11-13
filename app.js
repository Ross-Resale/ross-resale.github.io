/* =========================================================================
   CONFIG — edit this block, then redeploy. Nothing else needs to change.
   ========================================================================= */
const CONFIG = {
  // Google Form links (the "Send > link" URL, ending in /viewform).
  // "remind" is the "Remind me in March" link. It can point at its own form
  // or reuse one of the model forms (intent=remind tells them apart).
  forms: {
    marketplace: "https://docs.google.com/forms/d/e/REPLACE_ME_MARKETPLACE/viewform",
    storage:     "https://docs.google.com/forms/d/e/REPLACE_ME_STORAGE/viewform",
    apartment:   "https://docs.google.com/forms/d/e/REPLACE_ME_APARTMENT/viewform",
    reserve:     "https://docs.google.com/forms/d/e/REPLACE_ME_RESERVE/viewform",
    remind:      "https://docs.google.com/forms/d/e/REPLACE_ME_REMIND/viewform",
  },

  // Optional prefill entry IDs, per form. Leave "" to skip a field.
  // Example: segment: "entry.123456789"  -> appends &entry.123456789=mba2
  // Each form has its own IDs, so fill these in per form (see README).
  entryIds: {
    marketplace: { source: "", src: "", segment: "", model: "", item: "", intent: "" },
    storage:     { source: "", src: "", segment: "", model: "", item: "", intent: "" },
    apartment:   { source: "", src: "", segment: "", model: "", item: "", intent: "" },
    reserve:     { source: "", src: "", segment: "", model: "", item: "", intent: "" },
    remind:      { source: "", src: "", segment: "", model: "", item: "", intent: "" },
  },

  // Google Analytics 4 measurement ID, e.g. "G-ABC123XYZ". Leave "" to disable GA.
  ga4Id: "",

  source: "ross-resale-site",
  defaultSrc: "direct",
  defaultSegment: "mba2",
};
/* ========================================================================= */

/* Line icons: 24px grid, 1.5px stroke, currentColor (see DESIGN.md > Shapes). */
const ICONS = {
  coat:      '<path d="M9 3l3 3 3-3 4 2 2 7-3 1v8H6v-8l-3-1 2-7z"/><path d="M12 6v15"/>',
  boot:      '<path d="M6 3h7v8l5 2.5A3 3 0 0 1 20 16v3H6z"/><path d="M6 15h14"/>',
  skis:      '<path d="M5 21L15 3M10 21L20 3"/><path d="M3 21h4M8 21h4"/>',
  board:     '<path d="M5.5 19.5a2.5 2.5 0 0 1-1-3.4l9-11a2.5 2.5 0 0 1 3.9 3.1l-9 11a2.5 2.5 0 0 1-2.9.3z"/><path d="M9 13l2 1.5M12.5 9l2 1.5"/>',
  scraper:   '<path d="M4.5 19.5l7-7"/><path d="M9.5 10.5l4 4 6-6-4-4z"/><path d="M14 6l4 4"/>',
  heater:    '<rect x="4" y="5" width="16" height="13" rx="2"/><path d="M8 9v5M12 9v5M16 9v5M7 18v2M17 18v2"/>',
  humid:     '<path d="M7 9h10l-1 11H8z"/><path d="M12 3c-1 1.5-2 2.6-2 3.6a2 2 0 0 0 4 0c0-1-1-2.1-2-3.6z"/>',
  sofa:      '<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/><path d="M5 18v2M19 18v2"/>',
  desk:      '<rect x="8" y="3" width="8" height="5" rx="1"/><path d="M12 8v1M3 9h18M5 9v11M19 9v11M14 9v6h5"/>',
  bed:       '<path d="M3 5v14M21 19v-5a3 3 0 0 0-3-3h-8v5M3 16h18"/><circle cx="6.5" cy="12.5" r="1.5"/>',
};
const icon = (name) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

/* when: "now" = available to pick up now; "may" = example of a May move-out listing */
const LISTINGS = [
  { slug: "down-parka-m",       title: "Down parka, men's M",              price: 150, was: 700, cat: "outerwear", icon: "coat",    when: "now" },
  { slug: "long-down-coat-s",   title: "Long down coat, women's S",        price: 140, was: 550, cat: "outerwear", icon: "coat",    when: "now" },
  { slug: "snow-boots-w8",      title: "Insulated snow boots, women's 8",  price: 45,  was: 160, cat: "outerwear", icon: "boot",    when: "now" },
  { slug: "winter-boots-m11",   title: "Waterproof winter boots, men's 11", price: 55, was: 190, cat: "outerwear", icon: "boot",    when: "now" },
  { slug: "ski-set-boots",      title: "Skis, boots and poles",            price: 200, was: 650, cat: "snow",      icon: "skis",    when: "now" },
  { slug: "snowboard-bindings", title: "Snowboard with bindings",          price: 180, was: 520, cat: "snow",      icon: "board",   when: "now" },
  { slug: "snow-brush-scraper", title: "Car snow brush and ice scraper",   price: 10,  was: 30,  cat: "home",      icon: "scraper", when: "now" },
  { slug: "space-heater",       title: "Ceramic space heater",             price: 30,  was: 70,  cat: "home",      icon: "heater",  when: "now" },
  { slug: "humidifier",         title: "Cool-mist humidifier",             price: 25,  was: 60,  cat: "home",      icon: "humid",   when: "now" },
  { slug: "sofa-3-seat",        title: "Three-seat sofa, grey",            price: 220, was: 900, cat: "furniture", icon: "sofa",    when: "may" },
  { slug: "standing-desk",      title: "Electric standing desk",           price: 180, was: 450, cat: "furniture", icon: "desk",    when: "may" },
  { slug: "queen-bed-frame",    title: "Queen bed frame and mattress",     price: 250, was: 900, cat: "furniture", icon: "bed",     when: "may" },
];

const CATEGORIES = [
  { id: "all",       label: "All" },
  { id: "outerwear", label: "Coats and boots" },
  { id: "snow",      label: "Ski and snowboard" },
  { id: "home",      label: "Around the house" },
  { id: "furniture", label: "Furniture (May)" },
];
const TILE = { outerwear: "tile-winter", snow: "tile-snow", home: "tile-home", furniture: "tile-furniture" };

const MODELS = [
  {
    id: "marketplace",
    name: "Marketplace",
    lead: "List now. Sell to the incoming class before you leave.",
    facts: ["You set the price", "Incoming students reserve before they arrive", "You meet your buyer or use the May drop-off"],
    price: "10% of the sale",
    note: "Taken only when it sells. Free to list.",
  },
  {
    id: "storage",
    name: "Storage and resale",
    lead: "One drop-off. We store it, sell it, and send you the money.",
    facts: ["One drop-off in May", "We photograph, price and list it", "Paid out when it sells, after you've left"],
    price: "$15 per item + 25%",
    note: "Item fee at drop-off, 25% when it sells. Unsold items are donated.",
  },
  {
    id: "apartment",
    name: "Apartment transfer",
    lead: "Hand off your whole apartment setup to one incoming student.",
    facts: ["Furniture, kitchen and essentials together", "One buyer, one handoff", "Nothing to sort, pack or list item by item"],
    price: "10% of the sale",
    note: "Example: full 1BR setup, listed at $1,500.",
  },
];

const SEGMENTS = {
  mba2: {
    headline: 'You leave in May. Your <span class="mark">couch</span> doesn’t have to come with you.',
    lede: "Sell your things to the next Ross class with one drop-off in May. We hold them over the summer, and buyers collect in August.",
    order: ["waitlist", "listings"],
    actions: [
      { href: "#waitlist", label: "See the options", primary: true },
      { href: "#listings", label: "Browse winter gear" },
    ],
  },
  mba1: {
    headline: 'Next May, your <span class="mark">couch</span> doesn’t have to come with you.',
    lede: "Remember furnishing your place in August? Next year you're the seller. For now, here's winter gear from classmates.",
    order: ["listings", "waitlist"],
    actions: [
      { href: "#listings", label: "Browse winter gear", primary: true },
      { href: "#waitlist", label: "See how selling could work" },
    ],
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

function ctaParams(a) {
  return {
    source: CONFIG.source,
    src: state.src,
    segment: state.segment,
    model: a.dataset.model,
    item: a.dataset.item || "",
    intent: a.dataset.intent || "",
  };
}

/* Every CTA is a real link; its href is rebuilt whenever the segment changes. */
function refreshCtaLinks() {
  document.querySelectorAll("a[data-cta]").forEach((a) => {
    a.href = buildFormUrl(a.dataset.form, ctaParams(a));
  });
}

function isPlaceholder(url) {
  return /REPLACE_ME/.test(url);
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

function ctaLink({ form, model, item, cta, label, context }) {
  return `<a class="btn btn-primary btn-block" href="#" target="_blank" rel="noopener"
            aria-label="${esc(label + ": " + context)}"
            data-cta="${esc(cta)}" data-form="${esc(form)}" data-model="${esc(model)}" data-item="${esc(item || "")}">${esc(label)}</a>`;
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
      <div class="tile ${TILE[l.cat]}">${icon(l.icon)}</div>
      <div class="card-body">
        <p class="card-cat">${esc(l.when === "may" ? "Furniture" : catLabel(l.cat))}</p>
        <h3 class="card-title">${esc(l.title)}</h3>
        <div class="card-price">
          <span class="price">$${l.price}</span>
          <span class="price-was">about $${l.was} new</span>
          ${l.when === "may" ? `<span class="tag">May listing</span>` : ""}
        </div>
        <p class="card-meta">${l.when === "may" ? "MBA2 seller · Available in May" : "Classmate seller · In Ann Arbor now"}</p>
        <div class="card-actions">
          ${ctaLink({ form: "reserve", model: l.when === "may" ? "marketplace" : "none", item: l.slug, cta: "reserve", label: "Reserve", context: l.title })}
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

function renderModels() {
  $("#models").innerHTML = MODELS.map((m) => `
    <article class="model">
      <h3 class="model-name">${esc(m.name)}</h3>
      <p class="model-lead">${esc(m.lead)}</p>
      <ul class="facts">${m.facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
      <div class="model-price">
        <span class="price">${esc(m.price)}</span>
        <p class="model-note">${esc(m.note)}</p>
      </div>
      ${ctaLink({ form: m.id, model: m.id, item: "", cta: "waitlist", label: "Join the waitlist", context: m.name })}
    </article>`).join("");
}

function applySegment(animate) {
  const seg = SEGMENTS[state.segment];
  document.querySelectorAll(".segment-btn").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.segment === state.segment)));
  $("#hero-actions").innerHTML = seg.actions.map((a) =>
    a.primary
      ? `<a class="btn btn-primary" href="${a.href}">${esc(a.label)}</a>`
      : `<a class="link-quiet" href="${a.href}">${esc(a.label)}</a>`
  ).join("");

  const paint = () => {
    $("#hero-title").innerHTML = seg.headline;
    $("#hero-lede").textContent = seg.lede;
    const flow = $("#flow");
    seg.order.forEach((id) => flow.appendChild(document.getElementById(id)));
    refreshCtaLinks();
  };
  if (!animate || reducedMotion) { paint(); return; }
  $("#hero-title").classList.add("is-fading");
  $("#hero-lede").classList.add("is-fading");
  $("#flow").classList.add("is-fading");
  setTimeout(() => {
    paint();
    $("#hero-title").classList.remove("is-fading");
    $("#hero-lede").classList.remove("is-fading");
    $("#flow").classList.remove("is-fading");
  }, 240);
}

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2800);
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initGA();
  renderFilters();
  renderModels();
  renderGrid(false);
  applySegment(false);

  document.querySelector(".segment").addEventListener("click", (e) => {
    const btn = e.target.closest(".segment-btn");
    if (!btn || btn.dataset.segment === state.segment) return;
    state.segment = btn.dataset.segment;
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
    if (isPlaceholder(a.href)) {
      e.preventDefault();
      toast("This form isn't connected yet.");
      console.info("[Ross Resale] Add the Google Form URL for '" + a.dataset.form + "' in CONFIG (app.js).");
    }
  });

  const topbar = $("#topbar");
  const onScroll = () => topbar.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
