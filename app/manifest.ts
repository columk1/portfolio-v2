import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Colum Kelly',
    short_name: 'Colum Kelly',
    description: "Colum's Blog and Portfolio",
    start_url: '/',
    display: 'standalone',
    background_color: '#242424',
    theme_color: '#242424',
    icons: [
      {
        src: '/images/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
