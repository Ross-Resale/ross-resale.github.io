/* =========================================================================
   CONFIG — edit this block, then redeploy. Nothing else needs to change.
   ========================================================================= */
const CONFIG = {
  // Google Form links (the "Send > link" URL, ending in /viewform).
  forms: {
    marketplace: "https://docs.google.com/forms/d/e/REPLACE_ME_MARKETPLACE/viewform",
    storage:     "https://docs.google.com/forms/d/e/REPLACE_ME_STORAGE/viewform",
    apartment:   "https://docs.google.com/forms/d/e/REPLACE_ME_APARTMENT/viewform",
    reserve:     "https://docs.google.com/forms/d/e/REPLACE_ME_RESERVE/viewform",
  },

  // Optional prefill entry IDs, per form. Leave "" to skip a field.
  // Example: source: "entry.123456789"  -> appends &entry.123456789=ross-resale-site
  // Each form has its own IDs, so fill these in per form (see README).
  entryIds: {
    marketplace: { source: "", model: "", item: "" },
    storage:     { source: "", model: "", item: "" },
    apartment:   { source: "", model: "", item: "" },
    reserve:     { source: "", model: "", item: "" },
  },

  // Google Analytics 4 measurement ID, e.g. "G-ABC123XYZ". Leave "" to disable GA.
  ga4Id: "",

  source: "ross-resale-site",
};
/* ========================================================================= */

/* Line icons: 24px grid, 1.5px stroke, currentColor (see DESIGN.md > Shapes). */
const ICONS = {
  sofa:     '<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/><path d="M5 18v2M19 18v2"/>',
  desk:     '<rect x="8" y="3" width="8" height="5" rx="1"/><path d="M12 8v1M3 9h18M5 9v11M19 9v11M14 9v6h5"/>',
  bed:      '<path d="M3 5v14M21 19v-5a3 3 0 0 0-3-3h-8v5M3 16h18"/><circle cx="6.5" cy="12.5" r="1.5"/>',
  coat:     '<path d="M9 3l3 3 3-3 4 2 2 7-3 1v8H6v-8l-3-1 2-7z"/><path d="M12 6v15"/>',
  skis:     '<path d="M5 21L15 3M10 21L20 3"/><path d="M3 21h4M8 21h4"/>',
  boot:     '<path d="M6 3h7v8l5 2.5A3 3 0 0 1 20 16v3H6z"/><path d="M6 15h14"/>',
  monitor:  '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4M8 20h8"/>',
  purifier: '<rect x="6" y="3" width="12" height="18" rx="3"/><circle cx="12" cy="12" r="3"/><path d="M9.5 6.5h5"/>',
  pot:      '<path d="M4 10h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M2 10h2M20 10h2M9.5 6.5c0-1 1-1.2 1-2.5M13.5 6.5c0-1 1-1.2 1-2.5"/>',
  plate:    '<circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="3"/><path d="M3 4v16M21 4c-1.5 1-2 3-2 6h2v10"/>',
  bike:     '<circle cx="6" cy="16" r="3.5"/><circle cx="18" cy="16" r="3.5"/><path d="M6 16l4-8h5l3 8M10 8l3 8H6M8.5 6h3M15 8l-1-3h2"/>',
  rug:      '<rect x="4" y="6" width="16" height="12" rx="1"/><rect x="7.5" y="9" width="9" height="6" rx=".5"/><path d="M4 9H2M4 12H2M4 15H2M20 9h2M20 12h2M20 15h2"/>',
};
const icon = (name) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

const LISTINGS = [
  { slug: "sofa-3-seat",     title: "Three-seat sofa, grey",            price: 220, was: 900, cat: "furniture",   icon: "sofa" },
  { slug: "standing-desk",   title: "Electric standing desk",           price: 180, was: 450, cat: "furniture",   icon: "desk" },
  { slug: "queen-bed-frame", title: "Queen bed frame and mattress",     price: 250, was: 900, cat: "furniture",   icon: "bed" },
  { slug: "down-parka-m",    title: "Down winter parka, men's M",       price: 150, was: 700, cat: "winter",      icon: "coat" },
  { slug: "ski-set-boots",   title: "Skis, boots and poles",            price: 200, was: 650, cat: "winter",      icon: "skis" },
  { slug: "snow-boots-w8",   title: "Insulated snow boots, women's 8",  price: 45,  was: 160, cat: "winter",      icon: "boot" },
  { slug: "monitor-27-4k",   title: "27-inch 4K monitor",               price: 140, was: 330, cat: "electronics", icon: "monitor" },
  { slug: "air-purifier",    title: "HEPA air purifier",                price: 60,  was: 150, cat: "electronics", icon: "purifier" },
  { slug: "cookware-set",    title: "Cookware and knife set",           price: 70,  was: 220, cat: "kitchen",     icon: "pot" },
  { slug: "kitchen-starter", title: "Kitchen starter kit",              price: 55,  was: 180, cat: "kitchen",     icon: "plate", tag: "Bundle" },
  { slug: "commuter-bike",   title: "Hybrid commuter bike with lock",   price: 160, was: 520, cat: "other",       icon: "bike" },
  { slug: "area-rug-5x8",    title: "5×8 rug and floor lamp",           price: 65,  was: 210, cat: "other",       icon: "rug",   tag: "Bundle" },
];

