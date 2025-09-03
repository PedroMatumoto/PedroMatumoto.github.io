import { Experience } from '../types/project'

export const experiences: Experience[] = [
  {
    id: 'alvarez-marsal-ai',
    title: 'AI Engineer',
    company: 'Alvarez & Marsal',
    location: 'São Paulo, SP',
    type: 'full-time',
    startDate: '2025-09',
    current: true,
    description:
      'Atuação no desenvolvimento de um sistema de processamento de documentos com foco em IA, incluindo integração com Azure OpenAI, backend em Django e automação de pipelines de produção.',
    responsibilities: [
      'Desenho e implementação de integrações com Azure OpenAI para extração e enriquecimento de dados',
      'Desenvolvimento e manutenção do backend em Django para orquestração de fluxos de documentos',
      'Implementação de componentes e integrações em JavaScript para interfaces e automações',
      'Configuração de infraestrutura em contêineres e orquestração (Docker, Kubernetes)',
      'Criação e manutenção de pipelines de CI/CD (GitHub Actions / Azure DevOps) para deploys e testes automatizados',
      'Garantia de segurança e compliance no processamento de dados sensíveis'
    ],
    technologies: [
      'Azure OpenAI',
      'Azure',
      'Django',
      'Python',
      'JavaScript',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'CI/CD',
      'PostgreSQL'
    ],
    achievements: [
      'Efetivado na posição full-time',
      'Início das integrações com Azure OpenAI para pipelines de documentos'
    ],
    companyLogo: '/logos/alvarez-marsal.png'
  },
  {
    id: 'alvarez-marsal',
    title: 'Tax Tech Intern',
    company: 'Alvarez & Marsal',
    location: 'São Paulo, SP',
    type: 'internship',
    startDate: '2023-11',
    endDate: '2025-05',
    description:
      'Desenvolvimento de sistemas para automatização de processos fiscais e tributários, trabalhando com análise de dados e criação de dashboards.',
    responsibilities: [
      'Desenvolvimento de scripts Python para automação de processos fiscais',
      'Criação de dashboards interativos para análise de dados tributários',
      'Integração com APIs de sistemas fiscais governamentais',
      'Manutenção e otimização de pipelines de dados'
    ],
    technologies: [
      'Python',
      'Azure',
      'Power BI',
      'SQL Server',
      'Pandas',
      'NumPy'
    ],
    achievements: [
      'Automatização de 15+ processos manuais',
      'Redução de 70% no tempo de processamento de dados',
      'Criação de 8 dashboards para diferentes departamentos'
    ],
    companyLogo: '/logos/alvarez-marsal.png'
  },
  {
    id: 'imt-monitor',
    title: 'Project Monitor',
    company: 'Instituto Mauá de Tecnologia',
    location: 'São Caetano do Sul, SP',
    type: 'part-time',
    startDate: '2022-08',
    endDate: '2023-10',
    description:
      'Monitor de projetos acadêmicos, auxiliando estudantes no desenvolvimento de soluções tecnológicas e pesquisa científica.',
    responsibilities: [
      'Orientação de estudantes em projetos de iniciação científica',
      'Desenvolvimento de ferramentas para análise de dados acadêmicos',
      'Criação de relatórios e visualizações de performance estudantil',
      'Suporte técnico em Python e análise de dados'
    ],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Jupyter', 'Git'],
    achievements: [
      'Orientação de 12+ projetos de iniciação científica',
      'Desenvolvimento de 5 ferramentas de análise acadêmica',
      'Melhoria de 40% na taxa de conclusão de projetos'
    ],
    companyLogo: '/logos/imt.png'
  },
  {
    id: 'maua-jr',
    title: 'Web Designer',
    company: 'Mauá Jr.',
    location: 'São Caetano do Sul, SP',
    type: 'part-time',
    startDate: '2022-08',
    endDate: '2023-10',
    description:
      'Designer e desenvolvedor web na empresa júnior, criando soluções digitais para pequenas e médias empresas.',
    responsibilities: [
      'Design de interfaces web responsivas',
      'Desenvolvimento de sites em WordPress',
      'Criação de identidades visuais e materiais gráficos',
      'Atendimento e consultoria para clientes'
    ],
    technologies: ['Figma', 'WordPress', 'Canva', 'HTML/CSS', 'JavaScript'],
    achievements: [
      'Entrega de 25+ projetos web',
      'Satisfação média de 4.8/5 dos clientes',
      'Aumento de 60% na carteira de clientes da área digital'
    ],
    companyLogo: '/logos/maua-jr.png'
  }
]
