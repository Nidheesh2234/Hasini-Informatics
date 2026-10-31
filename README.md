# HASINI INFORMATICS Pvt. Ltd. — Enterprise Digital & AI Platform

> **"We Build What's Next."**  
> A full-spectrum software and digital engineering company that builds, runs, and grows businesses end to end.

![HASINI INFORMATICS](/public/images/hasini-logo.png)

---

## 🏛️ Executive Leadership
- **DR. G. Suvarna Kumar**, Founder & Chief Executive Officer
- **DR. G. Sandhya Devi**, Managing Director & Head of Strategic Growth

---

## ⚡ Technology Stack
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language:** TypeScript 5 (Strict type checking)
- **Styling:** Tailwind CSS v4 & Custom Design Tokens
- **Smooth Inertial Physics:** [Lenis](https://lenis.darkroom.engineering/)
- **Gestures & Transitions:** [Framer Motion](https://www.framer.com/motion/)
- **3D / WebGL Graphics:** [Three.js](https://threejs.org/) (Interactive particle vortex & mobius ribbons)
- **Icons:** [Lucide React](https://lucide.dev/) & Custom SVG brand suite
- **Form Feedback:** Canvas Confetti

---

## 📂 Project Structure & Architecture

```text
HASINI INFORMATICS/
├── public/
│   ├── images/              # High-res brand logos and assets
│   ├── icon.png             # Official brand tab favicon
│   └── favicon.ico          # Fallback favicon
├── src/
│   ├── app/
│   │   ├── api/contact/     # Contact submission API with honeypot spam guard
│   │   ├── services/        # Services catalog & [slug] dynamic specifications
│   │   ├── work/            # Case studies showcase & [slug] project deep dives
│   │   ├── about/           # Executive leadership profile & philosophy
│   │   ├── contact/         # Interactive RFP brief & direct phone touchpoints
│   │   ├── privacy/         # Data protection & SOC2 compliance policy
│   │   ├── terms/           # Master Service Agreement & IP transfer terms
│   │   ├── sitemap.ts       # Dynamic XML sitemap generator
│   │   ├── robots.ts        # Dynamic robots.txt
│   │   ├── layout.tsx       # Root layout with SEO JSON-LD schema & preloader
│   │   └── page.tsx         # Continuous scroll storytelling homepage (14 sections)
│   ├── components/
│   │   ├── hero/            # WebGL interactive 3D particle canvas
│   │   ├── home/            # All 14 storytelling sections (Problem, Answer, Services, Agentic AI, Process, Leadership, Selected Work, Numbers, Marquee, Testimonials, CTA, Contact)
│   │   ├── BrandLogo.tsx    # Dual-spiral vector ribbons & signature wordmark
│   │   ├── Preloader.tsx    # 1.3s cinematic preloader with animated counter
│   │   ├── CustomCursor.tsx # Contextual cursor with touch device detection
│   │   ├── SmoothScroll.tsx # Lenis smooth scrolling provider
│   │   ├── Navbar.tsx       # Kinetic navigation with phone dropdown & WhatsApp
│   │   └── Footer.tsx       # Oversized wordmark & global sitemap
│   └── data/
│       ├── siteConfig.ts    # Single source of truth for phones, emails, socials, leadership
│       ├── services.ts      # All 9 practice areas with deliverables & tech tags
│       ├── projects.ts      # CMS-ready JSON schema for case studies
│       ├── process.ts       # 5-stage Discover-to-Dedicate methodology
│       ├── stats.ts         # Performance metrics & counters
│       ├── techStack.ts     # Tech marquee entries
│       └── testimonials.ts  # Executive endorsements & metrics
```

---

## ⚙️ Content Configuration (Edit in One Place)

All core business data, phone numbers, leadership bios, services, and projects are centralized in `src/data/`:

1. **Contact Details & Leadership:**  
   Edit `src/data/siteConfig.ts` to update phone numbers (+91 9885000708, +91 9291458626), WhatsApp links, emails (`emailgsk@gmail.com`), social handles, and office address.
2. **Services & Practice Areas:**  
   Edit `src/data/services.ts` to add or modify service cards, deliverables, and capabilities.
3. **Projects & Case Studies:**  
   Edit `src/data/projects.ts` to add new client case studies without touching UI components.
4. **Numbers & Stats:**  
   Edit `src/data/stats.ts` to adjust production numbers, years of operation, and uptime percentages.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (Turbopack)
npm run build

# 4. Start production server
npm run start
```

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Framework Preset: **Next.js**.
4. Root Directory: `./`.
5. Deploy! Zero environment variables are required for initial launch. Optional `RESEND_API_KEY` can be added for live email dispatch.

---

## 📞 Official Contact Touchpoints
- **Direct Phone:** [+91 9885000708](tel:+919885000708) & [+91 9291458626](tel:+919291458626)
- **WhatsApp:** [Chat on WhatsApp](https://wa.me/919885000708)
- **Email:** emailgsk@gmail.com / info@hasini-informatics.com
- **Headquarters:** HITEC City, Hyderabad, Telangana, India

© 2026 HASINI INFORMATICS Pvt. Ltd. All rights reserved.
