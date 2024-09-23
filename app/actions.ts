'use server'

import { cookies } from 'next/headers'

export async function setThemeCookie(theme: string) {
  cookies().set({
    name: 'theme',
    value: theme,
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  })
}
