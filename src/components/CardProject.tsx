import { GitHub } from '@icons/Github.tsx'
import { PointIcon } from '@icons/Point.tsx'

interface Props {
  name: string
  description: string
  url: string
  repo: string
  tags: string[]
  active: boolean
  className?: string
}

export const CardProject = ({ name, description, url, repo, tags, active, className }: Props) => {
  return (
    <article class={`w-full border-b pb-4 border-zinc-800 ${className}`}>
      <header class='flex gap-4 items-center'>
        <h3 class='w-fit text-lg font-semibold capitalize text-white text-balance hover:underline flex items-center gap-1'>
        {
          active && (
            <PointIcon className='size-5 animate-pulse text-yellow-200' />
          )
        }
          <a href={url} target="_blank">{name}</a>
        </h3>
        <a href={repo} class='hover:text-yellow-400 duration-200' target="_blank">
          <GitHub className='size-4' />
        </a>
      </header>
      <p class='py-2 text-sm truncate'>{description}</p>
      <footer>
        <p class='mt-2 text-sm tracking-wider uppercase text-yellow-200 '>
          {
            tags.map((tag, index) => {
              return (
                <span key={index} class='mr-3'>{tag}</span>
              )
            })
          }
        </p>
      </footer>
    </article>
  )
}
