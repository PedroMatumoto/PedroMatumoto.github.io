export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  link: string
  demoLink?: string
  icon?: string
  image?: string
  technologies: string[]
  languages: string[]
  category: 'case-study' | 'project'
  featured?: boolean
  status: 'completed' | 'in-progress' | 'archived'
  startDate: string
  endDate?: string
  challenges?: string[]
  solutions?: string[]
  results?: string[]
}

export interface Experience {
  id: string
  title: string
  company: string
  location?: string
  type: 'full-time' | 'part-time' | 'internship' | 'freelance' | 'contract'
  startDate: string
  endDate?: string
  current?: boolean
  description: string
  responsibilities: string[]
  technologies: string[]
  achievements?: string[]
  companyLogo?: string
}