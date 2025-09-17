import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Project } from '../types/project'
import { useTheme } from '../hooks/use-theme'
import { TechIcon } from '../utils/tech-icons'
import { ExternalLink, Github, Star } from 'lucide-react'

interface InfiniteScrollProjectsProps {
  projects: Project[]
  direction?: 'left' | 'right'
  speed?: number
  className?: string
  onProjectClick?: (project: Project) => void
}

export function InfiniteScrollProjects({
  projects,
  direction = 'left',
  speed = 50,
  className = '',
  onProjectClick
}: InfiniteScrollProjectsProps) {
  const { theme } = useTheme()
  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isPausedRef = useRef(false)

  // Duplicate projects to create seamless infinite effect
  const duplicatedProjects = [...projects, ...projects, ...projects]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let currentPosition = 0

    const animate = () => {
      if (!isPausedRef.current) {
        if (direction === 'left') {
          currentPosition -= speed / 60 // 60fps
        } else {
          currentPosition += speed / 60
        }

        // Reset position when one set of projects has scrolled past
        const itemWidth = 320 // approximate width of each project item
        const totalWidth = projects.length * itemWidth

        if (Math.abs(currentPosition) >= totalWidth) {
          currentPosition = 0
        }

        scrollContainer.style.transform = `translateX(${currentPosition}px)`
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Add mouse event listeners for pause/resume
    const container = containerRef.current
    if (container) {
      const handleMouseEnter = () => {
        isPausedRef.current = true
      }

      const handleMouseLeave = () => {
        isPausedRef.current = false
      }

      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId)
        }
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [projects.length, direction, speed])

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div
        ref={scrollRef}
        className="flex gap-6"
        style={{
          width: `${duplicatedProjects.length * 320}px`
        }}
      >
        {duplicatedProjects.map((project, index) => (
          <motion.div
            key={`${project.id}-${index}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: (index % projects.length) * 0.1,
              ease: 'easeOut'
            }}
          >
            <ProjectItem
              project={project}
              theme={theme}
              onProjectClick={onProjectClick}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

interface ProjectItemProps {
  project: Project
  theme: string
  onProjectClick?: (project: Project) => void
}

function ProjectItem({ project, theme, onProjectClick }: ProjectItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={() => onProjectClick?.(project)}
      className={`group relative h-80 w-72 shrink-0 cursor-pointer overflow-hidden rounded-xl border transition-all duration-300 sm:w-80 ${
        theme === 'light'
          ? 'border-gray-200 bg-white shadow-lg hover:shadow-xl'
          : 'border-gray-800 bg-gray-900 shadow-lg hover:shadow-2xl'
      }`}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 dark:to-white/5" />

      <div className="relative flex h-full flex-col p-4">
        {/* Header */}
        <div className="mb-3 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div>
              <h3 className="font-mont text-lg font-bold leading-tight">
                {project.title}
              </h3>
              <span
                className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                  project.category === 'case-study'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                }`}
              >
                {project.category === 'case-study'
                  ? 'Estudo de Caso'
                  : 'Projeto'}
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-lg p-1.5 transition-colors ${
                theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-800'
              }`}
            >
              <Github size={14} />
            </a>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-lg p-1.5 transition-colors ${
                  theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-800'
                }`}
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p
          className={`mb-3 flex-1 text-sm leading-relaxed ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}
        >
          {project.description}
        </p>

        {/* Screenshot */}
        {project.screenshot && (
          <div className="mb-3 overflow-hidden rounded-lg">
            <img
              src={project.screenshot}
              alt={`Screenshot do projeto ${project.title}`}
              className="h-24 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        {/* Technologies */}
        <div className="mb-2 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <div
                key={tech}
                className={`flex items-center gap-1 rounded-md px-2 py-1 transition-colors ${
                  theme === 'light'
                    ? 'bg-gray-100 hover:bg-gray-200'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
                title={tech}
              >
                <TechIcon
                  name={tech}
                  size={12}
                  className={
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }
                />
                <span
                  className={`text-xs font-medium ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}
                >
                  {tech}
                </span>
              </div>
            ))}
            {project.technologies.length > 4 && (
              <div
                className={`flex items-center justify-center rounded-md px-2 py-1 ${
                  theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
                }`}
              >
                <span
                  className={`text-xs ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                  }`}
                >
                  +{project.technologies.length - 4}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Featured indicator */}
        {project.featured && (
          <div className="absolute right-2 top-2">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
          </div>
        )}

        {/* Status indicator */}
        <div className="absolute bottom-2 right-2">
          <div
            className={`h-2 w-2 rounded-full ${
              project.status === 'completed'
                ? 'bg-green-500'
                : project.status === 'in-progress'
                  ? 'bg-blue-500'
                  : 'bg-gray-400'
            }`}
            title={`Status: ${project.status}`}
          />
        </div>
      </div>
    </motion.div>
  )
}
