[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/BJNsMpBi)
# CoffeeBox — Drive-Thru Website (Part 1: HTML Corrections)  
**Subject:** Website Development (WEDE5020/p/W)  
**Date:** 2025-09-28  

---

## Overview
This repository contains **Part 1 (HTML Corrections and Updates)** of the CoffeeBox website project. CoffeeBox is a Pietermaritzburg-based drive-thru coffee brand.  

The goal of Part 1 was to:  
- Correct and complete the HTML structure according to feedback.  
- Create at least **5 HTML pages** with semantic tags.  
- Establish a proper file and folder structure.  
- Integrate researched company content and references.  
- Add navigation, form, and Google Maps embed (pure HTML).  
- Document everything in GitHub (README, Changelog, references).  

---

THE FOLLOWING ARE SNAPSHOTS OF THE WEBSITE ON A CELLPHONE, TABLET AND ON A DESKTOP.
<img width="1366" height="768" alt="HAW1-React-Native-2025-v2 (31) - lab-09c87ae5-0636-4bb7-bc74-001c1e2d19d9 westeurope cloudapp azure com_7002 - Remote Desktop Connection 23_9_2025 07_51_19" src="https://github.com/user-attachments/assets/3071de3a-543e-48e2-8e2d-7efd5ca7aed9" />

<img width="1366" height="768" alt="HAW1-React-Native-2025-v2 (31) - lab-09c87ae5-0636-4bb7-bc74-001c1e2d19d9 westeurope cloudapp azure com_7002 - Remote Desktop Connection 23_9_2025 07_52_16" src="https://github.com/user-attachments/assets/dc26921b-6003-4ff4-9669-353eb2ae52be" />

**************************************PART 02 (CSS)***************************************************************
# CoffeeBox — Drive-Thru Website (Part 2: CSS Styling & Responsive Design)  
**Student Number:** ST10486654  
**Subject:** Website Development (WEDE5020/p/W)  
**Date:** 2025-09-29  

---

## Overview
This repository contains **Part 2 (CSS Styling & Responsive Design)** of the CoffeeBox website project. CoffeeBox is a Pietermaritzburg-based drive-thru coffee brand.  

The goal of Part 2 was to:  
- Create a professional, **desktop-first external stylesheet**.  
- Apply typography, layout, and decoration styles consistently.  
- Implement **pseudo-classes** for interaction.  
- Ensure **responsive design** with breakpoints for tablet and mobile.  
- Document changes in the README and CHANGELOG.  


### 2.1 External Stylesheet
- `css/styles.css` created and linked to all HTML files.  

### 2.2 Base Styles
- CSS reset applied to normalize across browsers.  
- Body styled with CoffeeBox’s brand colors: black background, white text, yellow highlights.  
- Default font family set (`Open Sans`) for body, Montserrat for headings.  

### 2.3 Typography
- Hierarchy:  
  - `h1` → 2.5–3rem (bold, Montserrat).  
  - `h2` → 1.8rem (medium, Montserrat).  
  - Body → 1rem (`Open Sans`).  
- Line heights and letter spacing adjusted for readability.  

### 2.4 Layout Structure
- **Header:** Sticky top navigation (flexbox).  
- **Hero Section:** Full-width background image + centered text/button.  
- **Features Section:** CSS Grid (3 columns desktop → 2 tablet → 1 mobile).  
- **Forms:** Clean flexbox layout.  
- **Footer:** Simple, centered block with brand palette.  

### 2.5 Visual Styles
- Brand palette (Black, White, Yellow) applied consistently.  
- Borders, rounded corners, and shadows for depth.  
- Interactive buttons styled with hover effects.  

### 2.6 Pseudo-Classes
- `:hover`, `:focus` → applied to nav links, buttons, feature cards.  
- `:active` → gives click feedback on buttons and links.  

---

## 📱 Responsive Design

### 3.1 Breakpoints
- **Desktop (≥1024px):** Default grid + layout.  
- **Tablet (≤900px):** Features grid → 2 columns, tighter nav spacing.  
- **Mobile (≤600px):** Features grid → 1 column, nav stacked vertically, smaller hero text.  

### 3.2 Relative Units
- Used `rem` for typography and spacing.  
- Used `%` for widths, ensuring flexible scaling.  

### 3.3 Responsive Images
- Hero section uses `background-size: cover`.  
- Images scale automatically with `%` widths.  
- Screenshots captured for evidence.  

---

## 📸 Responsive Design Evidence

**Desktop View (≥1024px):**  


**Tablet View (~768px):**  


**Mobile View (~375px):**  


---


 

---

## 🔗 References
See [references.txt](references.txt).  

---




<img width="1366" height="768" alt="HAW1-React-Native-2025-v2 (31) - lab-09c87ae5-0636-4bb7-bc74-001c1e2d19d9 westeurope cloudapp azure com_7002 - Remote Desktop Connection 23_9_2025 07_52_04" src="https://github.com/user-attachments/assets/cdcd9f80-be0a-44a7-81ec-beb91e7285c2" />

