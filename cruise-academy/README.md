# Shrivastava Group of Institute

A modern, production-ready website for Shrivastava Group of Institute, an educational institution run by Rohit Shrivastava focused on school education, competitive exams, career guidance, study abroad support, and seafarer training.

## Features

- **Modern UI**: Clean, premium design with ocean-inspired theme
- **Responsive**: Fully responsive across all devices
- **Animations**: Smooth animations using Framer Motion
- **Glassmorphism**: Modern glassmorphism effects
- **Sections**: Hero, About, Programs, Seafarer Training, Admission Process, Testimonials, Stats, Blog, CTA, Footer

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Linting**: ESLint

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the website.

## Build

```bash
npm run build
```

## Project Structure

```
app/
  page.tsx          # Home page
  about/page.tsx    # About page
  programs/page.tsx # Programs page
  contact/page.tsx  # Contact page
  layout.tsx        # Root layout
  globals.css       # Global styles

components/
  Hero.tsx
  About.tsx
  Programs.tsx
  SeafarerSection.tsx
  AdmissionProcess.tsx
  Testimonials.tsx
  Stats.tsx
  Blog.tsx
  CTA.tsx
  Footer.tsx

sections/           # For future section components
lib/               # Utility functions
```

## Deployment

Deploy on Vercel, Netlify, or any platform supporting Next.js.

## License

This project is private and proprietary to Shrivastava Group of Institute.
