<div align="center">

# ✦ Saif Ullah Arshad — Portfolio

### ML Engineer · Full Stack Developer · CS Student @ ITU Lahore

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-saifullah--arshad--portfolio.vercel.app-7c3aed?style=for-the-badge&labelColor=0a0a0f)](https://saifullah-arshad-portfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Saif--Ullah0-06b6d4?style=for-the-badge&logo=github&labelColor=0a0a0f)](https://github.com/Saif-Ullah0)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&labelColor=0a0a0f)](https://linkedin.com/in/saif-ullah-arshad-40797a265)

[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Three.js](https://img.shields.io/badge/React_Three_Fiber-black?style=flat-square&logo=three.js)](https://docs.pmnd.rs/react-three-fiber)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

[![Lighthouse Performance](https://img.shields.io/badge/Performance-80-green?style=flat-square&logo=lighthouse)](https://saifullah-arshad-portfolio.vercel.app)
[![Lighthouse SEO](https://img.shields.io/badge/SEO-100-brightgreen?style=flat-square&logo=lighthouse)](https://saifullah-arshad-portfolio.vercel.app)
[![Lighthouse Accessibility](https://img.shields.io/badge/Accessibility-92-green?style=flat-square&logo=lighthouse)](https://saifullah-arshad-portfolio.vercel.app)

</div>

---

## ✦ Overview

A premium, fully interactive 3D portfolio built from scratch — no templates, no component libraries. Every animation, every 3D scene, and every interaction is custom-engineered to reflect how I think about ML systems and software engineering.

The portfolio features a **cursor spotlight that reveals a hidden AI world** beneath the surface, **Apple-style sticky stacking project cards**, a **3D orbital skills system**, and a **circuit board hover effect** on the profile photo — all running at 60fps.

---

## ✦ Live Features

### 🎯 Hero Section
- **Cursor Spotlight Reveal** — Move your cursor across the hero to reveal a hidden AI layer containing neural network nodes, floating Python code, ML metrics, a terminal window, and binary data streams
- **React Three Fiber Particles** — 800 violet particles slowly orbiting, responsive to mouse movement
- **Typing Animation** — Cycles through role titles with a blinking cyan cursor
- **Magnetic Buttons** — CTA buttons subtly follow your cursor on hover
- **Scroll Indicator** — Violet gradient line with animated scroll prompt

### 👤 About Section
- **Circuit Board Photo Hover** — Hover the profile photo to reveal circuit traces, binary rain, HUD overlays (ID::SAIF, ML::ENG, STAT::OK), scan lines, and corner targeting reticles with random glitch effects
- **Live GitHub Graph** — Real-time contribution data fetched from GitHub API, color-scaled in violet
- **Count-Up Animations** — Stats animate from 0 to their final values on scroll entry
- **Responsive Layout** — Two column on desktop, stacked on mobile

### 💼 Experience Section
- **Vertical Timeline** — Violet-to-cyan gradient line with glowing dot for current position
- **Hover Animations** — Cards slide right with violet border glow
- **4 Positions** — FlyRank AI, Nearpeer, Out-Class, CSE Education

### 🚀 Projects Section
- **Apple-Style Sticky Stacking** — 7 cards with `position: sticky`, each sliding up from below and stacking on the previous. Previous cards scale down and dim as new ones cover them
- **Unique Card Colors** — Each project has its own accent color
- **Real ML Metrics** — F1: 0.848, AUC: 0.971, Accuracy: 92% displayed with animations
- **7 Projects** — Urban Crash Safety Agent, Traffic Sign Classifier, EdTech Platform, MediLink, Circuit Breaker, Eternal Night, Paint Brush App

### ⚡ Skills Section
- **3D Orbital System** — Central AI core with rotating rings, 12 skill orbs orbiting like planets
- **Mouse Magnetism** — Orbs drift toward your cursor
- **Bloom Postprocessing** — Realistic light glow on all 3D elements
- **Click to Scatter** — Click the canvas to scatter all orbs, click again to return
- **Billboard Text** — Skill names always face the camera

### 🏆 Certificates Section
- **Filter Toolbar** — Filter by issuer: ALL, Anthropic, NVIDIA, Kaggle
- **Image Lightbox** — Click any certificate to expand, ESC to close, scroll lock
- **6 Certificates** — NVIDIA, Anthropic (Claude 101, Platform 101, Code 101, Cowork), and more

### 📬 Contact Section
- **EmailJS Integration** — Form sends real emails with no backend
- **Availability Status** — Live green glowing dot showing open to opportunities
- **Form Validation** — React Hook Form with error states

---

## ✦ Global Features

| Feature | Description |
|---|---|
| **Custom Cursor** | Violet dot + lagging ring, turns cyan on hover, disabled on touch |
| **Cursor Trail** | Canvas-based violet-cyan gradient particle trail |
| **Loading Screen** | Progress bar with name reveal, fades out when ready |
| **Scroll Progress** | Right-side dot indicators, click to navigate to section |
| **Dark/Light Mode** | Pill toggle, preference persisted in localStorage |
| **Smooth Scroll** | Lenis with 1.2s easing throughout |
| **Scroll Reveal** | Every section fades up via Intersection Observer |
| **Text Scramble** | Section headings scramble then resolve on scroll entry |
| **Noise Texture** | 3.5% film grain overlay for cinematic feel |
| **Magnetic Buttons** | Hero CTA buttons follow cursor on hover |
| **Back to Top** | Violet glowing button appears after 500px scroll |
| **SEO** | Full metadata, OpenGraph, Twitter cards — 100/100 Lighthouse |
| **Analytics** | Vercel Analytics tracking visitors and sections |

---

## ✦ Tech Stack

### Core
```
Next.js 15          — App Router, SSR, Image Optimization
TypeScript          — Strict typing throughout
Tailwind CSS v4     — Utility styling with CSS custom properties
```

### 3D & Animation
```
React Three Fiber   — React renderer for Three.js / WebGL
@react-three/drei   — Helpers: Float, OrbitControls, Billboard, Text
@react-three/postprocessing — Bloom, depth effects
GSAP + ScrollTrigger — Scroll-driven animations and timelines
Framer Motion       — Component animations, sticky card scroll
Lenis               — Buttery smooth scrolling
```

### State & Forms
```
Zustand             — Global state: loading, active section, menu
React Hook Form     — Form validation
EmailJS             — Email delivery without backend
```

### Icons & UI
```
React Icons         — Icon library
next/font           — Space Grotesk, Inter, Fira Code
```

### Deployment
```
Vercel              — Auto-deploy on push to main
Vercel Analytics    — Visitor tracking
```

---

## ✦ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, providers
│   ├── page.tsx            # Home page, section imports
│   ├── globals.css         # Design tokens, light mode, animations
│   └── opengraph-image.tsx # Auto-generated OG image
│
├── components/             # Reusable UI atoms
│   ├── Navbar.tsx
│   ├── CustomCursor.tsx
│   ├── CursorTrail.tsx
│   ├── LoadingScreen.tsx
│   ├── ScrollProgress.tsx
│   ├── BackToTop.tsx
│   ├── ThemeToggle.tsx
│   ├── MagneticButton.tsx
│   ├── ScrambleText.tsx
│   ├── SectionWrapper.tsx
│   └── Footer.tsx
│
├── features/               # Section-based feature folders
│   ├── hero/
│   │   ├── Hero.tsx
│   │   ├── HeroCanvas.tsx  # R3F particle system
│   │   ├── HeroText.tsx    # Typing animation, CTAs
│   │   └── HeroReveal.tsx  # Cursor spotlight reveal
│   ├── about/
│   │   ├── About.tsx
│   │   ├── PhotoHover.tsx  # Circuit board hover effect
│   │   └── GitHubStats.tsx # Live contribution graph
│   ├── experience/
│   │   └── Experience.tsx
│   ├── projects/
│   │   └── Projects.tsx    # Sticky stacking cards
│   ├── skills/
│   │   ├── Skills.tsx
│   │   ├── SkillsCanvas.tsx # 3D orbital system
│   │   └── SkillBall.tsx
│   ├── certificates/
│   │   └── Certificates.tsx
│   └── contact/
│       ├── Contact.tsx
│       └── ContactForm.tsx
│
├── data/                   # All content in TypeScript
│   ├── profile.ts
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── certificates.ts
│   └── socials.ts
│
├── hooks/
│   ├── useScrollAnimation.ts
│   ├── useScrambleText.ts
│   ├── useCountUp.ts
│   ├── useMediaQuery.ts
│   └── useMousePosition.ts
│
├── providers/
│   └── SmoothScrollProvider.tsx
│
├── store/
│   └── useAppStore.ts      # Zustand: loading, activeSection, menu
│
└── types/
    └── index.ts            # Project, Experience, Skill, Certificate
```

---

## ✦ Getting Started

```bash
# Clone the repository
git clone https://github.com/Saif-Ullah0/SaifUllahArshad-Portfolio.git
cd SaifUllahArshad-Portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your EmailJS keys to .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## ✦ Design System

### Colors
```css
Background:     #0a0a0f   /* Near black with blue tint */
Surface:        #111118   /* Card backgrounds */
Primary:        #7c3aed   /* Violet — identity color */
Secondary:      #06b6d4   /* Cyan — accents and highlights */
Text Primary:   #f1f5f9   /* Near white */
Text Secondary: #94a3b8   /* Muted gray-blue */
Success:        #10b981   /* Metrics and positive values */
```

### Typography
```
Heading:  Space Grotesk — geometric, technical, futuristic
Body:     Inter — clean, highly readable
Mono:     Fira Code — code snippets, terminal aesthetic
```

---

## ✦ Performance

Tested on Lighthouse — [saifullah-arshad-portfolio.vercel.app](https://saifullah-arshad-portfolio.vercel.app)

| Metric | Desktop | Mobile |
|---|---|---|
| Performance | 80 | 63 |
| Accessibility | 92 | 92 |
| Best Practices | 73 | 73 |
| SEO | **100** | **100** |
| FCP | 0.5s | 1.7s |
| LCP | 0.6s | 2.2s |
| CLS | 0.001 | 0 |

> Performance is limited by Three.js bundle size (~1.6MB) which is unavoidable with any React Three Fiber application. FCP and LCP are excellent — the site feels fast to users.

---

## ✦ Deployment

The portfolio auto-deploys to Vercel on every push to `main`.

```bash
# Push to deploy
git push origin main
```

Vercel builds and deploys in ~60 seconds. Environment variables are configured in the Vercel dashboard.

---

## ✦ Featured Projects in Portfolio

| Project | Stack | Key Metric |
|---|---|---|
| Urban Crash Safety Agent | XGBoost, GeoPandas, Google ADK | F1: 0.848, AUC: 0.971 |
| Traffic Sign Classifier | PyTorch, OpenCV, CNN | 92% accuracy on 49K+ images |
| EdTech Learning Platform | React, Node.js, PostgreSQL, Stripe | 5000+ learners |
| MediLink Clinic Management | React, Node.js, MySQL | 5+ modules |
| FastAPI Circuit Breaker | FastAPI, Python, Microservices | 3 state transitions |
| Eternal Night Horror Game | Unity, C#, Maya, Firebase | 10+ games built |
| Paint Brush App | Python, Tkinter, OOP | A+ grade |

---

## ✦ Connect

<div align="center">

**Saif Ullah Arshad**
ML Engineering Intern @ FlyRank AI | CS Student @ ITU Lahore

Selected from 38,000+ applicants across 130 countries

[![Email](https://img.shields.io/badge/Email-saifullaharshad110@gmail.com-7c3aed?style=flat-square&logo=gmail&logoColor=white)](mailto:saifullaharshad110@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/saif-ullah-arshad-40797a265)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Saif-Ullah0)

*Currently open to ML Engineering and Full Stack internship opportunities for 2026-2027*

</div>

---

<div align="center">

Built with 🔥 by Saif Ullah Arshad · [saifullah-arshad-portfolio.vercel.app](https://saifullah-arshad-portfolio.vercel.app)

</div>
