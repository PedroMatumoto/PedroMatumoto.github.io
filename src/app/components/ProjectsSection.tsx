import { useState } from 'react'
import { motion } from 'framer-motion'
import { InfiniteScrollProjects } from './InfiniteScrollProjects'
import { ProjectDetails } from './ProjectDetails'
import { projects } from '../data/projects'
import { useTheme } from '../hooks/use-theme'
import { Project } from '../types/project'

export function ProjectsSection() {
  const { theme } = useTheme()
  const [activeFilter, setActiveFilter] = useState<
    'all' | 'case-study' | 'project'
  >('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  )

  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center py-20 pt-32"
      id="repos"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-center font-mont text-4xl font-bold sm:text-5xl">
          Projetos
        </h1>
        <p
          className={`mx-auto max-w-2xl text-lg ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}
        >
          Uma coleção dos meus trabalhos mais significativos, desde estudos de
          caso detalhados até projetos experimentais e soluções práticas.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-4"
      >
        {[
          { key: 'all', label: 'Todos' },
          { key: 'case-study', label: 'Estudos de Caso' },
          { key: 'project', label: 'Projetos' }
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() =>
              setActiveFilter(key as 'all' | 'case-study' | 'project')
            }
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-6 sm:text-base ${
              activeFilter === key
                ? theme === 'light'
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
                : theme === 'light'
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </motion.div>

      {/* Infinite Scroll Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full"
      >
        <InfiniteScrollProjects
          projects={filteredProjects}
          direction="left"
          speed={35}
          className="py-8"
          onProjectClick={setSelectedProject}
        />
      </motion.div>

      {/* Project Details */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="mt-16 w-full"
        >
          <div className="mx-auto max-w-6xl px-4">
            <ProjectDetails
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </div>
        </motion.div>
      )}

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <p
          className={`text-sm ${
            theme === 'light' ? 'text-gray-500' : 'text-gray-400'
          }`}
        >
          Passe o mouse sobre os projetos para interagir • Clique nos projetos
          para ver detalhes
        </p>
      </motion.div>
    </div>
  )
}
