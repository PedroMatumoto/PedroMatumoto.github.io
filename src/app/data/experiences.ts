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
      'Garantia de segurança e compliance no processamento de dados sensíveis',
      'Levantamento de requisitos e arquitetura do sistema de processamento de documentos'
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
      'PostgreSQL',
      'Transformers',
      'LangChain'
    ],
    achievements: [
      'Efetivado na posição full-time',
      'Início das integrações com Azure OpenAI para pipelines de documentos',
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
      'Tratamento de grandes volumes de dados fiscais',
      'Desenvolvimento de scripts Python para automação de processos fiscais',
      'Criação de dashboards interativos para análise de dados tributários',
      'Integração com APIs de sistemas fiscais governamentais',
      'Automatização da coleta de dados e geração de papéis de trabalho',
      'Colaboração com equipes multidisciplinares para otimização de processos'
    ],
    technologies: [
      'Python',
      'Azure',
      'Power BI',
      'SQL Server',
      'Pandas',
      'NumPy',
      'APIs REST',
      'Git',
      'Figma'
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
      'Monitor de projetos acadêmicos, auxiliando professores em avaliações de desempenho e desenvolvimento de ferramentas para gestão de eventos.',
    responsibilities: [
      'Relatórios de desempenho de professores em eventos',
      'Desenvolvimento de ferramentas para análise de dados acadêmicos',
      'Criação de relatórios e visualizações de performance estudantil',
      'Suporte técnico em Python e análise de dados'
    ],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Git'],
    achievements: [
      'Entrega de relatórios mensais de desempenho',
      'Desenvolvimento de 3 ferramentas de análise acadêmica',
      'Otimização da geração de relatórios em 40%'
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
      'Entrega de 2 projetos web, com e-commerce e blogs',
      'Satisfação média de 4.8/5 dos clientes',
    ],
    companyLogo: '/logos/maua-jr.png'
  }
]
