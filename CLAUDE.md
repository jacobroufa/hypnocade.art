# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hypnocade is a lightweight Next.js 15 static marketing website for interactive video synthesizer arcade machines. The site showcases three machines (Hypno, Enso, Future) with installation tier options. This is a simple, dependency-minimal site with no forms, authentication, or interactive features beyond navigation.

## Commands

```bash
# Development
npm run dev              # Start development server (http://localhost:3000)

# Build & Deploy
npm run build            # Production build
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 15 (App Router) - Static site generation
- **React**: v19
- **TypeScript**: v5
- **Styling**: Tailwind CSS with custom CSS variables for dark theme
- **Icons**: Lucide React (minimal usage)
- **Utilities**: clsx + tailwind-merge for className handling

## Architecture

### App Structure

This is a Next.js App Router application with page-based routing:

- `app/page.tsx` - Home page with hero, features, product showcase, installation tiers
- `app/machines/page.tsx` - Details about individual machines (Hypno, Enso, Future)
- `app/gallery/page.tsx` - Visual gallery
- `app/contact/page.tsx` - Contact form/information
- `app/layout.tsx` - Root layout with ThemeProvider and Inter font
- `app/globals.css` - Global styles and Tailwind CSS variables

### Component Organization

**All Components** (`components/`)
- `header.tsx` - Site header with logo and navigation. Accepts currentPage prop ("home" | "machines" | "gallery" | "contact") for active state styling
- `footer.tsx` - Reusable footer/CTA component accepting title, description, ctaText, ctaLink props

That's it! This is a minimal site with only 2 custom components.

### Styling System

**Tailwind Configuration**
- Custom color system using CSS variables defined in `globals.css`
- Site defaults to dark theme with dark backgrounds and light text
- Theme colors: background, foreground, card, popover, primary, secondary, muted, accent, destructive
- Border radius configured via `--radius` variable

**Path Aliases**
- `@/*` maps to root directory
- Used for imports: `@/components/header`, `@/components/footer`

## Key Patterns

### Page Structure
All pages follow this pattern:
1. Header component with currentPage prop for active state
2. Content sections with max-w-6xl container
3. Footer component with CTA (reusable across pages)

### Responsive Design
- Mobile-first approach with Tailwind breakpoints (sm:, md:, lg:)
- Grid layouts convert from 1 column to 2-3 columns on larger screens
- Padding and spacing scale appropriately

### Image Handling
- Uses Next.js Image component with `fill` for responsive images
- Images currently use placeholder.svg (to be replaced with actual assets)
- Image optimization disabled in next.config.mjs (`unoptimized: true`)

## Configuration Notes

**TypeScript**
- Strict mode enabled
- Full type checking during builds (no errors ignored)
- Path aliases configured in tsconfig.json
- CSS module declarations in global.d.ts

**Build Configuration**
- Image optimization disabled (`unoptimized: true`)
- All pages statically generated at build time
- No API routes or server-side rendering

## Development Context

The site is a marketing/portfolio site for physical arcade machines that create interactive video art. Content focuses on:
- Three machines: Hypno (available), Enso (coming 2025), Future (in development)
- Three installation tiers for events/venues
- Technical specifications and features
- Gallery and contact pages

The codebase uses v0.app as the generator (noted in metadata), indicating it may have been scaffolded with AI assistance.
