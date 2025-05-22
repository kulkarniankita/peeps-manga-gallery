# Peeps Gallery

A modern manga gallery application built with Next.js 15, React 19, and Tailwind CSS. This project showcases a beautiful and responsive UI for displaying manga images with smooth animations and transitions.

## Features

- Modern UI with Tailwind CSS
- Responsive grid layout (1-3 columns based on screen size)
- Smooth animations using Framer Motion
- Image gallery with hover effects
- TypeScript support
- ESLint for code quality
- Gradient text effects
- Responsive image handling with Next.js Image component

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library

## Project Structure

### Core Components

- `/app/page.tsx` - Main page component

  - Renders the manga gallery grid
  - Implements responsive layout
  - Uses gradient text effects
  - Manages the overall card container

- `/components/PeepsClient.tsx` - Individual manga card component
  - Client-side component with animations
  - Handles image display with Next.js Image
  - Implements hover effects and transitions
  - Manages card layout and styling

### Directory Structure

- `/app` - Next.js app directory

  - `page.tsx` - Main gallery page
  - `layout.tsx` - Root layout component
  - `globals.css` - Global styles
  - `favicon.ico` - Website icon

- `/components` - Reusable React components

  - `PeepsClient.tsx` - Manga card component
  - `/ui` - UI components (cards, buttons, etc.)

- `/lib` - Utility functions and shared code

  - Contains manga data and content

- `/public` - Static assets

  - Images and other static files

- `/@types` - TypeScript type definitions
  - Type definitions for manga data

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
