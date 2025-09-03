import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { projects } from '../data/projects'
import { useTheme } from '../hooks/use-theme'

export function ProjectsSection() {
  const { theme } = useTheme()
  const [activeFilter, setActiveFilter] = useState<
    'all' | 'case-study' | 'project'
  >('all')

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  )

  const featuredProjects = projects.filter((project) => project.featured)
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center py-20"
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
        className="mb-12 flex gap-4"
      >
        {[
          { key: 'all', label: 'Todos' },
          { key: 'case-study', label: 'Estudos de Caso' },
          { key: 'project', label: 'Projetos' }
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key as any)}
            className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
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

      {/* Featured Projects */}
      {activeFilter === 'all' && featuredProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 w-full max-w-6xl"
        >
          <h2 className="mb-8 text-center font-mont text-2xl font-bold">
            Projetos em Destaque
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index} />
            ))}
          </div>
        </motion.div>
      )}

      {/* All Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-6xl"
      >
        {activeFilter !== 'all' && (
          <h2 className="mb-8 text-center font-mont text-2xl font-bold">
            {activeFilter === 'case-study' ? 'Estudos de Caso' : 'Projetos'}
          </h2>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