*******************************************************************************************************************************************************************************
*******************************************************************************************************************************************************************************
04 Novmeber 2025 - POE

# CoffeeBox Website – WEDE5020 POE  
**Name:** Dumolwenkosi M Gwetu 
**Number:** ST10486654 
**Repository:** [https://github.com/ST10486654/WEDE5020-POE-ST10486654-publicRepo](https://github.com/ST10486654/WEDE5020-POE-ST10486654-publicRepo)  
**Live Site:** [https://st10486654.github.io/WEDE5020-POE-ST10486654-publicRepo/](https://st10486654.github.io/WEDE5020-POE-ST10486654-publicRepo/)

---

## 📖 Project Overview
CoffeeBox is a fully responsive, SEO-optimized drive-thru coffee shop website inspired by the real CoffeeBox brand in Pietermaritzburg.  
The website showcases strong UI/UX design, interactivity, accessibility, and professional coding standards.

---

## 🏗️ Structure and Features
| Section | File | Description |
|----------|------|-------------|
| Home | `index.html` | Hero animation, introduction, navigation links |
| About | `about.html` | Mission, vision, and dynamically loaded customer testimonials |
| Products | `products.html` | Interactive product gallery with lightbox + live search bar |
| Services | `services.html` | Accordion-style expandable list of CoffeeBox services |
| Enquiry | `enquiry.html` | Form with validation and dynamic success/error feedback |
| Contact | `contact.html` | Google Map embed, contact form, live validation |
| SEO Files | `robots.txt`, `sitemap.xml` | Enable search engine indexing |
| Scripts | `js/script.js` | Handles all JavaScript features and interactivity |
| Styles | `css/styles.css` | Controls layout, colors, typography, and responsive design |

---

## 🧠 Technologies Used
- **HTML5** for semantic structure  
- **CSS3** for modern responsive layout  
- **JavaScript (ES6)** for interactivity  
- **GitHub Pages** for hosting and deployment  

---

## 🌐 UX & UI Design Principles
Based on top design literature:
- *Don Norman – The Design of Everyday Things*  
- *Steve Krug – Don’t Make Me Think*  
- *Alan Cooper – About Face*  
- *Jenifer Tidwell – Designing Interfaces*  
- *Jakob Nielsen – Usability Heuristics*  

---

## 🔍 SEO Implementation
- Meta titles, descriptions, and keywords for every page  
- Robots.txt and Sitemap.xml for crawlability  
- Accessible alt text for all images  
- Optimized filenames for search indexing  

---

## 📸 Visual Assets
All images are royalty-free and sourced from:
- [https://canva.com](https://canva.com)  


---

## 📈 Branch Workflow
- **main** → Base project  
- **part3-js-seo** → Final version (JavaScript, SEO, interactivity)

---

## ✅ How to View
1. Visit the live site:  
   [https://st10486654.github.io/WEDE5020-POE-ST10486654-publicRepo/](https://st10486654.github.io/WEDE5020-POE-ST10486654-publicRepo/)  
2. Navigate through each page via the top navigation bar.  
3. Test interactivity on Products, Services, Enquiry, and Contact pages.  

---

## 🏁 Final Notes
This project demonstrates:
- Clean code and semantic structure  
- Modern UX/UI design principles  
- Full SEO optimization  
- JavaScript interactivity and validation  
- Professional GitHub documentation and hosting

-------------------------------------------------
References – CoffeeBox Website Project
Student: ST10486654
Module: WEDE5020 – Web Development
-------------------------------------------------

Primary Design and Development References:
1. Norman, D. A. (2013). *The Design of Everyday Things.* MIT Press.
2. Krug, S. (2014). *Don’t Make Me Think, Revisited: A Common Sense Approach to Web Usability.* New Riders.
3. Cooper, A., Reimann, R., Cronin, D. (2014). *About Face: The Essentials of Interaction Design.* Wiley.
4. Tidwell, J. (2010). *Designing Interfaces.* O'Reilly Media.
5. Nielsen, J. (1995). *10 Usability Heuristics for User Interface Design.* Nielsen Norman Group.

Online Technical Resources:
6. MDN Web Docs. (2025). *HTML, CSS, and JavaScript Documentation.* Mozilla Foundation. https://developer.mozilla.org/
7. W3Schools. (2025). *Web Development Tutorials.* https://www.w3schools.com/
8. Canva. (2025). *CanvaAI.* https://canva.com/


Academic Acknowledgment:
This project follows Clean Code and UX/UI principles from the above sources.
All media used are royalty-free, with appropriate credit given to original platforms.

-------------------------------------------------
End of References
-------------------------------------------------


---
© 2025 ST10486654 | CoffeeBox Project – WEDE5020 POE






