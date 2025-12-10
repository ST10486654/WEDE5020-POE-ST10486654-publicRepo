# Changelog — CoffeeBox (Resubmission)

All changes recorded for Part 3 (POE).

## 2025-12-04 — Part 3 submission
- Added full client-side JavaScript (`js/script.js`) to implement:
  - Dynamic products listing and menu preview
  - Live search and category filter for products
  - Accessible lightbox gallery with keyboard controls
  - Accordion for Services page
  - Enquiry form validation and dynamic response (cost estimate for catering)
  - Contact form validation and mailto prefill
  - Leaflet interactive map integration with marker and popup
  - Simple "Add" demo functionality to illustrate cart interaction
- Updated pages:
  - `index.html` — added SEO meta tags, integrated preview area dynamically
  - `products.html` — dynamic product list, search & filter, lightbox
  - `about.html` — SEO tags and testimonials area populated by JS
  - `services.html` — accessible accordion for each service
  - `enquiry.html` — expanded form controls, client-side validation, dynamic response
  - `contact.html` — interactive map (Leaflet) and contact form mailto flow
- Updated styling (`css/styles.css`):
  - Added responsive product card styles and lightbox CSS
  - Added form error styling and accordion styles
  - Preserved original color palette (#111, #fff, #f6c518)
- Added `robots.txt` and a basic `sitemap.xml` for SEO
- README updated for Part 3 instructions and deployment notes (see commit history)
******************************************************************************************************************************************************************************************************************************************************************************************************************

2025-12-04 — Comprehensive Website Upgrade (Final Submission{SUPP})
Global Changes
•	Added semantic HTML improvements across all pages
•	Added unique meta titles, descriptions, and keywords per page
•	Added alt text to all images to improve accessibility and SEO
•	Improved navigation structure and internal linking
•	Cleaned heading hierarchy site-wide
•	Ensured all scripts load using defer for performance
________________________________________
About Page Changes
•	Rebuilt entire About page structure
•	Added hero section with existing hero image
•	Added brand story, mission, vision, and values
•	Added Meet the Team section with images and bios
•	Added milestones timeline
•	Added CTA linking to Products and Enquiry
•	Added testimonials integration from script.js
•	Added JSON-LD (CafeOrCoffeeShop)
•	Implemented fully responsive two-column layout
•	Added additional accessibility improvements
________________________________________
Contact Page Changes
•	Added hero introduction
•	Rebuilt layout using two-column grid
•	Added open/closed indicator powered by JS
•	Added contact form accessibility improvements
•	Added aria-live feedback for validation
•	Added Google Maps directions button
•	Added location placeholder image
•	Added ContactPage JSON-LD structured data
•	Added mobile breakpoints and card-like styling
________________________________________
Services Page Changes
•	Fully redesigned services.html
•	Added hero introduction and improved content structure
•	Added four rich service cards using existing images
•	Implemented accordion toggles with aria-expanded attributes
•	Added internal links to Products, Enquiry, and Contact pages
•	Added CTA section
•	Added Service schema (JSON-LD)
•	Created responsive grid layout using auto-fit columns
•	Maintained brand colour palette across cards and buttons
________________________________________
CSS Changes
•	Added styling for About page hero + grid
•	Added styling for team cards and milestones
•	Added styling for services grid, cards, accordion, and CTA
•	Added contact cards, map styling, form spacing, and open-status indicator
•	Added accessibility focus ring
•	Improved spacing and typography consistency
•	Added mobile responsive breakpoints for all upgraded sections
________________________________________
JavaScript Changes
•	Added accordion logic for Services page
•	Added open/closed hours logic for Contact page
•	Added dynamic testimonial display for About page
•	Improved form feedback logic with aria-live
•	Ensured compatibility with existing JS architecture
________________________________________
Repo Support Files
•	Updated README.md with detailed documentation of all Part 3 enhancements
•	Added CHANGELOG.md to track full development progress
•	Ensured sitemap.xml and robots.txt reflect correct repo structure

