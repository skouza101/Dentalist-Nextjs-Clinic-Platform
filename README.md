# 🦷 Dentalist - Premium Next.js Dental & Medical Clinic Platform

**Dentalist** is an ultra-premium, white-label responsive web application and online booking platform custom-built for modern medical and dental clinics (such as private practice groups and clinical centers) looking to elevate their professional online presence.

Recently migrated from a legacy React SPA, the platform is now fully re-architected on the state-of-the-art **Next.js (App Router)** framework to support rapid, pre-rendered page delivery, SEO-optimized routing, and high-performance server-side rendering.

---

## ⚡ Tech Stack & Architecture

* **Core Framework**: [Next.js](https://nextjs.org/) (App Router) & React (Concurrent Rendering)
* **Styling & Design System**: Vanilla SASS / SCSS (modular and extensible) integrated with Bootstrap 5
* **Locales & Internationalization**: Fully integrated client-side `LanguageContext` supporting dynamic switching between French (`fr` - default), Arabic (`ar` - with full right-to-left RTL layout support), and English (`en`).
* **Animations & Micro-interactions**: AOS (Animate on Scroll) animations, premium hardware-accelerated SCSS card hover lifts, custom ripple button animations, and custom CSS page transitions.

---

## 💎 Premium UI/UX Features

* **Multi-Lingual Arabic RTL Support**: The platform dynamically adjusts its text direction and layouts (RTL/LTR alignment shifts) seamlessly upon switching to Arabic, creating a perfect localized experience for MENA region practices.
* **Premium Interactive Booking Flow**: An elegant simulation system inside the appointment booking form utilizing shimmering loading skeletons to visualize slot availability, premium ripple select items, and an animated visual checkmark success card upon booking confirmation.
* **Performance-Driven Asset System**: Fully patched dynamic ES6 asset pipeline matching Next.js resource resolution, handling automated source path extractions for complex media grids, Physicians, Services, and background SVG patterns.
* **SEO Best Practices Built-In**: Structured semantic HTML5 elements, individual unique identifier keys for interactive testing, optimized viewport meta attributes, and high-performance sub-second page loads.

---

## 📁 Key Routes (App Router)

The platform is cleanly structured with the following static pre-rendered routes under `src/app/`:

* `/` — **Home Page** (Hero banner, calling indicators, services list, features list, professional grid, dynamic reviews, and lightbox gallery)
* `/about` — **About Practice** (Practice details, clinical team grid, safety-first video presentation, and FAQ section)
* `/singleservice` — **Service Showcase** (Interactive symptoms breakdown, visual image gallery, and the dynamic booking form)
* `/contact` — **Contact & Map Location** (Embedded high-performance interactive clinic maps and direct emergency calling panels)

---

## 🚀 Getting Started & Local Development

### 1. Installation
Clone the repository, navigate to the directory, and install dependencies:
```bash
npm install
```

### 2. Run the Development Server
Start the local server using Next.js Turbopack compiler:
```bash
npm run dev
```
Open [http://localhost:3001](http://localhost:3001) in your browser.

### 3. Generate a Production Build
Compile the codebase into an optimized production-ready bundle:
```bash
npm run build
```

---

## 🎨 Layout & SASS Structure
* `src/app/` — Global page layouts, routing structure, and route definitions.
* `src/components/` — Small reusable UI elements (e.g., custom `Navbar`, `Skeleton` shimmer screens, custom `ContactForm`).
* `src/sections/` — Full-page interactive blocks (e.g., `Hero Banner`, `Services`, `Gallery`, `Testimonials`).
* `src/sass/` — Shared design tokens (fonts, colors, utilities, dynamic layout settings).

---
*Design Credit for original community mockups: [Flowbase](https://www.figma.com/community/file/1148521097072918819)*
