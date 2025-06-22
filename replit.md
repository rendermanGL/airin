# Brand Marketing Portfolio - Airin John

## Overview

This is a modern portfolio website for Airin John, a Brand Marketing Manager with over 5 years of experience in multi-channel marketing campaigns. The application showcases her professional work, skills, and achievements through an interactive portfolio format with document viewing capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS v4 with shadcn/ui component library
- **Animations**: Framer Motion for smooth page transitions and animations
- **3D Effects**: Three.js for particle system background effects
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

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

### Frontend Pages
- **Home**: Hero section, about, skills, testimonials, contact
- **Portfolio**: Main portfolio categories
- **Strategic Marketing**: Campaign showcases with metrics
- **Customer Engagement**: Community and engagement strategies
- **Brand Storytelling**: Multi-channel marketing campaigns
- **Awards Recognition**: Industry awards and achievements
- **Content Writing Samples**: PDF document viewer for press releases and content

### UI Components
- Complete shadcn/ui component library integration
- Custom particle system background
- Responsive navigation with mobile menu
- Interactive skill progress bars
- PDF document viewer
- Contact form with validation
- Newsletter subscription

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

### Build Configuration
- **Development**: `npm run dev` - runs tsx server with Vite middleware
- **Production Build**: `npm run build` - builds client and server bundles
- **Production Start**: `npm run start` - runs compiled server
- **Database**: `npm run db:push` - applies schema changes

### Port Configuration
- **Server**: Port 5000 (mapped to external port 80)
- **Development**: Port 24678 (mapped to external port 3000)

## Recent Changes
- June 22, 2025: Updated Skills.tsx with authentic marketing expertise, leadership skills, and removed emoji headers
- June 22, 2025: Fixed ContentWritingSamples.tsx card layout with equal heights and bottom-pinned Read buttons
- June 22, 2025: Updated ContentWritingSamples.tsx with authentic Wild & The Moon content titles and removed descriptions
- June 22, 2025: Completed AwardsRecognition.tsx layout with proper image paths and consistent flex positioning
- June 22, 2025: Updated BrandStorytelling.tsx with dynamic flex layout, height matching, and alternating positions
- June 22, 2025: Updated CustomerEngagement.tsx with flex layout, height matching, and alternating image positions
- June 22, 2025: Updated StrategicMarketing.tsx layout to use flex with items-stretch for image-text height matching
- June 22, 2025: Fixed admin login authentication flow and resolved HTTP token validation errors
- June 22, 2025: Initial portfolio setup with Wild & The Moon authentic brand imagery

## User Preferences

Preferred communication style: Simple, everyday language.