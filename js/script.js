/* =======================================================
   js/script.js
   All interactive behavior for the CoffeeBox Website:
   - dynamic products + search
   - lightbox gallery
   - accordion
   - enquiry form processing (dynamic response)
   - contact form -> mailto prefill
   - Leaflet interactive map
   ======================================================= */

/* ========= PRODUCTS DATA =========
   Keep this list updated if you add/remove images.
   Images should be in /images/ with exact filenames.
*/
const PRODUCTS = [
  { id: 'espresso', title: 'Espresso', price: 20, category: 'hot', img: 'images/expresso.jpg', alt: 'Small espresso shot in white cup' },
  { id: 'cappuccino', title: 'Cappuccino', price: 30, category: 'hot', img: 'images/latte.jpg', alt: 'Cappuccino with latte art' },
  { id: 'latte', title: 'Latte', price: 35, category: 'hot', img: 'images/latte.jpg', alt: 'Creamy latte with milk foam' },
  { id: 'iced-mocha', title: 'Iced Mocha', price: 40, category: 'cold', img: 'images/iced-mocha.jpg', alt: 'Iced mocha topped with chocolate' },
  { id: 'smoothie', title: 'Smoothie', price: 42, category: 'cold', img: 'images/smoothie.jpg', alt: 'Fresh fruit smoothie in cup' },
  { id: 'muffin', title: 'Muffin', price: 18, category: 'snack', img: 'images/muffin.jpg', alt: 'Fresh baked muffin' },
  { id: 'service', title: 'Coffee service', price: 150, category: 'service', img: 'images/coffee-service.jpg', alt: 'Coffee service setup for events' }
];

/* ========== Utility helpers ========== */
const qs = (sel) => document.querySelector(sel);
const qsa = (sel) => Array.from(document.querySelectorAll(sel));

