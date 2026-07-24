# ankitadhi.github.io

A personal portfolio website showcasing ML/NLP and full-stack development work. Built with a "Cyber-Ethereal AI" design language featuring glassmorphism cards, dual-theme support, and rich micro-interactions.

**Live:** [ankitadhi.github.io](https://ankitadhi.github.io/)

## Tech Stack

- **React 19** with React Compiler (automatic memoization)
- **Vite 8** for fast builds and HMR
- **TypeScript 6**
- **Tailwind CSS 3.4** + CSS custom properties for theming
- **GitHub Actions** → GitHub Pages deployment

## Features

### Sections

- **Hero** — Continuous typewriter animation, gradient-text name, social links with hover glow, "Current Focus" card with pulsing border
- **Terminal** — Interactive shell emulator with command history, scanline overlay, color-coded output, and macOS-style title bar
- **About** — Brief bio and highlights
- **Skills** — Bento box asymmetric grid with staggered scroll reveal; ML/NLP/LLM card spans 2×2 for visual dominance
- **Testimonials** — Randomized quotes with decorative quote marks, gradient-ring hover, and cascading entrance
- **Projects** — Filterable grid with smooth fade transitions between categories, gradient border hover, and expand-to-detail view
- **Contact** — Form that opens the user's email client pre-filled
- **Footer** — Three-column layout with nav links, branding, and social icons

### Design System

- **Dual theme** — Dark ("Deep Night") and Light ("Pristine Frost") modes with smooth 350ms crossfade transitions
- **Glassmorphism cards** — `.glass-card` + `.interactive-card` classes for backdrop-blur, border, and micro-scale hover
- **Gradient border reveal** — Cards show accent gradient border on hover (300ms fade)
- **Section dividers** — Gradient line with centered accent dot, viewport-triggered fade-in
- **Focus ring system** — Unified 2px accent outline on `:focus-visible` for keyboard accessibility (WCAG 2.2 compliant)

### Interactions & Animations

- Cursor particle trail and mouse spotlight (desktop only)
- Magnetic buttons that drift toward the cursor
- 3D tilt effect on skill and project cards
- Staggered scroll reveal with cascading delays (auto-capped at 800ms)
- Filter transitions — fade-out/fade-in when switching project categories
- Navbar compact/relaxed state with hysteresis and sliding active underline
- Loading screen with gradient progress bar and scale-up exit animation
- Terminal scanlines, command separators, and green dot glow

All animations respect `prefers-reduced-motion` and degrade gracefully on touch devices.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build (TypeScript check + Vite build)
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

## Project Structure

```
src/
├── components/     # UI components (Navbar, Hero, Skills, Terminal, etc.)
├── hooks/          # Custom hooks (useMagnetic, useTilt, useStaggerReveal, etc.)
├── assets/         # Images
├── App.tsx         # Root — layout, theme state, routing
├── index.css       # Global styles, CSS variables, animations
└── main.tsx        # Entry point
```

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds the site and deploys to GitHub Pages automatically.

## License

Personal portfolio — not licensed for reuse.
