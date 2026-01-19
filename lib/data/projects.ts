export const CATEGORIES = [
  'E-commerce',
  'Web Development',
  'App Development',
  'Web Design',
  'Branding',
  'Marketing',
] as const

export type Category = (typeof CATEGORIES)[number]

export type Project = {
  title: string
  slug: string
  description: string
  image: string
  tags: string[]
  categories: Category[]
  year: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  imageVariant?: 'vertical' | 'horizontal' | 'square'
}

const projects: Project[] = [
  {
    title: 'Benighted',
    slug: 'benighted',
    description: 'An e-commerce website for a local jewellery business, designed and developed end-to-end. Features a custom-built CMS for product management, customer interaction, and order fulfilment.',
    image: '/images/benighted.avif',
    tags: ['NextJS', 'Payload', 'SQLite', 'Stripe',],
    categories: ['E-commerce','Web Development', 'Web Design'],
    year: '2025',
    liveUrl: 'https://benightedbeads.com/',
    featured: true,
  },
  {
    title: 'Threads Clone',
    slug: 'threads-clone',
    description:
      'A pixel-perfect clone of the Threads social media app. Includes a suite of automated end-to-end and integration tests, custom auth with email verification, and AI content moderation. Built with Next.js 15, React 19, Drizzle, and SQLite.',
    image: '/images/threads-clone.webp',
    tags: ['NextJS', 'Drizzle', 'SQLite', 'Vitest', 'Playwright'],
    categories: ['Web Development', 'Web Design'],
    year: '2024',
    liveUrl: 'https://threads-clone-omega-bay.vercel.app/',
    githubUrl: 'https://github.com/columk1/threads-clone',
  },
  {
    title: 'BizPortraits',
    slug: 'bizportraits',
    description:
      'An AI-powered headshot generator that transforms selfies into studio-quality portraits in seconds, with Stripe integration for secure payments.',
    image: '/images/bizportraits.webp',
    tags: ['NextJS', 'Drizzle', 'SQLite', 'Stripe'],
    categories: ['E-commerce', 'Web Development', 'Web Design'],
    year: '2024',
    liveUrl: 'https://bizportraits.com/',
    githubUrl: 'https://github.com/columk1/headshot-generator',
    featured: true,
  },
  {
    title: 'Paragliding Dashboard',
    slug: 'paragliding-dashboard',
    description:
      'A weather dashboard for local paragliding pilots. Features a scrollable dynamic wind graph, displays for multiple weather APIs, an interactive UI for viewing windgrams, and a live camera feed of the local mountain.',
    image: '/images/paragliding-dashboard.png',
    imageVariant: 'vertical',
    tags: ['Typescript', 'React', 'NextJS', 'Recharts'],
    categories: ['Web Development', 'Web Design'],
    year: '2023',
    liveUrl: 'https://chieflap.vercel.app/',
    githubUrl: 'https://github.com/columk1/wx-dashboard/',
    featured: true,
  },
  {
    title: 'File Uploader',
    slug: 'file-uploader',
    description:
      'A cloud storage application for file management and sharing. Built with Typescript, Express, EJS and Web Components. Features a modular architecture with various performance and security optimizations.',
    image: '/images/file-uploader.png',
    tags: ['Typescript', 'Node', 'Express', 'EJS', 'PostgreSQL', 'Docker'],
    categories: ['Web Development', 'Web Design'],
    year: '2023',
    liveUrl: 'https://columk-file-uploader.up.railway.app/',
    githubUrl: 'https://github.com/columk1/file-uploader',
  },
  {
    title: 'Messaging App',
    slug: 'messaging-app',
    description:
      'A real-time messaging app built with Next.js using React, Tailwind, Prisma, Postgres, NextAuth, and Pusher.',
    image: '/images/messaging-app.png',
    tags: ['NextJS', 'Typescript', 'Prisma', 'Postgres', 'Tailwind'],
    categories: ['Web Development'],
    year: '2023',
    liveUrl: 'https://messaging-app-azure.vercel.app/',
    githubUrl: 'https://github.com/columk1/messaging-app',
  },
  {
    title: 'Blog API',
    slug: 'blog-api',
    description:
      'A REST API for my personal blog using Node, Express, and MongoDB. I built a simple CMS to interact with the API using React and Tailwind. It includes a markdown previewer with syntax highlighting. Authentication is handled using JWTs via access and refresh tokens stored in HTTP-only cookies.',
    image: '/images/blog-api.png',
    tags: ['Node', 'Express', 'MongoDB', 'React', 'Tailwind'],
    categories: ['Web Development'],
    year: '2023',
    githubUrl: 'https://github.com/columk1/blog-api',
  },
  {
    title: "Where's Alex Honnold?",
    slug: 'wheres-alex-honnold',
    description:
      "A hidden object puzzle for climbers. (Think Where's Wally on El Cap). Players are timed as they search a draggable high-resolution image for famous rock features.",
    image: '/images/wheres-alex.png',
    tags: ['React', 'Firebase', 'Vite'],
    categories: ['Web Development'],
    year: '2022',
    liveUrl: 'https://wheres-honnold.netlify.app/',
    githubUrl: 'https://github.com/columk1/wheres-alex-honnold',
  },
  {
    title: 'CV Generator',
    slug: 'cv-generator',
    description: 'A simple CV Generator.',
    image: '/images/cv-generator.png',
    tags: ['React', 'PostCSS', 'Vite'],
    categories: ['Web Development'],
    year: '2022',
    liveUrl: 'https://odin-cv-generator.netlify.app',
    githubUrl: 'https://github.com/columk1/cv-application',
  },
  {
    title: 'Battleship',
    slug: 'battleship',
    description:
      'An MVC battleship game in Vanilla JS. The goal with this was to practice TDD. Drag and drop to position ships. Computer opponent uses a hunt and target algorithm.',
    image: '/images/battleship.png',
    tags: ['Javascript', 'HTML', 'CSS', 'Webpack'],
    categories: ['Web Development'],
    year: '2022',
    liveUrl: 'https://top-battleship.netlify.app/',
    githubUrl: 'https://github.com/columk1/battleship',
  },
  {
    title: 'Memory Game',
    slug: 'memory-game',
    description: 'A memory game. Players are scored based on speed and accuracy.',
    image: '/images/memory-game.jpg',
    tags: ['React', 'Vite'],
    categories: ['Web Development', 'Web Design'],
    year: '2022',
    liveUrl: 'https://columk-memory-card.netlify.app/',
    githubUrl: 'https://github.com/columk1/memory-card',
  },
  {
    title: 'Pixel Pad',
    slug: 'pixel-pad',
    description: 'A pixel art tool in vanilla JS.',
    image: '/images/pixel-pad.png',
    tags: ['Javascript', 'HTML', 'CSS'],
    categories: ['Web Development'],
    year: '2021',
    liveUrl: 'https://pixel-pad.netlify.app/',
    githubUrl: 'https://github.com/columk1/pixel-pad',
  },
]

export default projects
