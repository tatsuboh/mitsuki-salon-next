# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application for Mitsuki Salon (美月), a Japanese relaxation salon in Izumisano, Osaka. Built with TypeScript and Tailwind CSS v4, using Next.js App Router architecture.

## Common Commands

### Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build production-ready application
npm run start        # Start production server
npm run lint         # Run ESLint to check code quality
```

## Architecture

### Technology Stack
- **Framework**: Next.js 16.0.7 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with PostCSS
- **UI Library**: React 19.2.0
- **Fonts**: Noto Serif JP and Zen Maru Gothic from Google Fonts

### Project Structure
- `/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Japanese metadata and font configuration
  - `page.tsx` - Home page with Header, Hero, and Concept components
  - `globals.css` - Global styles with custom animations and Tailwind directives
- `/src/components/` - React components
  - `Header.tsx` - Navigation with scroll detection and mobile menu
  - `Hero.tsx` - Main hero section with animated background
  - `Concept.tsx` - Business concept and services section
- `/public/` - Static assets including logo.jpg and SVG icons

### Key Configuration
- **TypeScript**: Configured with path alias `@/*` mapping to project root
- **ESLint**: Uses Next.js ESLint configuration with flat config format
- **Tailwind CSS**: Uses v4 setup with @tailwindcss/postcss plugin
- **Internationalization**: Japanese content with proper SEO metadata

### Important Notes
- No testing framework is currently configured
- Custom CSS animations for floating elements, bubbles, and fade effects
- Business focus: Body massage + color therapy/tarot services
- Mobile-responsive design with hamburger menu