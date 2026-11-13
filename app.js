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

/* Line icons: 24px grid, 1.5px stroke, currentColor (see DESIGN.md > Shapes). */
const ICONS = {
  sofa:      '<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/><path d="M5 18v2M19 18v2"/>',
  desk:      '<rect x="8" y="3" width="8" height="5" rx="1"/><path d="M12 8v1M3 9h18M5 9v11M19 9v11M14 9v6h5"/>',
  shelf:     '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M5 9h14M5 15h14M8 5.5v3M10 5.5v3M14 11v3M16.5 17v2.5"/>',
  monitor:   '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4M8 20h8"/>',
  printer:   '<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>',
  pot:       '<path d="M4 10h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M2 10h2M20 10h2M9.5 6.5c0-1 1-1.2 1-2.5M13.5 6.5c0-1 1-1.2 1-2.5"/>',
  coffee:    '<path d="M6 3h12v4H6zM6 7v14h12"/><path d="M9 13h6v5H9z"/><path d="M12 7v3"/>',
  purifier:  '<rect x="6" y="3" width="12" height="18" rx="3"/><circle cx="12" cy="12" r="3"/><path d="M9.5 6.5h5"/>',
  rug:       '<rect x="4" y="6" width="16" height="12" rx="1"/><rect x="7.5" y="9" width="9" height="6" rx=".5"/><path d="M4 9H2M4 12H2M4 15H2M20 9h2M20 12h2M20 15h2"/>',
  bike:      '<circle cx="6" cy="16" r="3.5"/><circle cx="18" cy="16" r="3.5"/><path d="M6 16l4-8h5l3 8M10 8l3 8H6M8.5 6h3M15 8l-1-3h2"/>',
  skis:      '<path d="M5 21L15 3M10 21L20 3"/><path d="M3 21h4M8 21h4"/>',
  coat:      '<path d="M9 3l3 3 3-3 4 2 2 7-3 1v8H6v-8l-3-1 2-7z"/><path d="M12 6v15"/>',
};
const icon = (name) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

/* when: "now" = in Ann Arbor now; "may" = available when the seller moves out in May */
const LISTINGS = [
  { slug: "sofa-3-seat",       title: "Three-seat sofa, grey",          price: 220, cat: "furniture",   icon: "sofa",     year: "MBA2", when: "may" },
  { slug: "standing-desk",     title: "Electric standing desk",         price: 180, cat: "furniture",   icon: "desk",     year: "MBA2", when: "may" },
  { slug: "bookshelf-5-shelf", title: "Five-shelf bookshelf",           price: 40,  cat: "furniture",   icon: "shelf",    year: "MBA1", when: "now" },
  { slug: "monitor-27-4k",     title: "27-inch 4K monitor",             price: 140, cat: "electronics", icon: "monitor",  year: "MBA2", when: "now" },
  { slug: "laser-printer",     title: "Wireless laser printer",         price: 60,  cat: "electronics", icon: "printer",  year: "MBA2", when: "may" },
  { slug: "cookware-set",      title: "Ten-piece cookware set",         price: 70,  cat: "kitchen",     icon: "pot",      year: "MBA2", when: "may" },
  { slug: "coffee-maker",      title: "Drip coffee maker",              price: 25,  cat: "kitchen",     icon: "coffee",   year: "MBA1", when: "now" },
  { slug: "air-purifier",      title: "HEPA air purifier",              price: 60,  cat: "home",        icon: "purifier", year: "MBA2", when: "now" },
  { slug: "rug-and-lamp",      title: "Area rug and floor lamp",        price: 65,  cat: "home",        icon: "rug",      year: "MBA2", when: "may" },
  { slug: "commuter-bike",     title: "Hybrid commuter bike with lock", price: 160, cat: "sports",      icon: "bike",     year: "MBA2", when: "now" },
  { slug: "ski-set-boots",     title: "Skis, boots and poles",          price: 200, cat: "sports",      icon: "skis",     year: "MBA2", when: "now" },
  { slug: "down-parka-m",      title: "Down parka, men's M",            price: 150, cat: "clothing",    icon: "coat",     year: "MBA1", when: "now" },
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
      <div class="tile tile-${l.cat}">${icon(l.icon)}</div>
      <div class="card-body">
        <p class="card-cat">${esc(catLabel(l.cat))}</p>
        <h3 class="card-title">${esc(l.title)}</h3>
        <div class="card-price"><span class="price">$${l.price}</span></div>
        <p class="card-meta">${esc(l.year)} seller · ${l.when === "may" ? "Available in May" : "In Ann Arbor now"}</p>
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
