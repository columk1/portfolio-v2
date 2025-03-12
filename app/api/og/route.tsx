import { baseUrl } from '@/lib/config'
import { ImageResponse } from 'next/og'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') || 'Blog | Colum Kelly'

  return new ImageResponse(
    (
      <div tw='flex w-full h-full p-8 items-center justify-center text-[#b5b5b5] bg-[#181818]'>
        <div tw='flex w-full h-full border-2 border-[#834bdb]'>
          <div tw='flex w-full h-full border border-[#834bdb] m-4'>
            <div tw='flex items-center justify-center w-full py-12 px-8'>
              <div tw='flex mr-14'>
                <div tw='absolute left-2 top--4 w-8 h-8 mr-4 border border-[#834bdb]' />
                <div tw='absolute left-1 top--3 w-8 h-8 mr-4 border border-[#834bdb]' />
                <div tw='absolute top--2 w-8 h-8 border border-[#834bdb]' />
              </div>
              <h2 tw='flex text-4xl font-bold tracking-tight text-left'>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
