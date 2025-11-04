/* ============================================================
   CoffeeBox Website (Part 3: JavaScript  & SEO Enhancements)
   Author: Dumolwenkosi MGwetu | Date: 04 Nov 2025
   ============================================================
   PURPOSE:
   This script adds all JavaScript-based interactivity,
   validation, and dynamic behavior for the CoffeeBox website.

    UX & UI Principles Applied:
   - Visibility of system status (feedback on actions)
   - Consistency & standards (same interaction patterns)
   - Error prevention & clear recovery
   - Aesthetic minimalism with motion for delight
   ============================================================ */

   /* =======================
   1. Smooth Page Animation
   ======================= */
// Fade-in hero text for emotional engagement (Don Norman – visceral design)
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero h1");
  if (heroText) {
    heroText.style.opacity = 0;
    heroText.style.transition = "opacity 2s ease-in";
    setTimeout(() => (heroText.style.opacity = 1), 300);
  }
});

/* =================================
   2. Accordion for Services Section
   =================================
   Keeps long text digestible (Krug – “Don’t make me think”).
*/
const serviceTitles = document.querySelectorAll("h2");
serviceTitles.forEach(title => {
  if (title.textContent.toLowerCase().includes("services")) {
    const nextList = title.nextElementSibling;
    if (nextList && nextList.tagName === "UL") {
      // Wrap list in a container for toggling
      nextList.style.display = "none";
      title.style.cursor = "pointer";
      title.addEventListener("click", () => {
        nextList.style.display = nextList.style.display === "none" ? "block" : "none";
        title.style.color = nextList.style.display === "block" ? "#f6c518" : "#fff";
      });
    }
  }
});

/* =======================================
   3. Lightbox Gallery for Product Images
   =======================================
   Principle: Aesthetic integrity + user control (Cooper – About Face)
*/
function initLightbox() {
  const images = document.querySelectorAll(".menu-preview img");
  if (!images.length) return;

  const overlay = document.createElement("div");
  overlay.id = "lightbox";
  overlay.style.cssText = `
    position: fixed; top:0; left:0; width:100%; height:100%;
    background: rgba(0,0,0,0.8); display:none; justify-content:center;
    align-items:center; z-index:9999;
  `;
  const img = document.createElement("img");
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  images.forEach(pic => {
    pic.style.cursor = "zoom-in";
    pic.addEventListener("click", () => {
      img.src = pic.src;
      overlay.style.display = "flex";
    });
  });
  overlay.addEventListener("click", () => (overlay.style.display = "none"));
}
initLightbox();

/* =====================================
   4. Dynamic Search on Products Page
   =====================================
   Helps users find info fast (Nielsen – efficiency of use)
*/
const searchContainer = document.createElement("div");
searchContainer.innerHTML = `
  <input type="text" id="searchBar" placeholder="Search for a drink or snack..." 
         style="width:90%;padding:0.7rem;margin:1rem;border-radius:6px;border:none;">
`;
if (document.title.includes("Products")) {
  const main = document.querySelector("main");
  main.insertBefore(searchContainer, main.firstChild);

  const searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("keyup", e => {
    const query = e.target.value.toLowerCase();
    const items = document.querySelectorAll("li");
    items.forEach(li => {
      li.style.display = li.textContent.toLowerCase().includes(query)
        ? "list-item"
        : "none";
    });
  });
}

/* ==========================================
   5. Load Dynamic Testimonials (Simulated)
   ==========================================
   Shows dynamic content (visibility + trust)
*/
if (document.title.includes("About")) {
  const section = document.createElement("section");
  section.innerHTML = `<h2>Customer Stories</h2><div id="reviews"></div>`;
  document.querySelector("main").appendChild(section);

  const reviews = [
    { name: "Thabo", text: "Best cappuccino in PMB! Quick and friendly service." },
    { name: "Sarah", text: "Love the drive-thru convenience every morning." },
    { name: "Imran", text: "Affordable, delicious, and consistent quality!" }
  ];

  const reviewContainer = document.getElementById("reviews");
  reviews.forEach(r => {
    const card = document.createElement("div");
    card.style.cssText = "background:#000;margin:1rem;padding:1rem;border-left:3px solid #f6c518;";
    card.innerHTML = `<p>"${r.text}"</p><p style="color:#f6c518;">– ${r.name}</p>`;
    reviewContainer.appendChild(card);
  });
}


