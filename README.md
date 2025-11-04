[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/BJNsMpBi)
# CoffeeBox — Drive-Thru Website (Part 1: HTML Corrections)  
**Student Number:** ST10486654  
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




