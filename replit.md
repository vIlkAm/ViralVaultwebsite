# Viral Vault - Elite Content Clipping Platform

## Overview

Viral Vault is a premium content clipping platform that focuses on quality over quantity. The platform connects clients with elite, vetted content creators to deliver guaranteed ROI through data-driven content creation. Unlike traditional platforms that use armies of low-quality clippers, Viral Vault maintains a selective network of trained professionals with continuous performance monitoring.

The application is built as a full-stack web platform with role-based dashboards for clients, clippers, and managers, featuring comprehensive analytics, team management, and content tracking capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state and data fetching
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Design System**: Custom dark theme with professional styling, using Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful API with role-based route protection
- **Session Management**: Express sessions with PostgreSQL storage using connect-pg-simple
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Authentication**: Replit Auth integration with OpenID Connect

### Database Schema Design
The platform uses PostgreSQL with the following key entities:
- **Users**: Role-based system (client, clipper, manager, admin) with profile information
- **Teams**: Client-managed groups with assigned managers and clippers
- **Campaigns**: Content creation projects linked to teams
- **Clips**: Individual content pieces with performance tracking
- **Applications**: Clipper application system for joining the platform
- **Analytics**: Performance metrics and engagement tracking
- **Messages**: Internal communication system

### Role-Based Access Control
- **Clients**: Campaign creation, team management, performance analytics
- **Clippers**: Assignment tracking, performance metrics, leaderboards
- **Managers**: Team oversight, quality control, client relations
- **Admins**: Platform-wide management and application reviews

### Development Environment
- **Build System**: ESBuild for production builds with Vite for development
- **Type Safety**: Full TypeScript implementation across client and server
- **Code Organization**: Monorepo structure with shared schema and utilities
- **Path Aliases**: Configured for clean imports (@/ for client, @shared for shared code)

## External Dependencies

### Database & Storage
- **Neon Database**: Serverless PostgreSQL database with connection pooling
- **Drizzle Kit**: Database migrations and schema management

### Authentication & Security
- **Replit Auth**: OpenID Connect authentication provider
- **Passport.js**: Authentication middleware with OpenID strategy

### UI & Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Google Fonts**: Typography system with Inter and custom font families

### Development Tools
- **Vite Plugins**: Development server enhancements including error overlays and hot module replacement
- **React Hook Form**: Form management with Zod schema validation
- **Date-fns**: Date manipulation and formatting utilities

### Deployment & Runtime
- **Replit Platform**: Integrated development and hosting environment
- **WebSocket Support**: Real-time features using native WebSocket constructor