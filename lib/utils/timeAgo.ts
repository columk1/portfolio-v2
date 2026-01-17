export type DateDiffFormat = 'long' | 'short'

type DateDiff = {
  value: number
  unit: 'now' | 'second' | 'minute' | 'hour' | 'day' | 'month'
  earlier: Date
  later: Date
}

const NOW = 5
const MINUTE = 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const MONTH_30 = DAY * 30

/**
 * Returns the difference between `earlier` and `later` dates, based on
 * opinionated rules.
 *
 * - All month are considered exactly 30 days.
 * - Dates assume `earlier` <= `later`, and will otherwise return 'now'.
 * - All values round down
 */
export function dateDiff(
  earlier: number | string | Date,
  later: number | string | Date,
  rounding: 'up' | 'down' = 'down',
): DateDiff {
  let diff = {
    value: 0,
    unit: 'now' as DateDiff['unit'],
  }

  const e = new Date(earlier)
  const l = new Date(later)
  const diffSeconds = Math.floor((l.getTime() - e.getTime()) / 1000)

  if (!Number.isFinite(diffSeconds) || diffSeconds < 0) {
    return {
      ...diff,
      earlier: e,
      later: l,
    }
  }

  if (diffSeconds < NOW) {
    diff = {
      value: 0,
      unit: 'now' as DateDiff['unit'],
    }
  } else if (diffSeconds < MINUTE) {
    diff = {
      value: diffSeconds,
      unit: 'second' as DateDiff['unit'],
    }
  } else if (diffSeconds < HOUR) {
    const value = rounding === 'up' ? Math.ceil(diffSeconds / MINUTE) : Math.floor(diffSeconds / MINUTE)
    diff = {
      value,
      unit: 'minute' as DateDiff['unit'],
    }
  } else if (diffSeconds < DAY) {
    const value = rounding === 'up' ? Math.ceil(diffSeconds / HOUR) : Math.floor(diffSeconds / HOUR)
    diff = {
      value,
      unit: 'hour' as DateDiff['unit'],
    }
  } else if (diffSeconds < MONTH_30) {
    const value = rounding === 'up' ? Math.ceil(diffSeconds / DAY) : Math.floor(diffSeconds / DAY)
    diff = {
      value,
      unit: 'day' as DateDiff['unit'],
    }
  } else {
    const value = rounding === 'up' ? Math.ceil(diffSeconds / MONTH_30) : Math.floor(diffSeconds / MONTH_30)
    diff = {
      value,
      unit: 'month' as DateDiff['unit'],
    }
  }

  return {
    ...diff,
    earlier: e,
    later: l,
  }
}

/**
 * Accepts a `DateDiff` and returns the difference between `earlier` and
 * `later` dates, formatted as a natural language string.
 *
 * - All month are considered exactly 30 days.
 * - Dates assume `earlier` <= `later`, and will otherwise return 'now'.
 * - Differences >= 360 days are returned as the locale date string
 * - All values round down
 */
export function formatDateDiff({
  diff,
  format = 'short',
}: {
  diff: DateDiff
  format?: DateDiffFormat
}): string {
  const long = format === 'long'

  switch (diff.unit) {
    case 'now': {
      return 'now'
    }
    case 'second': {
      if (!long) return `${diff.value}s`
      return `${diff.value} second${diff.value === 1 ? '' : 's'}`
    }
    case 'minute': {
      if (!long) return `${diff.value}m`
      return `${diff.value} minute${diff.value === 1 ? '' : 's'}`
    }
    case 'hour': {
      if (!long) return `${diff.value}h`
      return `${diff.value} hour${diff.value === 1 ? '' : 's'}`
    }
    case 'day': {
      if (!long) return `${diff.value}d`
      return `${diff.value} day${diff.value === 1 ? '' : 's'}`
    }
    case 'month': {
      if (diff.value < 12) {
        if (!long) return `${diff.value}mo`
        return `${diff.value} month${diff.value === 1 ? '' : 's'}`
      }
      return diff.earlier.toLocaleDateString()
    }
  }
}

export function formatTimeAgo(
  earlier: number | string | Date,
  later: number | string | Date = Date.now(),
  options?: { format?: DateDiffFormat },
): string {
  const diff = dateDiff(earlier, later, 'down')
  return formatDateDiff({ diff, format: options?.format })
}
