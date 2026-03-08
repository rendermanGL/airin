# Brand Marketing Portfolio - Airin John

## Overview

This is a modern portfolio website for Airin John, a Brand Marketing Manager with over 6 years of experience in multi-channel marketing campaigns. The application showcases her professional work, skills, and achievements through an interactive portfolio format with document viewing capabilities. The site uses a "Futuristic Mission Control HUD" design aesthetic with glassmorphism, dark space-themed backgrounds, and data-readout typography.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom HUD design system (glassmorphism, dark theme)
- **Typography**: Space Grotesk (single font, weight = hierarchy)
- **Animations**: Framer Motion for smooth page transitions and animations
- **3D Effects**: Three.js for particle system background effects (violet theme)
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Analytics**: Google Analytics GA4 (G-6DHC4RNDG2)

### Design System
- **Color Palette**: Dark space theme (#03000A void, #0A0614 deep, #7B5EA7 accent-1, #A378FF accent-2, #00FFB2 signal green)
- **Glass Panels**: rgba(255,255,255,0.04) bg, rgba(255,255,255,0.07) border, blur(12px)
- **HUD Elements**: Grid overlay, corner brackets, scroll progress bar, status indicator
- **Typography Scale**: Hero 300/clamp, Section titles 300/clamp, Body 300/0.9rem, Nav 400/0.7rem, HUD labels 300/0.65rem, Data readouts 500/0.75rem
- **Global Rules**: border-radius: 0 everywhere, no white backgrounds, min 140px section padding

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **File Storage**: Base64 encoded PDF documents stored in database
- **Session Management**: Built-in Express session handling

### Build System
- **Bundler**: Vite for development and client-side bundling
- **Server Bundling**: esbuild for production server compilation
- **Development**: Hot module replacement with Vite middleware
- **TypeScript**: Strict configuration with path aliases

## Key Components

### Database Schema
- **users**: User authentication (id, username, password)
- **contacts**: Contact form submissions (name, email, subject, message, timestamp)
- **subscribers**: Newsletter subscriptions (email, timestamp)
- **documents**: Portfolio documents (title, description, filename, content_type, base64_data, timestamp)

### API Routes
- `GET /api/documents` - Fetch all documents
- `GET /api/documents/:id` - Fetch specific document
- `GET /api/documents/:id/file` - Download document file
- `POST /api/contact` - Submit contact form
- `POST /api/admin/login` - Admin authentication
- `GET /api/admin/contacts` - Fetch contact messages (auth required)
- `POST /api/admin/logout` - Admin logout

### Frontend Pages
- **Home**: Hero section (HUD layout), about, skills, testimonials, contact
- **Portfolio**: Main portfolio categories with glass-panel cards
- **Strategic Marketing**: Campaign showcases with metrics
- **Customer Engagement**: Community and engagement strategies
- **Brand Storytelling**: Multi-channel marketing campaigns
- **Awards Recognition**: Industry awards and achievements
- **Content Writing Samples**: Document viewer for press releases and content
- **Admin Login/Dashboard**: Contact form management

### UI Components
- **HudOverlay**: Grid, corner brackets, status indicator, scroll progress
- **ParticleSystem**: Three.js violet-themed particle network
- **Navbar**: Transparent → frosted glass on scroll, AJ monogram
- **Glass Panels**: Glassmorphism cards used across all sections
- **Custom CSS Classes**: hud-label, data-readout, section-title, gradient-line, glass-panel, cta-primary/secondary/gradient, orb-a/orb-b

## Data Flow

1. **Static Content**: Portfolio information is hardcoded in TypeScript files for performance
2. **Dynamic Documents**: PDF documents stored in PostgreSQL, served via API
3. **Contact Forms**: Form submissions processed through React Hook Form and sent to backend
4. **File Viewing**: Documents fetched from database and displayed in browser
5. **Animations**: Framer Motion handles page transitions and scroll-triggered animations

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless client
- **drizzle-orm**: Type-safe ORM for database operations
- **@radix-ui/***: Headless UI components for accessibility
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **three**: 3D graphics for particle effects
- **react-hook-form + @hookform/resolvers**: Form handling
- **zod**: Schema validation
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **tsx**: TypeScript execution for development
- **vite**: Fast development server and bundler
- **esbuild**: Fast JavaScript bundler for production
- **drizzle-kit**: Database migration and schema management

## Deployment Strategy

### Platform
- **Hosting**: Replit with autoscale deployment
- **Database**: Neon PostgreSQL serverless
- **Build Process**: Vite build for client, esbuild for server
- **Environment**: Node.js 20 with PostgreSQL 16
- **Custom Domain**: airinjohn.com (to be connected)

### Build Configuration
- **Development**: `npm run dev` - runs tsx server with Vite middleware
- **Production Build**: `npm run build` - builds client and server bundles
- **Production Start**: `npm run start` - runs compiled server
- **Database**: `npm run db:push` - applies schema changes

### Port Configuration
- **Server**: Port 5000 (mapped to external port 80)
- **Development**: Port 24678 (mapped to external port 3000)

### SEO & Meta
- Page title: "Airin John | Brand Marketing Manager"
- Meta description: 160 chars professional summary
- Open Graph tags for LinkedIn/WhatsApp previews
- Twitter card tags
- Favicon: SVG with "AJ" initials
- GA4 tracking: G-6DHC4RNDG2

## Recent Changes
- March 8, 2026: Complete visual redesign to "Mission Control HUD" aesthetic - dark theme, glassmorphism, Space Grotesk typography, HUD overlays, ambient orbs, data readout styling across all pages
- March 8, 2026: Added Google Analytics GA4 (G-6DHC4RNDG2)
- March 8, 2026: Added Open Graph + Twitter card meta tags for link previews
- March 8, 2026: Added SVG favicon with AJ monogram
- March 8, 2026: Made email/LinkedIn links clickable in Contact section
- March 8, 2026: Updated footer copy and newsletter description

## User Preferences

Preferred communication style: Simple, everyday language.
