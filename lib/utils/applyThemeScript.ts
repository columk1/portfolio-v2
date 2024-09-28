export const applyThemeScript = `
  try {
    const themeCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('theme='))
    if (themeCookie) {
      const theme = themeCookie.split('=')[1]
      document.documentElement.classList.toggle('dark', theme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      document.documentElement.classList.toggle('dark', prefersDark)
    }
  } catch (_) {}
`
