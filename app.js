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

const LISTINGS = [
  { slug: "sofa-3-seat",        title: "3-seat sofa, grey fabric",       price: 220, was: 899, cat: "furniture",   emoji: "🛋️" },
  { slug: "standing-desk",      title: "Electric standing desk",         price: 180, was: 450, cat: "furniture",   emoji: "🧑‍💻" },
  { slug: "queen-bed-frame",    title: "Queen bed frame + mattress",     price: 250, was: 900, cat: "furniture",   emoji: "🛏️" },
  { slug: "down-parka-m",       title: "Down winter parka (men's M)",    price: 150, was: 700, cat: "winter",      emoji: "🧥" },
  { slug: "ski-set-boots",      title: "Skis + boots + poles set",       price: 200, was: 650, cat: "winter",      emoji: "🎿" },
  { slug: "snow-boots-w8",      title: "Insulated snow boots (W 8)",     price: 45,  was: 160, cat: "winter",      emoji: "🥾" },
  { slug: "monitor-27-4k",      title: "27\" 4K monitor",                price: 140, was: 330, cat: "electronics", emoji: "🖥️" },
  { slug: "air-purifier",       title: "HEPA air purifier",              price: 60,  was: 150, cat: "electronics", emoji: "🌬️" },
  { slug: "cookware-set",       title: "10-piece cookware + knife set",  price: 70,  was: 220, cat: "kitchen",     emoji: "🍳" },
  { slug: "kitchen-starter",    title: "Kitchen starter kit (dishes, glasses, utensils)", price: 55, was: 180, cat: "kitchen", emoji: "🍽️" },
  { slug: "commuter-bike",      title: "Hybrid commuter bike + lock",    price: 160, was: 520, cat: "other",       emoji: "🚲" },
  { slug: "area-rug-5x8",       title: "5x8 area rug + floor lamp",      price: 65,  was: 210, cat: "other",       emoji: "🧶" },
];

const CATEGORIES = [
  { id: "all",         label: "All" },
  { id: "furniture",   label: "Furniture" },
  { id: "winter",      label: "Winter Gear" },
  { id: "kitchen",     label: "Kitchen" },
  { id: "electronics", label: "Electronics" },
  { id: "other",       label: "Other" },
];

const MODELS = [
  {
    id: "marketplace",
    icon: "🛒",
    title: "Pre-arrival marketplace",
    desc: "Browse MBA2 listings from anywhere and reserve before you land in Ann Arbor. Sellers handle their own storage.",
    bullets: ["Reserve online, pay at pickup", "Ross-verified buyers and sellers", "Pick up at orientation"],
    price: "10% fee",
    note: "Paid by the buyer. Free to list.",
  },
  {
    id: "storage",
    icon: "📦",
    title: "Storage + resale, done for you",
    desc: "We pick up your stuff in May, store it over the summer, list it, sell it and hand it off in August.",
    bullets: ["One pickup from your apartment", "Climate-controlled summer storage", "We photograph, price and sell"],
    price: "$49 pickup + 20%",
    note: "20% of the sale price. Unsold items donated.",
  },
  {
    id: "apartment",
    icon: "🏠",
    title: "Whole-apartment transfer",
    desc: "Buy or sell a complete furnished apartment setup as one bundle. Move in with everything already there.",
    bullets: ["Furniture, kitchen and essentials", "Matched with a single buyer", "Stays in place, no moving"],
    price: "$1,500 bundle",
    note: "Typical 1BR setup. $99 flat listing fee for sellers.",
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

function ctaLink({ formKey, model, item, cta, label, cls }) {
  const href = buildFormUrl(formKey, { source: CONFIG.source, model, item });
  return `<a class="btn ${cls}" href="${esc(href)}" target="_blank" rel="noopener"
            data-cta="${esc(cta)}" data-model="${esc(model)}" data-item="${esc(item || "")}">${esc(label)}</a>`;
}

function renderFilters(active) {
  $("#filters").innerHTML = CATEGORIES.map((c) =>
    `<button type="button" class="chip" data-cat="${c.id}" aria-pressed="${c.id === active}">${esc(c.label)}</button>`
  ).join("");
}

function renderGrid(active) {
  const items = LISTINGS.filter((l) => active === "all" || l.cat === active);
  $("#grid").innerHTML = items.length ? items.map((l) => `
    <article class="card">
      <div class="card-photo bg-${l.cat}" role="img" aria-label="${esc(l.title)}">
        <span class="tag">${esc(catLabel(l.cat))}</span>${l.emoji}
      </div>
      <div class="card-body">
        <div class="card-title">${esc(l.title)}</div>
        <div class="card-price">$${l.price}<s>$${l.was} new</s></div>
        <div class="card-meta">Seller: MBA2</div>
        <div class="card-avail">✓ Available Aug pickup</div>
        ${ctaLink({ formKey: "reserve", model: "marketplace", item: l.slug, cta: "reserve", label: "Reserve", cls: "btn-navy btn-block" })}
      </div>
    </article>`).join("") : `<p class="empty">No listings in this category yet.</p>`;
}

function renderModels() {
  $("#models-grid").innerHTML = MODELS.map((m) => `
    <article class="model">
      <div class="model-icon" aria-hidden="true">${m.icon}</div>
      <h3>${esc(m.title)}</h3>
      <p>${esc(m.desc)}</p>
      <ul>${m.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      <div class="price">
        <div class="price-big">${esc(m.price)}</div>
        <div class="price-note">${esc(m.note)}</div>
      </div>
      ${ctaLink({ formKey: m.id, model: m.id, item: "", cta: "waitlist", label: "Join waitlist", cls: "btn-maize" })}
    </article>`).join("");
}

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initGA();
  let active = "all";
  renderFilters(active);
  renderGrid(active);
  renderModels();

  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    active = btn.dataset.cat;
    renderFilters(active);
    renderGrid(active);
  });

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-cta]");
    if (!a) return;
    trackClick({ cta: a.dataset.cta, model: a.dataset.model, item: a.dataset.item });
    if (isPlaceholder(a.href)) {
      e.preventDefault();
      toast("Form not connected yet. Add the Google Form URL in CONFIG (app.js).");
    }
  });
});
