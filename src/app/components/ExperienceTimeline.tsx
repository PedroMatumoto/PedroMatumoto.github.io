import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { experiences } from '../data/experiences'
import { useTheme } from '../hooks/use-theme'
import { TechIcon } from '../utils/tech-icons'
import { Experience } from '../types/project'

export function ExperienceTimeline() {
  const { theme } = useTheme()
  const [selectedExperience, setSelectedExperience] = useState<Experience>(experiences[0])

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
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
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
    <div className="flex min-h-screen w-full items-center justify-center py-20" id="experience">
      <div className="w-full max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-center font-mont text-4xl font-bold sm:text-5xl">
            Experiência
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            Minha jornada profissional através de diferentes empresas e projetos, 
            sempre focado em aprender e contribuir com soluções inovadoras.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Timeline - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${
                theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'
              }`} />
              
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative mb-8 cursor-pointer"
                  onClick={() => setSelectedExperience(experience)}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                    selectedExperience.id === experience.id
                      ? theme === 'light'
                        ? 'bg-black border-black'
                        : 'bg-white border-white'
                      : theme === 'light'
                      ? 'bg-white border-gray-300'
                      : 'bg-gray-900 border-gray-700'
                  }`} />
                  
                  {/* Timeline Content */}
                  <div className={`ml-12 p-4 rounded-lg transition-all duration-300 ${
                    selectedExperience.id === experience.id
                      ? theme === 'light'
                        ? 'bg-gray-100 shadow-md'
                        : 'bg-gray-800 shadow-lg'
                      : theme === 'light'
                      ? 'hover:bg-gray-50'
                      : 'hover:bg-gray-900'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <img 
                        src={experience.companyLogo} 
                        alt={`${experience.company} logo`}
                        className="w-8 h-8 object-contain rounded"
                      />
                      <div>
                        <h3 className="font-bold font-mont text-lg mb-1">
                          {experience.title}
                        </h3>
                        <p className={`text-sm ${
                          theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-4 text-xs ${
                      theme === 'light' ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>
                          {formatDate(experience.startDate)} - {' '}
                          {experience.current ? 'Atual' : formatDate(experience.endDate!)}
                        </span>
                      </div>
                      {experience.location && (
                        <div className="flex items-center gap-1">
                          <MapPin size={12} />
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
            className="lg:w-2/3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExperience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`p-8 rounded-xl ${
                  theme === 'light'
                    ? 'bg-white shadow-lg border border-gray-200'
                    : 'bg-gray-900 shadow-xl border border-gray-800'
                }`}
              >
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <img 
                        src={selectedExperience.companyLogo} 
                        alt={`${selectedExperience.company} logo`}
                        className="w-16 h-16 object-contain rounded-lg"
                      />
                      <div>
                        <h2 className="text-3xl font-bold font-mont mb-2">
                          {selectedExperience.title}
                        </h2>
                        <h3 className="text-xl text-blue-600 dark:text-blue-400 mb-2">
                          {selectedExperience.company}
                        </h3>
                        <div className={`flex items-center gap-4 text-sm ${
                          theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>
                              {formatDate(selectedExperience.startDate)} - {' '}
                              {selectedExperience.current ? 'Atual' : formatDate(selectedExperience.endDate!)}
                            </span>
                          </div>
                          <span>•</span>
                          <span>{getExperienceDuration(selectedExperience.startDate, selectedExperience.endDate)}</span>
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
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      selectedExperience.type === 'internship'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : selectedExperience.type === 'full-time'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    }`}>
                      {selectedExperience.type === 'internship' ? 'Estágio' :
                       selectedExperience.type === 'full-time' ? 'Tempo Integral' :
                       selectedExperience.type === 'part-time' ? 'Meio Período' :
                       selectedExperience.type === 'freelance' ? 'Freelance' : 'Contrato'}
                    </span>
                  </div>
                  
                  <p className={`text-base leading-relaxed ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}>
                    {selectedExperience.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 font-mont">
                    Principais Responsabilidades
                  </h4>
                  <ul className={`space-y-2 ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}>
                    {selectedExperience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1.5 text-xs">●</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 font-mont">
                    Tecnologias Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`flex items-center gap-2 px-3 py-1 text-sm rounded-md ${
                          theme === 'light'
                            ? 'bg-gray-100 text-gray-700'
                            : 'bg-gray-800 text-gray-300'
                        }`}
                      >
                        <TechIcon
                          name={tech}
                          size={16}
                          className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
                        />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {selectedExperience.achievements && selectedExperience.achievements.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 font-mont">
                      Principais Conquistas
                    </h4>
                    <ul className={`space-y-2 ${
                      theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                    }`}>
                      {selectedExperience.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-green-500 mt-1.5 text-xs">★</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
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