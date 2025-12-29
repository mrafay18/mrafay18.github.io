# Personal Portfolio Website — Mohammad Rafay

This repository contains the source code for my personal portfolio website. The site presents my background, experience, skills, and community involvement in a polished, professional format, with support for multiple visual themes.

The website is built using **vanilla HTML, CSS, and JavaScript** and is fully responsive across desktop, tablet, and mobile devices.

---

## 🌐 Purpose

This website serves as:
- A professional online presence
- A companion to my resume and LinkedIn profile
- A showcase of my background in software engineering, backend development, and cybersecurity
- A demonstration of clean UI/UX design, responsiveness, and maintainable front-end architecture

---

## 📁 Project Structure

- `index.html`  
  Home page containing About Me, Education, Experience, and Skills

- `qualifications.html`  
  Resume view with detailed technical skills and interests

- `service.html`  
  Community service and volunteering experience

- `style1.css`  
  Consulting-style professional theme

- `style2.css`  
  Cyberhacker / terminal-style theme

- `function.js`  
  Theme switching logic and dynamic header brand injection

- `Mohammad_Rafay_Resume.pdf`  
  Downloadable resume

- `me.jpg`  
  Profile photo used across the site

- `README.md`  
  Project documentation


---

## 🎨 Themes & Styling

The website supports **two distinct visual themes**, switchable at runtime.

### **Style 1 — Consulting / Professional**
- Clean, structured design inspired by consulting firms
- Strong visual hierarchy and spacing
- Subtle animations and transitions
- Two-column “About Me” layout on larger screens
- Professional header brand mark with dynamic name lockup

### **Style 2 — Cyberhacker**
- Terminal-inspired aesthetic
- Neon accents, scanlines, and monospace typography
- Experimental and technical visual identity

The selected theme is **persisted using `localStorage`**, allowing the preference to remain consistent across page reloads and navigation.

---

## ⚙️ JavaScript Functionality

`function.js` provides the following functionality:
- Toggles between `style1.css` and `style2.css`
- Persists the selected theme using `localStorage`
- Dynamically injects the `<h1>` name into the header as a brand lockup  
  (no hardcoded text, no duplicated content, no HTML changes required)

All logic is implemented using **plain JavaScript**, without external libraries.

---

## 📱 Responsiveness & Accessibility

- Fully responsive across:
  - 13” / 15–16” laptops
  - Tablets (iPadOS, Android)
  - Mobile devices (iOS, Android)
- Built with:
  - CSS Grid and Flexbox
  - `clamp()` for fluid typography and sizing
  - `prefers-reduced-motion` support
- Includes a **“Skip to content”** link for improved keyboard navigation

---

## 🚀 Running the Project

### Option 1: visit mrafay18.github.io

### Option 2: Open in GitHub Codespaces
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=13539177)

### Option 3: Run Locally
1. Clone the repository:
   ```bash
   git clone <repository-url>
Open index.html in any modern web browser
(No build step or server required)

🧠 Technologies Used
HTML5

CSS3 (Grid, Flexbox, animations, responsive design)

JavaScript (DOM manipulation, localStorage)

No frameworks or third-party libraries

📬 Contact
Email: rafaymohammad03@gmail.com

LinkedIn: https://www.linkedin.com/in/mrafay18
© Mohammad Rafay
