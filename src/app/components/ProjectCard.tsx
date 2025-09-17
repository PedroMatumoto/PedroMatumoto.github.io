import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import { Project } from '../types/project'
import { useTheme } from '../hooks/use-theme'
import { TechIcon } from '../utils/tech-icons'

interface ProjectCardProps {
  project: Project
  delay?: number
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const { theme } = useTheme()

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`group relative h-96 overflow-hidden rounded-xl border transition-all duration-300 hover:scale-105 ${
        theme === 'light'
          ? 'border-gray-200 bg-white shadow-lg hover:shadow-xl'
          : 'border-gray-800 bg-gray-900 shadow-lg hover:shadow-2xl'
      }`}
    >
      <div className="flex h-full flex-col p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h3 className="font-mont text-xl font-bold">{project.title}</h3>
              <span
                className={`rounded-full px-2 py-1 text-sm ${
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
          <div className="flex gap-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-lg p-2 transition-colors ${
                theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-800'
              }`}
            >
              <Github size={18} />
            </a>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-lg p-2 transition-colors ${
                  theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-800'
                }`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p
          className={`mb-4 flex-1 text-sm ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}
        >
          {project.longDescription || project.description}
        </p>

        {/* Screenshot */}
        {project.screenshot && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <img
              src={project.screenshot}
              alt={`Screenshot do projeto ${project.title}`}
              className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        <div className="mb-4 mt-auto">
          <h4 className="mb-2 text-sm font-semibold">Tecnologias:</h4>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-colors ${
                  theme === 'light'
                    ? 'bg-gray-100 hover:bg-gray-200'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
                title={tech}
              >
                <TechIcon
                  name={tech}
                  size={18}
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
          </div>
        </div>

        {project.category === 'case-study' && project.results && (
          <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-700">
            <h4 className="mb-2 text-sm font-semibold">
              Principais Resultados:
            </h4>
            <ul
              className={`space-y-1 text-xs ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-400'
              }`}
            >
              {project.results.slice(0, 2).map((result, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 text-green-500">•</span>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Featured indicator */}
        {project.featured && (
          <div className="absolute right-3 top-3">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />
          </div>
        )}
      </div>
    </motion.div>
  )
}