/* ========== Render products on pages (index preview + products page) ========== */
function renderProducts(targetSelector, limit = 6) {
  const target = qs(targetSelector);
  if (!target) return;
  target.innerHTML = '';
  const productsToShow = PRODUCTS.slice(0, limit);
  productsToShow.forEach(prod => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <img loading="lazy" src="${prod.img}" alt="${prod.alt}">
      <h3>${prod.title}</h3>
      <p class="price">R${prod.price}</p>
      <div class="card-actions">
        <button class="btn view-btn" data-id="${prod.id}">View</button>
        <button class="btn add-btn" data-id="${prod.id}">Add</button>
      </div>
    `;
    target.appendChild(card);
  });
}

/* Render full list for products page with filters and search */
function renderProductsFull(listSelector, items = PRODUCTS) {
  const list = qs(listSelector);
  if (!list) return;
  list.innerHTML = '';
  items.forEach(prod => {
    const el = document.createElement('article');
    el.className = 'product-card';
    el.innerHTML = `
      <img loading="lazy" src="${prod.img}" alt="${prod.alt}" data-id="${prod.id}">
      <h3>${prod.title}</h3>
      <p class="price">R${prod.price}</p>
      <p class="desc">Category: ${prod.category}</p>
      <div class="card-actions">
        <button class="btn view-btn" data-id="${prod.id}">View</button>
        <button class="btn add-btn" data-id="${prod.id}">Add</button>
      </div>
    `;
    list.appendChild(el);
  });
  // attach listeners for view buttons to open lightbox
  qsa('.view-btn').forEach(b => b.addEventListener('click', (e) => {
    const id = e.currentTarget.dataset.id;
    openLightboxById(id);
  }));
}

/* ========== Search & Filter ========= */
function setupSearch() {
  const input = qs('#product-search');
  const filter = qs('#product-filter');
  if (!input || !filter) return;

  const handle = () => {
    const q = input.value.trim().toLowerCase();
    const cat = filter.value;
    const filtered = PRODUCTS.filter(p => {
      const matchQ = p.title.toLowerCase().includes(q) || (p.alt && p.alt.toLowerCase().includes(q));
      const matchCat = cat === 'all' ? true : p.category === cat;
      return matchQ && matchCat;
    });
    renderProductsFull('#products-list', filtered);
  };

  input.addEventListener('input', debounce(handle, 200));
  filter.addEventListener('change', handle);
}

/* ========== Debounce helper ========= */
function debounce(fn, wait=200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

/* ========== Lightbox functionality ========= */
let lightboxIndex = -1;
function openLightbox(index) {
  const lb = qs('#lightbox');
  const img = qs('#lightbox-image');
  const caption = qs('#lightbox-caption');
  const product = PRODUCTS[index];
  if (!product) return;
  img.src = product.img;
  img.alt = product.alt || product.title;
  caption.textContent = `${product.title} — R${product.price}`;
  lb.setAttribute('aria-hidden', 'false');
  lightboxIndex = index;
}
function closeLightbox(){
  const lb = qs('#lightbox');
  lb.setAttribute('aria-hidden', 'true');
  qs('#lightbox-image').src = '';
  lightboxIndex = -1;
}
function prevLightbox(){
  if (lightboxIndex <= 0) lightboxIndex = PRODUCTS.length - 1; else lightboxIndex--;
  openLightbox(lightboxIndex);
}
function nextLightbox(){
  if (lightboxIndex >= PRODUCTS.length - 1) lightboxIndex = 0; else lightboxIndex++;
  openLightbox(lightboxIndex);
}
function openLightboxById(id) {
  const idx = PRODUCTS.findIndex(p => p.id === id);
  if (idx >= 0) openLightbox(idx);
}
function setupLightboxEvents(){
  const lb = qs('#lightbox');
  if (!lb) return;
  qs('#lightbox-close').addEventListener('click', closeLightbox);
  qs('#lightbox-prev').addEventListener('click', prevLightbox);
  qs('#lightbox-next').addEventListener('click', nextLightbox);
  // keyboard support
  document.addEventListener('keyup', (e) => {
    if (lb.getAttribute('aria-hidden') === 'false') {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    }
  });
  // close click outside
  lb.addEventListener('click', function(e){
    if (e.target === lb) closeLightbox();
  });
}

/* ========== Accordion for services ========= */
function setupAccordion() {
  const triggers = qsa('.accordion-trigger');
  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // close all first for single-open behavior
      triggers.forEach(t=> {
        t.setAttribute('aria-expanded', 'false');
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.style.display = 'none';
      });
      // open this if previously closed
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        const panel = document.getElementById(btn.getAttribute('aria-controls'));
        if (panel) panel.style.display = 'block';
      }
    });
  });
}

/* ========== Enquiry form (client-side validation + dynamic response) ========= */
function setupEnquiryForm() {
  const form = qs('#enquiry-form');
  const response = qs('#enquiry-response');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearFormErrors(form);
    const data = new FormData(form);
    const name = data.get('name')?.trim();
    const email = data.get('email')?.trim();
    const type = data.get('type') || '';
    const people = parseInt(data.get('people') || '0', 10);
    const message = data.get('message')?.trim();

    // simple validation
    let hasError = false;
    if (!name) { showError('#e-name', 'Please enter your name'); hasError = true; }
    if (!validateEmail(email)) { showError('#e-email', 'Please provide a valid email'); hasError = true; }
    if (!type) { showError('#e-type', 'Please select the enquiry type'); hasError = true; }
    if (type === 'catering' && (!people || people < 1)) { showError('#e-people', 'Enter number of people for catering'); hasError = true; }

    if (hasError) return;

    // produce a dynamic response (estimate) — for marking: shows DOM manipulation + logic
    let estimate = '';
    if (type === 'catering') {
      // sample pricing: R25 per person for coffee+snack
      const perPerson = 25;
      const cost = people * perPerson;
      estimate = `Estimated cost for ${people} people: R${cost}. (This is a preliminary estimate.)`;
    } else if (type === 'product') {
      estimate = 'We will check product availability and reply within 24 hours.';
    } else if (type === 'volunteer' || type === 'sponsor') {
      estimate = 'Thank you for your interest — our team will review your enquiry and follow up.';
    } else {
      estimate = 'Thank you — we will get back to you soon.';
    }

    // show the response
    response.innerHTML = `<strong>Thanks ${escapeHtml(name)}.</strong> ${escapeHtml(estimate)} <div class="small">We will use ${escapeHtml(email)} to contact you.</div>`;
    form.reset();
  });
}

/* ========== Contact form (creates mailto link) ========= */
function setupContactForm() {
  const form = qs('#contact-form');
  const resp = qs('#contact-response');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearFormErrors(form);
    const data = new FormData(form);
    const name = data.get('name')?.trim();
    const email = data.get('email')?.trim();
    const type = data.get('type');
    const message = data.get('message')?.trim();

    let hasError = false;
    if (!name) { showError('#c-name', 'Please enter your name'); hasError = true; }
    if (!validateEmail(email)) { showError('#c-email', 'Please provide a valid email'); hasError = true; }
    if (!type) { showError('#c-type', 'Please select message type'); hasError = true; }
    if (!message || message.length < 5) { showError('#c-message', 'Please write a short message'); hasError = true; }

    if (hasError) return;

    // Create mailto link
    const recipient = 'info@coffeeboxsa.co.za';
    const subject = encodeURIComponent(`[Website Contact] ${type} - ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nType: ${type}\n\nMessage:\n${message}`);
    const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // for marking: show a friendly message and provide the mailto link for user to click.
    resp.innerHTML = `<p>Click the button below to open your email and send the message to CoffeeBox. Or copy/paste this link in your browser: <a href="${mailto}">Open Mail</a></p><p><a class="btn" href="${mailto}">Open email client</a></p>`;
    form.reset();
  });
}

/* ========== Form helpers ========== */
function showError(selector, message) {
  const el = qs(selector);
  if (!el) return;
  el.classList.add('input-error');
  // create or show error text
  let err = el.parentNode.querySelector('.error-message');
  if (!err) {
    err = document.createElement('div');
    err.className = 'error-message';
    el.parentNode.appendChild(err);
  }
  err.textContent = message;
}
function clearFormErrors(form) {
  form.querySelectorAll('.input-error').forEach(i=>i.classList.remove('input-error'));
  form.querySelectorAll('.error-message').forEach(e=>e.remove());
}
function validateEmail(email) {
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function escapeHtml(unsafe) {
  return (unsafe || '').replace(/[&<"']/g, function(m) { return ({'&':'&amp;','<':'&lt;','"':'&quot;',"'":"&#039;"}[m]); });
}

/* ========== Testimonials (DOM injection example) ========= */
function renderTestimonials() {
  const tWrap = qs('#testimonials');
  if (!tWrap) return;
  const items = [
    { name: 'S. Nkosi', text: 'Fast service and the coffee is always hot!' },
    { name: 'M. Patel', text: 'Love the drive-thru. Perfect for mornings.' },
  ];
  items.forEach(it => {
    const div = document.createElement('div');
    div.className = 'testimonial';
    div.innerHTML = `<strong>${it.name}</strong><p>${it.text}</p>`;
    tWrap.appendChild(div);
  });
}

/* ========== Leaflet Map init (Contact page) ========= */
function initLeaflet() {
  // If Leaflet library not loaded, skip
  if (typeof L === 'undefined') return;
  const mapEl = qs('#leaflet-map');
  if (!mapEl) return;
  // Coordinates for Athlone Circle, Pietermaritzburg (approx)
  const lat = -29.6033;
  const lng = 30.3969;
  const map = L.map('leaflet-map', { scrollWheelZoom: false }).setView([lat, lng], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  const marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup('<strong>CoffeeBox - Athlone Circle</strong><br>Drive-thru coffee').openPopup();
}

/* ========== Utility to attach "Add" actions (placeholder) ========= */
function setupAddButtons() {
  qsa('.add-btn').forEach(b => {
    b.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return;
      // minimal UX: show toast-like response (here we reuse enquiry-response area if present)
      const area = qs('#enquiry-response') || qs('#contact-response');
      if (area) {
        area.innerHTML = `<strong>${p.title}</strong> added to cart (demo). Price: R${p.price}`;
      } else {
        alert(`${p.title} added (demo). Price: R${p.price}`);
      }
    });
  });
}

/* ========== Helper to wire up initial UI ========= */
function initUI() {
  // render previews on index
  renderProducts('#menu-preview-list', 4);

  // render full products on products page
  renderProductsFull('#products-list', PRODUCTS);

  // lightbox
  setupLightboxEvents();

  // search filter
  setupSearch();

  // accordion
  setupAccordion();

  // forms
  setupEnquiryForm();
  setupContactForm();

  // testimonials
  renderTestimonials();

  // add events for 'add' buttons (for preview and list)
  setupAddButtons();

  // initialize leaflet after DOM loaded
  initLeaflet();
}

/* Wait for DOM content */
document.addEventListener('DOMContentLoaded', initUI);
