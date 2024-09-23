export function formatDateString(date: string) {
  const parsedDate = new Date(`${date}T00:00:00-08:00`) // PST

  return parsedDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
