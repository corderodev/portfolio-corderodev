import { GitHub } from '@icons/Github.tsx'
import { PointIcon } from '@icons/Point.tsx'

interface Props {
  name: string
  description: string
  url: string
  repo?: string
  tags: string[]
  active: boolean
  className?: string
}

export const CardProject = ({
  name,
  description,
  url,
  repo,
  tags,
  active,
  className
}: Props) => {
  return (
    <article
      class={`w-full max-w-sm border-b pb-4 border-black/20 dark:border-zinc-800 ${className}`}
    >
      <header class='flex gap-4 items-center'>
        <h3 class='w-fit text-lg font-semibold capitalize text-balance hover:underline decoration-blue-600 dark:decoration-blue-300 underline-offset-4 flex items-center gap-1'>
          {active && (
            <PointIcon className='size-5 animate-pulse text-blue-600 dark:text-blue-300' />
          )}
          <a href={url} target='_blank'>
            {name}
          </a>
        </h3>
        {repo && (
          <a
            href={repo}
            class='hover:text-blue-600 dark:hover:text-blue-400 duration-200'
            target='_blank'
          >
            <GitHub className='size-4' />
          </a>
        )}
      </header>
      <p class='py-2 text-sm truncate opacity-90'>{description}</p>
      <footer>
        <p class='mt-2 text-xs tracking-wider uppercase text-blue-600 dark:text-blue-300 truncate'>
          {tags.map((tag, index) => {
            return (
              <span key={index} class='mr-3'>
                {tag}
              </span>
            )
          })}
        </p>
      </footer>
    </article>
  )
}
