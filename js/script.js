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
