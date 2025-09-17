import { motion } from 'framer-motion'
import { Project } from '../types/project'
import { useTheme } from '../hooks/use-theme'
import { TechIcon } from '../utils/tech-icons'
import {
  ExternalLink,
  Github,
  Calendar,
  Target,
  Lightbulb,
  TrendingUp,
  X
} from 'lucide-react'

interface ProjectDetailsProps {
  project: Project | null
  onClose: () => void
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const { theme } = useTheme()

  if (!project) return null

  const formatDate = (dateString: string) => {
    if (dateString === 'current') return 'Atual'
    const date = new Date(dateString + '-01')
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long'
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative w-full rounded-xl border ${
        theme === 'light'
          ? 'border-gray-200 bg-white'
          : 'border-gray-800 bg-gray-900'
      } shadow-xl`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className={`absolute right-4 top-4 z-10 rounded-lg p-2 transition-colors ${
          theme === 'light'
            ? 'text-gray-600 hover:bg-gray-100'
            : 'text-gray-400 hover:bg-gray-800'
        }`}
      >
        <X size={20} />
      </button>

      {/* Header */}
      <div className="p-6 pb-4">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <h1 className="font-mont text-2xl font-bold sm:text-3xl">
                {project.title}
              </h1>
              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  project.category === 'case-study'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                }`}
              >
                {project.category === 'case-study'
                  ? 'Estudo de Caso'
                  : 'Projeto'}
              </span>
              {project.featured && (
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  Destaque
                </span>
              )}
            </div>

            <p
              className={`text-lg ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-400'
              }`}
            >
              {project.longDescription || project.description}
            </p>
          </div>

          <div className="flex gap-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors ${
                theme === 'light'
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Github size={18} />
              Código
            </a>
            {project.demoLink && project.demoLink !== '#' && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors ${
                  theme === 'light'
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <ExternalLink size={18} />
                Demo
              </a>
            )}
          </div>
        </div>

        {/* Project info */}
        <div className="mb-6 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar
              size={16}
              className={theme === 'light' ? 'text-gray-500' : 'text-gray-400'}
            />
            <span
              className={
                theme === 'light' ? 'text-gray-600' : 'text-gray-400'
              }
            >
              {formatDate(project.startDate)}
              {project.endDate && ` - ${formatDate(project.endDate)}`}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`h-3 w-3 rounded-full ${
                project.status === 'completed'
                  ? 'bg-green-500'
                  : project.status === 'in-progress'
                    ? 'bg-blue-500'
                    : 'bg-gray-400'
              }`}
            />
            <span
              className={
                theme === 'light' ? 'text-gray-600' : 'text-gray-400'
              }
            >
              {project.status === 'completed'
                ? 'Concluído'
                : project.status === 'in-progress'
                  ? 'Em andamento'
                  : 'Arquivado'}
            </span>
          </div>
        </div>

        {/* Screenshot */}
        {project.screenshot && (
          <div className="mb-6 overflow-hidden rounded-lg">
            <img
              src={project.screenshot}
              alt={`Screenshot do projeto ${project.title}`}
              className="h-64 w-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-6 pb-6">
        {/* Technologies */}
        <div className="mb-8">
          <h2 className="mb-4 font-mont text-xl font-semibold">Tecnologias</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-colors ${
                  theme === 'light'
                    ? 'bg-gray-100 hover:bg-gray-200'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <TechIcon
                  name={tech}
                  size={16}
                  className={
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }
                />
                <span
                  className={`font-medium ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}
                >
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Details */}
        {project.category === 'case-study' &&
          (project.challenges || project.solutions || project.results) && (
            <div className="space-y-8">
              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <Target className="text-red-500" size={20} />
                    <h2 className="font-mont text-xl font-semibold">
                      Desafios
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`rounded-lg border-l-4 border-red-500 p-4 ${
                          theme === 'light' ? 'bg-red-50' : 'bg-red-900/20'
                        }`}
                      >
                        <p
                          className={
                            theme === 'light'
                              ? 'text-gray-700'
                              : 'text-gray-300'
                          }
                        >
                          {challenge}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Solutions */}
              {project.solutions && project.solutions.length > 0 && (
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <Lightbulb className="text-blue-500" size={20} />
                    <h2 className="font-mont text-xl font-semibold">
                      Soluções
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`rounded-lg border-l-4 border-blue-500 p-4 ${
                          theme === 'light' ? 'bg-blue-50' : 'bg-blue-900/20'
                        }`}
                      >
                        <p
                          className={
                            theme === 'light'
                              ? 'text-gray-700'
                              : 'text-gray-300'
                          }
                        >
                          {solution}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              {project.results && project.results.length > 0 && (
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <TrendingUp className="text-green-500" size={20} />
                    <h2 className="font-mont text-xl font-semibold">
                      Resultados
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {project.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`rounded-lg border-l-4 border-green-500 p-4 ${
                          theme === 'light' ? 'bg-green-50' : 'bg-green-900/20'
                        }`}
                      >
                        <p
                          className={
                            theme === 'light'
                              ? 'text-gray-700'
                              : 'text-gray-300'
                          }
                        >
                          {result}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
      </div>
    </motion.div>
  )
}