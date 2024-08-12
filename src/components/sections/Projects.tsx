import { CardProject } from '@components/CardProject.tsx'
import { ButtonGallery } from '@components/ButtonGallery.tsx'
import { useState } from 'preact/hooks'
import { projects } from '@cv'

export const Projects = () => {
  const [listProjects, setListProjects] = useState(projects)
  const [tag, setTag] = useState('all')

  const handleType = (type: string) => {
    let lowerProp = type.toLowerCase()
    setTag(lowerProp)
    let findProjects = projects.filter((project: any) =>
      lowerProp === 'all' ? project : project.technologies.includes(lowerProp)
    )
    setListProjects(findProjects)
  }

  return (
    <section id='portfolio' class='mb-10 min-h-[500px] mx-auto max-w-7xl px-4'>
      <div class='flex flex-col'>
        <h2 class='text-3xl sm:text-4xl font-bold text-center max-w-[60ch] mx-auto pb-12'>
          Proyectos recientes
        </h2>
        <div class='flex mx-auto pb-5 overflow-x-auto overflow-y-hidden border-black/20 dark:border-white/20'>
          <ButtonGallery
            onClick={() => handleType('all')}
            active={tag === 'all'}
          >
            Todos
          </ButtonGallery>
          <ButtonGallery
            onClick={() => handleType('Angular')}
            active={tag === 'angular'}
          >
            Angular
          </ButtonGallery>
          <ButtonGallery
            onClick={() => handleType('react')}
            active={tag === 'react'}
          >
            React
          </ButtonGallery>
        </div>
        <div class='mt-8 xl:mt-16 lg:flex lg:-mx-12'>
          <div class='flex-1 mt-8 lg:mx-12 lg:mt-0'>
            <div class='grid grid-cols-1 justify-items-center min-[600px]:grid-cols-2 lg:grid-cols-3 gap-8'>
              {listProjects.map(
                ({
                  name,
                  description,
                  isActive,
                  technologies,
                  url,
                  github
                }) => {
                  return (
                    <CardProject
                      key={name}
                      name={name}
                      description={description}
                      tags={technologies}
                      url={url}
                      repo={github}
                      active={isActive}
                      className='animate__animated animate__fadeIn'
                    />
                  )
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
