export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  categories: string[]
  year: string
  liveUrl?: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: 'Threads Clone',
    description:
      'A pixel-perfect clone of the Threads social media app. Includes a suite of automated end-to-end and integration tests, custom auth with email verification, and AI content moderation. Built with Next.js 15, React 19, Drizzle, and SQLite.',
    image: '/images/threads-clone.webp',
    tags: ['NextJS', 'Drizzle', 'SQLite', 'Vitest', 'Playwright'],
    categories: ['App Development', 'Web Design'],
    year: '2024',
    liveUrl: 'https://threads-clone-omega-bay.vercel.app/',
    githubUrl: 'https://github.com/columk1/threads-clone',
  },
  {
    title: 'BizPortraits',
    description:
      'An AI-powered headshot generator that transforms selfies into studio-quality portraits in seconds, with Stripe integration for secure payments.',
    image: '/images/bizportraits.webp',
    tags: ['NextJS', 'Drizzle', 'SQLite', 'Stripe'],
    categories: ['E-commerce', 'App Development', 'Web Design'],
    year: '2024',
    liveUrl: 'https://bizportraits.com/',
    githubUrl: 'https://github.com/columk1/headshot-generator',
  },
  {
    title: 'Paragliding Dashboard',
    description:
      'A weather dashboard for local paragliding pilots. Features a scrollable dynamic wind graph, displays for multiple weather APIs, an interactive UI for viewing windgrams, and a live camera feed of the local mountain.',
    image: '/images/paragliding-dashboard.png',
    tags: ['Typescript', 'React', 'NextJS', 'Recharts'],
    categories: ['App Development', 'Web Design'],
    year: '2023',
    liveUrl: 'https://chieflap.vercel.app/',
    githubUrl: 'https://github.com/columk1/wx-dashboard/',
  },
  {
    title: 'File Uploader',
    description:
      'A cloud storage application for file management and sharing. Built with Typescript, Express, EJS and Web Components. Features a modular architecture with various performance and security optimizations.',
    image: '/images/file-uploader.png',
    tags: ['Typescript', 'Node', 'Express', 'EJS', 'PostgreSQL', 'Docker'],
    categories: ['App Development', 'Web Design'],
    year: '2023',
    liveUrl: 'https://columk-file-uploader.up.railway.app/',
    githubUrl: 'https://github.com/columk1/file-uploader',
  },
  {
    title: 'Messaging App',
    description:
      'A real-time messaging app built with Next.js using React, Tailwind, Prisma, Postgres, NextAuth, and Pusher.',
    image: '/images/messaging-app.png',
    tags: ['NextJS', 'Typescript', 'Prisma', 'Postgres', 'Tailwind'],
    categories: ['App Development', 'Web Design'],
    year: '2023',
    liveUrl: 'https://messaging-app-azure.vercel.app/',
    githubUrl: 'https://github.com/columk1/messaging-app',
  },
  {
    title: 'Blog API',
    description:
      'A REST API for my personal blog using Node, Express, and MongoDB. I built a simple CMS to interact with the API using React and Tailwind. It includes a markdown previewer with syntax highlighting. Authentication is handled using JWTs via access and refresh tokens stored in HTTP-only cookies.',
    image: '/images/blog-api.png',
    tags: ['Node', 'Express', 'MongoDB', 'React', 'Tailwind'],
    categories: ['App Development', 'Web Design'],
    year: '2023',
    githubUrl: 'https://github.com/columk1/blog-api',
  },
  {
    title: "Where's Alex Honnold?",
    description:
      "A hidden object puzzle for climbers. (Think Where's Wally on El Cap). Players are timed as they search a draggable high-resolution image for famous rock features.",
    image: '/images/wheres-alex.png',
    tags: ['React', 'Firebase', 'Vite'],
    categories: ['App Development', 'Web Design'],
    year: '2022',
    liveUrl: 'https://wheres-honnold.netlify.app/',
    githubUrl: 'https://github.com/columk1/wheres-alex-honnold',
  },
  {
    title: 'CV Generator',
    description: 'A simple CV Generator.',
    image: '/images/cv-generator.png',
    tags: ['React', 'PostCSS', 'Vite'],
    categories: ['App Development', 'Web Design'],
    year: '2022',
    liveUrl: 'https://odin-cv-generator.netlify.app',
    githubUrl: 'https://github.com/columk1/cv-application',
  },
  {
    title: 'Battleship',
    description:
      'An MVC battleship game in Vanilla JS. The goal with this was to practice TDD. Drag and drop to position ships. Computer opponent uses a hunt and target algorithm.',
    image: '/images/battleship.png',
    tags: ['Javascript', 'HTML', 'CSS', 'Webpack'],
    categories: ['App Development', 'Web Design'],
    year: '2022',
    liveUrl: 'https://top-battleship.netlify.app/',
    githubUrl: 'https://github.com/columk1/battleship',
  },
  {
    title: 'Memory Game',
    description: 'A memory game. Players are scored based on speed and accuracy.',
    image: '/images/memory-game.jpg',
    tags: ['React', 'Vite'],
    categories: ['App Development', 'Web Design'],
    year: '2022',
    liveUrl: 'https://columk-memory-card.netlify.app/',
    githubUrl: 'https://github.com/columk1/memory-card',
  },
  {
    title: 'Pixel Pad',
    description: 'A pixel art tool in vanilla JS.',
    image: '/images/pixel-pad.png',
    tags: ['Javascript', 'HTML', 'CSS'],
    categories: ['App Development', 'Web Design'],
    year: '2021',
    liveUrl: 'https://pixel-pad.netlify.app/',
    githubUrl: 'https://github.com/columk1/pixel-pad',
  },
]

export default projects
