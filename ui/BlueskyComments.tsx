'use client'

import { Heart, MessageSquare, Repeat2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

type BlueskyCommentsProps = {
  url: string
}

type ThreadViewPost = {
  post?: {
    uri?: string
    cid?: string
    author?: {
      did?: string
      handle?: string
      displayName?: string
      avatar?: string
    }
    replyCount?: number
    repostCount?: number
    likeCount?: number
    record?: {
      text?: string
      createdAt?: string
    }
  }
  replies?: ThreadViewPost[]
}

type GetPostThreadResponse = {
  thread?: ThreadViewPost
}

const MAX_DEPTH = 5

function atUriToBskyUrl(uri?: string) {
  if (!uri) return null
  if (!uri.startsWith('at://')) return null
  // at://did:plc:.../app.bsky.feed.post/<rkey>
  const rest = uri.slice('at://'.length)
  const [repo, collection, rkey] = rest.split('/')
  if (!repo || collection !== 'app.bsky.feed.post' || !rkey) return null
  return `https://bsky.app/profile/${repo}/post/${rkey}`
}

function formatCreatedAt(createdAt?: string) {
  if (!createdAt) return null
  try {
    return new Date(createdAt).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return null
  }
}

function countReplies(thread?: ThreadViewPost): number {
  if (!thread?.replies?.length) return 0
  return thread.replies.reduce((acc, r) => acc + 1 + countReplies(r), 0)
}

function BlueskyReply({ thread, depth }: { thread: ThreadViewPost; depth: number }) {
  const authorName = thread.post?.author?.displayName || thread.post?.author?.handle || 'Unknown'
  const authorHandle = thread.post?.author?.handle
  const authorDid = thread.post?.author?.did
  const postUrl = atUriToBskyUrl(thread.post?.uri)
  const authorProfileUrl = authorHandle
    ? `https://bsky.app/profile/${authorHandle}`
    : authorDid
      ? `https://bsky.app/profile/${authorDid}`
      : null
  const createdAt = formatCreatedAt(thread.post?.record?.createdAt)
  const text = thread.post?.record?.text || ''
  const replyCount = thread.post?.replyCount ?? 0
  const repostCount = thread.post?.repostCount ?? 0
  const likeCount = thread.post?.likeCount ?? 0

  return (
    <div
      className='flex flex-col gap-2 border border-border bg-bg-primary px-4 py-3'
      style={{ marginLeft: depth * 12 }}
    >
      <div className='flex items-baseline justify-between gap-4'>
        <div className='flex min-w-0 items-baseline gap-2'>
          {authorProfileUrl ? (
            <a
              className='flex min-w-0 items-baseline gap-2 hover:underline'
              href={authorProfileUrl}
              target='_blank'
              rel='noreferrer'
            >
              <p className='truncate font-normal text-text-primary'>{authorName}</p>
              {authorHandle && <p className='truncate text-xs text-text-secondary'>@{authorHandle}</p>}
            </a>
          ) : (
            <>
              <p className='truncate font-normal text-text-primary'>{authorName}</p>
              {authorHandle && <p className='truncate text-xs text-text-secondary'>@{authorHandle}</p>}
            </>
          )}
        </div>
        {createdAt ? (
          postUrl ? (
            <a
              className='whitespace-nowrap text-xs text-text-secondary hover:underline'
              href={postUrl}
              target='_blank'
              rel='noreferrer'
            >
              <time>{createdAt}</time>
            </a>
          ) : (
            <time className='whitespace-nowrap text-xs text-text-secondary'>{createdAt}</time>
          )
        ) : null}
      </div>
      {text && <p className='whitespace-pre-wrap break-words text-sm text-text-prose'>{text}</p>}
      <div className='flex items-center gap-4 text-xs text-text-secondary'>
        <div className='flex items-center gap-1'>
          <MessageSquare size={14} />
          <span>{replyCount ? replyCount : ''}</span>
        </div>
        <div className='flex items-center gap-1'>
          <Repeat2 size={14} />
          <span>{repostCount ? repostCount : ''}</span>
        </div>
        <div className='flex items-center gap-1'>
          <Heart size={14} />
          <span>{likeCount ? likeCount : ''}</span>
        </div>
      </div>
      {depth < MAX_DEPTH && thread.replies?.length ? (
        <div className='flex flex-col gap-2 pt-1'>
          {thread.replies.map((reply, index) => (
            <BlueskyReply
              key={reply.post?.uri ?? reply.post?.cid ?? `${depth + 1}-${index}`}
              thread={reply}
              depth={depth + 1}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default function BlueskyComments({ url }: BlueskyCommentsProps) {
  const [thread, setThread] = useState<ThreadViewPost | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const parsed = useMemo(() => {
    try {
      const u = new URL(url)
      const segments = u.pathname.split('/').filter(Boolean)
      if (u.hostname !== 'bsky.app' || segments.length < 4) return null
      if (segments[0] !== 'profile' || segments[2] !== 'post') return null

      const profile = segments[1]
      const rkey = segments[3]
      if (!profile || !rkey) return null

      return { profile, rkey, url: u.toString() }
    } catch {
      return null
    }
  }, [url])

  const bskyWebUrl = useMemo(() => parsed?.url ?? url, [parsed, url])

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)

      if (!parsed) {
        setThread(null)
        setError('Invalid Bluesky post URL')
        setLoading(false)
        return
      }

      try {
        const did = parsed.profile.startsWith('did:')
          ? parsed.profile
          : await (async () => {
            const resolveUrl = new URL(
              'https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle'
            )
            resolveUrl.searchParams.set('handle', parsed.profile)

            const resolveRes = await fetch(resolveUrl.toString())
            if (!resolveRes.ok) {
              throw new Error(`Unable to resolve Bluesky handle (${resolveRes.status})`)
            }

            const resolveData = (await resolveRes.json()) as { did?: string }
            if (!resolveData.did) {
              throw new Error('Unable to resolve Bluesky handle')
            }

            return resolveData.did
          })()

        const atUri = `at://${did}/app.bsky.feed.post/${parsed.rkey}`
        const url = new URL('https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread')
        url.searchParams.set('uri', atUri)

        const res = await fetch(url.toString())
        if (!res.ok) {
          throw new Error(`Unable to fetch Bluesky thread (${res.status})`)
        }

        const data = (await res.json()) as GetPostThreadResponse
        if (!cancelled) setThread(data.thread ?? null)
      } catch (e) {
        if (!cancelled) {
          setThread(null)
          setError(e instanceof Error ? e.message : 'Unable to fetch Bluesky thread')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [parsed])

  const replyCount = useMemo(() => countReplies(thread ?? undefined), [thread])

  return (
    <section className='m-auto mt-12 flex w-full max-w-[70ch] flex-col gap-4' aria-label='Bluesky comments'>
      <div className='flex items-baseline justify-between gap-4'>
        <h2 className='text-xl font-normal text-text-primary'>Comments</h2>
        <a
          className='text-sm text-link hover:underline'
          href={bskyWebUrl}
          target='_blank'
          rel='noreferrer'
        >
          Discuss on Bluesky
        </a>
      </div>

      {loading ? <p className='text-sm text-text-secondary'>Loading comments…</p> : null}

      {!loading && error ? (
        <p className='text-sm text-text-secondary'>
          {error}.{' '}
          <a className='text-accent hover:underline' href={bskyWebUrl} target='_blank' rel='noreferrer'>
            View on Bluesky
          </a>
        </p>
      ) : null}

      {!loading && !error && !thread ? (
        <p className='text-sm text-text-secondary'>No comments yet.</p>
      ) : null}

      {!loading && !error && thread ? (
        <>
          {replyCount ? (
            <p className='text-xs text-text-secondary'>{replyCount} repl{replyCount === 1 ? 'y' : 'ies'}</p>
          ) : null}
          {thread.replies?.length ? (
            <div className='flex flex-col gap-3'>
              {thread.replies.map((reply, index) => (
                <BlueskyReply
                  key={reply.post?.uri ?? reply.post?.cid ?? `0-${index}`}
                  thread={reply}
                  depth={0}
                />
              ))}
            </div>
          ) : (
            <p className='text-sm text-text-secondary'>No comments yet.</p>
          )}
        </>
      ) : null}
    </section>
  )
}
