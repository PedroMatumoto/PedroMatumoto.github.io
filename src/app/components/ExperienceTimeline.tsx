import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { experiences } from '../data/experiences'
import { useTheme } from '../hooks/use-theme'
import { TechIcon } from '../utils/tech-icons'
import { Experience } from '../types/project'

export function ExperienceTimeline() {
  const { theme } = useTheme()
  const [selectedExperience, setSelectedExperience] = useState<Experience>(
    experiences[0]
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + '-01')
    return date.toLocaleDateString('pt-BR', {
      month: 'short',
      year: 'numeric'
    })
  }

  const getExperienceDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate + '-01')
    const end = endDate ? new Date(endDate + '-01') : new Date()

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth())

    if (months < 12) {
      return `${months} ${months === 1 ? 'mês' : 'meses'}`
    }

    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? 'ano' : 'anos'}`
    }

    return `${years} ${years === 1 ? 'ano' : 'anos'} e ${remainingMonths} ${remainingMonths === 1 ? 'mês' : 'meses'}`
  }

  return (
    <div
      className="flex w-full items-center justify-center py-12 pt-32"
      id="experience"
    >
      <div className="w-full max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h1 className="mb-3 text-center font-mont text-3xl font-bold sm:text-4xl">
            Experiência
          </h1>
          <p
            className={`mx-auto max-w-2xl text-base ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}
          >
            Minha jornada profissional através de diferentes empresas e
            projetos, sempre focado em aprender e contribuir com soluções
            inovadoras.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Timeline - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/5"
          >
            <div className="relative">
              {/* Timeline Line */}
              <div
                className={`absolute bottom-0 left-6 top-0 w-0.5 ${
                  theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'
                }`}
              />

              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative mb-6 cursor-pointer"
                  onClick={() => setSelectedExperience(experience)}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-4 h-4 w-4 rounded-full border-4 transition-all duration-300 ${
                      selectedExperience.id === experience.id
                        ? theme === 'light'
                          ? 'border-black bg-black'
                          : 'border-white bg-white'
                        : theme === 'light'
                          ? 'border-gray-300 bg-white'
                          : 'border-gray-700 bg-gray-900'
                    }`}
                  />

                  {/* Timeline Content */}
                  <div
                    className={`ml-10 rounded-lg p-3 transition-all duration-300 ${
                      selectedExperience.id === experience.id
                        ? theme === 'light'
                          ? 'bg-gray-100 shadow-md'
                          : 'bg-gray-800 shadow-lg'
                        : theme === 'light'
                          ? 'hover:bg-gray-50'
                          : 'hover:bg-gray-900'
                    }`}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <img
                        src={experience.companyLogo}
                        alt={`${experience.company} logo`}
                        className="h-6 w-6 rounded object-contain"
                      />
                      <div>
                        <h3 className="mb-0.5 font-mont text-base font-bold">
                          {experience.title}
                        </h3>
                        <p
                          className={`text-xs ${
                            theme === 'light'
                              ? 'text-gray-600'
                              : 'text-gray-400'
                          }`}
                        >
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex items-center gap-3 text-xs ${
                        theme === 'light' ? 'text-gray-500' : 'text-gray-500'
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <Calendar size={10} />
                        <span>
                          {formatDate(experience.startDate)} -{' '}
                          {experience.current
                            ? 'Atual'
                            : formatDate(experience.endDate!)}
                        </span>
                      </div>
                      {experience.location && (
                        <div className="flex items-center gap-1">
                          <MapPin size={10} />
                          <span>{experience.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Details - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-3/5"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExperience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`rounded-xl p-6 ${
                  theme === 'light'
                    ? 'border border-gray-200 bg-white shadow-lg'
                    : 'border border-gray-800 bg-gray-900 shadow-xl'
                }`}
              >
                <div className="mb-5">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <img
                        src={selectedExperience.companyLogo}
                        alt={`${selectedExperience.company} logo`}
                        className="h-12 w-12 rounded-lg object-contain"
                      />
                      <div>
                        <h2 className="mb-1 font-mont text-2xl font-bold">
                          {selectedExperience.title}
                        </h2>
                        <h3 className="mb-2 text-lg text-blue-600 dark:text-blue-400">
                          {selectedExperience.company}
                        </h3>
                        <div
                          className={`flex items-center gap-4 text-sm ${
                            theme === 'light'
                              ? 'text-gray-600'
                              : 'text-gray-400'
                          }`}
                        >
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>
                              {formatDate(selectedExperience.startDate)} -{' '}
                              {selectedExperience.current
                                ? 'Atual'
                                : formatDate(selectedExperience.endDate!)}
                            </span>
                          </div>
                          <span>•</span>
                          <span>
                            {getExperienceDuration(
                              selectedExperience.startDate,
                              selectedExperience.endDate
                            )}
                          </span>
                          {selectedExperience.location && (
                            <>
                              <span>•</span>
                              <div className="flex items-center gap-1">
                                <MapPin size={16} />
                                <span>{selectedExperience.location}</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        selectedExperience.type === 'internship'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          : selectedExperience.type === 'full-time'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                      }`}
                    >
                      {selectedExperience.type === 'internship'
                        ? 'Estágio'
                        : selectedExperience.type === 'full-time'
                          ? 'Tempo Integral'
                          : selectedExperience.type === 'part-time'
                            ? 'Meio Período'
                            : selectedExperience.type === 'freelance'
                              ? 'Freelance'
                              : 'Contrato'}
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                    }`}
                  >
                    {selectedExperience.description}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 font-mont text-base font-semibold">
                    Principais Responsabilidades
                  </h4>
                  <ul
                    className={`space-y-1 ${
                      theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                    }`}
                  >
                    {selectedExperience.responsibilities.map(
                      (responsibility, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="mt-1 text-xs text-blue-500">●</span>
                          <span>{responsibility}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 font-mont text-base font-semibold">
                    Tecnologias Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`flex items-center gap-1.5 rounded-md px-2 py-1 text-xs ${
                          theme === 'light'
                            ? 'bg-gray-100 text-gray-700'
                            : 'bg-gray-800 text-gray-300'
                        }`}
                      >
                        <TechIcon
                          name={tech}
                          size={12}
                          className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
                        />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {selectedExperience.achievements &&
                  selectedExperience.achievements.length > 0 && (
                    <div>
                      <h4 className="mb-2 font-mont text-base font-semibold">
                        Principais Conquistas
                      </h4>
                      <ul
                        className={`space-y-1 ${
                          theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                        }`}
                      >
                        {selectedExperience.achievements.map(
                          (achievement, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span className="mt-1 text-xs text-green-500">
                                ★
                              </span>
                              <span>{achievement}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
