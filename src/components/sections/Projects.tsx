import { CardProject } from '@components/CardProject.tsx'
import { ButtonGallery } from '@components/ButtonGallery.tsx'
import { useState } from 'preact/hooks'
import { projects } from "@cv"

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
    <section id="projects" class='min-h-[55dvh]'>
      <div>
        <h2 class='text-2xl font-semibold lg:text-3xl'>Portafolio</h2>
        <div class='flex py-4 mt-4 overflow-x-auto overflow-y-hidden border-gray-700'>
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
            <div class='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14'>
              {listProjects.map(({name, description, isActive, technologies, url, github}) => {
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
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
