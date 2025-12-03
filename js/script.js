/* js/script.js
   Handles:
   - dynamic product list & search
   - lightbox modal gallery
   - accordion on services page
   - Leaflet map init (contact page)
   - enquiry + contact form validation and simulated submit
*/

document.addEventListener('DOMContentLoaded', () => {
    /* ---------- PRODUCTS DATA ---------- */
    const products = [
      { id: 1, title: "Espresso", file: "expresso.jpg", price: "R20", alt: "Shot of espresso in a small cup" },
      { id: 2, title: "Cappuccino", file: "latte.jpg", price: "R30", alt: "Cappuccino with latte art" },
      { id: 3, title: "Iced Mocha", file: "iced-mocha.jpg", price: "R40", alt: "Iced mocha in a tall glass" },
      { id: 4, title: "Latte", file: "latte.jpg", price: "R35", alt: "Creamy latte with foam" },
      { id: 5, title: "Muffin", file: "muffin.jpg", price: "R18", alt: "Blueberry muffin on a plate" },
      { id: 6, title: "Smoothie", file: "smoothie.jpg", price: "R42", alt: "Fruit smoothie in a jar" },
      { id: 7, title: "Coffee Service", file: "coffee-service.jpg", price: "Varies", alt: "Catering coffee service setup" }
    ];
  
    /* ---------- UTILS ---------- */
    const $ = (sel, ctx=document) => ctx.querySelector(sel);
    const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
  
    /* ---------- PRODUCT GALLERY (products.html) ---------- */
    const productsContainer = $('#products-grid');
    const searchInput = $('#product-search');
  
    function renderProducts(list) {
      if (!productsContainer) return;
      productsContainer.innerHTML = '';
      list.forEach(p => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = `
          <button class="product-thumb" data-id="${p.id}" aria-label="Open ${p.title} image">
            <img src="images/${p.file}" alt="${p.alt}" loading="lazy">
          </button>
          <div class="product-info">
            <h3>${p.title}</h3>
            <p class="price">${p.price}</p>
            <button class="btn small add-enquiry" data-id="${p.id}">Enquire</button>
          </div>
        `;
        productsContainer.appendChild(card);
      });
      attachProductListeners();
    }
  
    function attachProductListeners() {
      $$('.product-thumb').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = +btn.dataset.id;
          openLightbox(id);
        });
      });
      $$('.add-enquiry').forEach(b => b.addEventListener('click', addProductToEnquiry));
    }
  
    function addProductToEnquiry(e) {
      const id = +this.dataset.id || +e.currentTarget.dataset.id;
      const p = products.find(x => x.id === id);
      const name = p ? p.title : '';
      // If enquiry form exists, prefill message
      const nameInput = $('#enquiry-name');
      const message = $('#enquiry-message');
      if (nameInput && message) {
        message.value = `I would like to enquire about: ${name} (${p.price}). Please provide availability and pricing.`;
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
        nameInput.focus();
      } else {
        // fallback: show a small toast
        flash(`Added ${name} to enquiry form (open enquiry page to submit).`);
      }
    }
  
    function flash(msg, timeout=2500) {
      let el = $('#flash-msg');
      if (!el) {
        el = document.createElement('div');
        el.id = 'flash-msg';
        el.setAttribute('role','status');
        el.className = 'flash';
        document.body.appendChild(el);
      }
      el.textContent = msg;
      el.style.opacity = 1;
      setTimeout(()=> el.style.opacity = 0, timeout);
    }
  
    if (productsContainer) renderProducts(products);
  
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const q = e.target.value.trim().toLowerCase();
        const filtered = products.filter(p => p.title.toLowerCase().includes(q));
        renderProducts(filtered);
      });
    }
  
    /* ---------- LIGHTBOX ---------- */
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('aria-hidden','true');
    lightbox.innerHTML = `
      <div class="lightbox-inner" role="dialog" aria-modal="true">
        <button class="lb-close" aria-label="Close">×</button>
        <img class="lb-img" alt="">
        <div class="lb-caption"></div>
        <div class="lb-controls">
          <button class="lb-prev" aria-label="Previous">‹</button>
          <button class="lb-next" aria-label="Next">›</button>
        </div>
      </div>
    `;
    document.body.appendChild(lightbox);
  
    let currentIndex = 0;
    function openLightbox(id) {
      const idx = products.findIndex(p => p.id === id);
      if (idx === -1) return;
      currentIndex = idx;
      showLightbox();
    }
  
    function showLightbox() {
      const p = products[currentIndex];
      $('.lb-img', lightbox).src = `images/${p.file}`;
      $('.lb-img', lightbox).alt = p.alt;
      $('.lb-caption', lightbox).textContent = `${p.title} — ${p.price}`;
      lightbox.setAttribute('aria-hidden','false');
      lightbox.classList.add('open');
      // focus the close button for accessibility
      $('.lb-close', lightbox).focus();
    }
  
    function closeLightbox() {
      lightbox.setAttribute('aria-hidden','true');
      lightbox.classList.remove('open');
    }
  
    $('.lb-close', lightbox).addEventListener('click', closeLightbox);
    $('.lb-next', lightbox).addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % products.length; showLightbox();
    });
    $('.lb-prev', lightbox).addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + products.length) % products.length; showLightbox();
    });
  
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  
    document.addEventListener('keydown', (e) => {
      if (lightbox.classList.contains('open')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % products.length; showLightbox(); }
        if (e.key === 'ArrowLeft') { currentIndex = (currentIndex -1 + products.length) % products.length; showLightbox(); }
      }
    });
  
    /* ---------- ACCORDION (services.html) ---------- */
    $$('.accordion-toggle').forEach(btn => {
      btn.addEventListener('click', function () {
        const panel = this.nextElementSibling;
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        panel.hidden = expanded;
      });
    });
  
    /* ---------- LEAFLET MAP (contact.html) ---------- */
    if (typeof L !== 'undefined') {
      const mapEl = $('#map');
      if (mapEl) {
        // coordinates for Athlone Circle, Pietermaritzburg (approx)
        const lat = -29.6033, lng = 30.3969;
        const map = L.map('map').setView([lat, lng], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap'
        }).addTo(map);
        L.marker([lat,lng]).addTo(map).bindPopup('CoffeeBox — Athlone Circle').openPopup();
      }
    }
  
    /* ---------- FORMS: ENQUIRY + CONTACT ---------- */
    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    // Enquiry form
    const enquiryForm = $('#enquiry-form');
    if (enquiryForm) {
      enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = $('#enquiry-name').value.trim();
        const email = $('#enquiry-email').value.trim();
        const message = $('#enquiry-message').value.trim();
        let ok = true;
        if (name.length < 2) { showFieldError('#enquiry-name','Please enter your full name'); ok = false; } else clearFieldError('#enquiry-name');
        if (!validateEmail(email)) { showFieldError('#enquiry-email','Please enter a valid email'); ok = false; } else clearFieldError('#enquiry-email');
        if (message.length < 10) { showFieldError('#enquiry-message','Please type a longer message'); ok = false; } else clearFieldError('#enquiry-message');
        if (!ok) { flash('Please fix the highlighted fields.'); return; }
        // Simulate ajax processing
        flash('Processing enquiry...');
        setTimeout(() => {
          flash('Enquiry submitted — we will email you shortly. (Simulated)');
          enquiryForm.reset();
        }, 900);
      });
    }
  
    // Contact form (creates mailto:)
    const contactForm = $('#contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = $('#contact-name').value.trim();
        const email = $('#contact-email').value.trim();
        const subject = $('#contact-subject').value.trim() || 'Website Contact';
        const message = $('#contact-message').value.trim();
        if (name.length < 2 || !validateEmail(email) || message.length < 5) {
          flash('Please complete the form correctly.');
          return;
        }
        // Create mailto href — lecturer asked for email composed in code
        const recipient = 'info@coffeeboxsa.co.za'; // change if needed
        const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
        const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;
        // open default mail client (works in browser)
        window.location.href = mailto;
      });
    }
  
    function showFieldError(selector, text) {
      const el = $(selector);
      if (!el) return;
      el.classList.add('invalid');
      let note = el.nextElementSibling;
      if (!note || !note.classList.contains('field-note')) {
        note = document.createElement('div');
        note.className = 'field-note';
        el.parentNode.insertBefore(note, el.nextSibling);
      }
      note.textContent = text;
    }
    function clearFieldError(selector) {
      const el = $(selector);
      if (!el) return;
      el.classList.remove('invalid');
      const note = el.nextElementSibling;
      if (note && note.classList.contains('field-note')) note.remove();
    }
  
  });
  