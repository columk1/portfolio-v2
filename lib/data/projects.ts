export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: 'File Uploader',
    description:
      'A cloud storage application for file management and sharing. Built with Typescript, Express, EJS and Web Components. Features a modular architecture with various performance and security optimizations.',
    image: '/images/file-uploader.png',
    tags: ['Typescript', 'Node', 'Express', 'EJS', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://columk-file-uploader.up.railway.app/',
    githubUrl: 'https://github.com/columk1/file-uploader',
  },
  {
    title: 'Messaging App',
    description:
      'A real-time messaging app built with Next.js using React, Tailwind, Prisma, Postgres, NextAuth and Pusher. Although initially modelled on a tutorial with a slightly different stack, I spent a few weeks addressing issues, improving privacy, security and performance, replacing dependencies and adding new features of my own.',
    image: '/images/messaging-app.png',
    tags: ['NextJS', 'Typescript', 'Prisma', 'Postgres', 'Tailwind'],
    liveUrl: 'https://messaging-app-azure.vercel.app/',
    githubUrl: 'https://github.com/columk1/messaging-app',
  },
  {
    title: 'Blog API',
    description:
      'A REST API for my personal blog using Node, Express and MongoDB. I built a simple CMS to interact with the API using React and Tailwind. It includes a markdown previewer with syntax highlighting. Authentication is handled using JWTs via access and refresh tokens stored in HTTP-only cookies.',
    image: '/images/blog-api.png',
    tags: ['Node', 'Express', 'MongoDB', 'React', 'Tailwind'],
    githubUrl: 'https://github.com/columk1/blog-api',
  },
  {
    title: 'Paragliding Dashboard',
    description:
      'A weather dashboard for local paragliding pilots. Features a scrollable dynamic wind graph, displays for multiple weather APIs, an interactive UI for viewing windgrams and a live camera feed of the local mountain.',
    image: '/images/paragliding-dashboard.png',
    tags: ['Typescript', 'React', 'NextJS', 'Recharts'],
    liveUrl: 'https://chieflap.vercel.app/',
    githubUrl: 'https://github.com/columk1/wx-dashboard/',
  },
  {
    title: "Where's Alex Honnold?",
    description:
      "A hidden object puzzle for climbers. (Think Where's Wally on El Cap). Players are timed as they search a draggable high-resolution image for famous rock features.",
    image: '/images/wheres-alex.png',
    tags: ['React', 'Firebase', 'Vite'],
    liveUrl: 'https://wheres-honnold.netlify.app/',
    githubUrl: 'https://github.com/columk1/wheres-alex-honnold',
  },
  {
    title: 'CV Generator',
    description:
      'A React CV Generator. Users can add additional sections for experience, education, or their own custom sections. A print preview is updated live and can be saved as a PDF.',
    image: '/images/cv-generator.png',
    tags: ['React', 'PostCSS', 'Vite'],
    liveUrl: 'https://odin-cv-generator.netlify.app',
    githubUrl: 'https://github.com/columk1/cv-application',
  },
  {
    title: 'Battleship',
    description:
      'An MVC battleship game in Vanilla JS, developed using TDD and built with Webpack. Drag and drop to position ships. Computer opponent uses a hunt and target algorithm.',
    image: '/images/battleship.png',
    tags: ['Javascript', 'HTML', 'CSS', 'Webpack'],
    liveUrl: 'https://top-battleship.netlify.app/',
    githubUrl: 'https://github.com/columk1/battleship',
  },
  {
    title: 'Memory Game',
    description: 'A memory game built in React. Players are scored based on speed and accuracy.',
    image: '/images/memory-game.jpg',
    tags: ['React', 'Vite'],
    liveUrl: 'https://columk-memory-card.netlify.app/',
    githubUrl: 'https://github.com/columk1/memory-card',
  },
  {
    title: 'Pixel Pad',
    description: 'A pixel art tool in vanilla JS. One of my first web projects.',
    image: '/images/pixel-pad.png',
    tags: ['Javascript', 'HTML', 'CSS'],
    liveUrl: 'https://pixel-pad.netlify.app/',
    githubUrl: 'https://github.com/columk1/pixel-pad',
  },
]

export default projects
