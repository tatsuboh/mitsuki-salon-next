# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application for Mitsuki Salon, built with TypeScript and Tailwind CSS v4. The project uses the Next.js App Router architecture.

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
- **Fonts**: Geist font family (Sans and Mono variants)

### Project Structure
- `/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with metadata and font configuration
  - `page.tsx` - Home page component
  - `globals.css` - Global styles and Tailwind directives
- `/src/components/` - React components directory (currently empty)
- `/public/` - Static assets including logo.jpg

### Key Configuration
- **TypeScript**: Configured with path alias `@/*` mapping to project root
- **ESLint**: Uses Next.js ESLint configuration with flat config format
- **Tailwind CSS**: Uses new v4 setup with @tailwindcss/postcss

### Important Notes
- No testing framework is currently configured
- The project is in its initial state from create-next-app
- A logo.jpg file exists in /public/ but is not yet committed to git