const CATEGORIES = [
  { id: "all",         label: "All" },
  { id: "furniture",   label: "Furniture" },
  { id: "winter",      label: "Winter gear" },
  { id: "kitchen",     label: "Kitchen" },
  { id: "electronics", label: "Electronics" },
  { id: "other",       label: "Other" },
];

const MODELS = [
  {
    id: "marketplace",
    name: "Pre-arrival marketplace",
    desc: "Browse what MBA2s are selling and reserve it before you land. Sellers handle their own storage.",
    facts: ["Reserve online, pay at pickup", "Ross buyers and sellers only", "Pick up at orientation"],
    price: "10% fee",
    note: "Paid by the buyer. Free to list.",
  },
  {
    id: "storage",
    name: "Full-service storage",
    desc: "We pick up your things in May, store them over the summer, sell them and hand them off in August.",
    facts: ["One pickup from your apartment", "Stored over the summer", "We photograph, price and sell"],
    price: "$49 + 20%",
    note: "Pickup fee, plus 20% of the sale price.",
  },
  {
    id: "apartment",
    name: "Whole-apartment transfer",
    desc: "Buy or sell a complete furnished setup as one bundle. Move in with everything already there.",
    facts: ["Furniture, kitchen and essentials", "One seller, one buyer", "Stays in place, no moving"],
    price: "About $1,500",
    note: "Typical one-bedroom setup. $99 listing fee for sellers.",
  },
];

/* ---------- Tracking helpers ---------- */
function buildFormUrl(formKey, params) {
  const base = CONFIG.forms[formKey];
  const url = new URL(base);
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

function trackClick(data) {
  if (typeof window.gtag !== "function") return;
  try {
    window.gtag("event", "cta_click", {
      cta: data.cta,
      model: data.model,
      item: data.item || "(none)",
      transport_type: "beacon",
    });
  } catch (e) { /* ignore */ }
}

/* ---------- Rendering ---------- */
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const catLabel = (id) => (CATEGORIES.find((c) => c.id === id) || {}).label || id;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function ctaLink({ formKey, model, item, cta, label, extraLabel }) {
  const href = buildFormUrl(formKey, { source: CONFIG.source, model, item });
  const aria = extraLabel ? ` aria-label="${esc(label + ": " + extraLabel)}"` : "";
  return `<a class="btn btn-primary btn-block" href="${esc(href)}" target="_blank" rel="noopener"${aria}
            data-cta="${esc(cta)}" data-model="${esc(model)}" data-item="${esc(item || "")}">${esc(label)}</a>`;
}

function renderFilters(active) {
  $("#filters").innerHTML = CATEGORIES.map((c) =>
    `<button type="button" class="filter" data-cat="${c.id}" aria-pressed="${c.id === active}">${esc(c.label)}</button>`
  ).join("");
}

function gridHtml(active) {
  const items = LISTINGS.filter((l) => active === "all" || l.cat === active);
  if (!items.length) return `<p class="empty">Nothing in this category yet.</p>`;
  return items.map((l) => `
    <article class="card">
      <div class="tile tile-${l.cat}">${icon(l.icon)}</div>
      <div class="card-body">
        <p class="card-cat">${esc(catLabel(l.cat))}</p>
        <h3 class="card-title">${esc(l.title)}</h3>
        <div class="card-price">
          <span class="price">$${l.price}</span>
          <span class="price-was">about $${l.was} new</span>
          ${l.tag ? `<span class="tag">${esc(l.tag)}</span>` : ""}
        </div>
        <p class="card-meta">MBA2 seller · Available Aug pickup</p>
        <div class="card-actions">
          ${ctaLink({ formKey: "reserve", model: "marketplace", item: l.slug, cta: "reserve", label: "Reserve", extraLabel: l.title })}
        </div>
      </div>
    </article>`).join("");
}

function renderGrid(active, animate) {
  const grid = $("#grid");
  if (!animate || reducedMotion) { grid.innerHTML = gridHtml(active); return; }
  grid.classList.add("is-fading");
  setTimeout(() => {
    grid.innerHTML = gridHtml(active);
    grid.classList.remove("is-fading");
  }, 240);
}

function renderModels() {
  $("#models").innerHTML = MODELS.map((m) => `
    <article class="model">
      <h3 class="model-name">${esc(m.name)}</h3>
      <p class="model-desc">${esc(m.desc)}</p>
      <ul class="facts">${m.facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
      <div class="model-price">
        <span class="price">${esc(m.price)}</span>
        <p class="model-note">${esc(m.note)}</p>
      </div>
      ${ctaLink({ formKey: m.id, model: m.id, item: "", cta: "waitlist", label: "Join the waitlist", extraLabel: m.name })}
    </article>`).join("");
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
  let active = "all";
  renderFilters(active);
  renderGrid(active, false);
  renderModels();

  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn || btn.dataset.cat === active) return;
    active = btn.dataset.cat;
    renderFilters(active);
    renderGrid(active, true);
  });

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-cta]");
    if (!a) return;
    trackClick({ cta: a.dataset.cta, model: a.dataset.model, item: a.dataset.item });
    if (isPlaceholder(a.href)) {
      e.preventDefault();
      toast("This form isn't connected yet.");
      console.info("[Ross Resale] Add the Google Form URL for '" + a.dataset.cta + "/" + a.dataset.model + "' in CONFIG (app.js).");
    }
  });

  const topbar = $("#topbar");
  const onScroll = () => topbar.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
