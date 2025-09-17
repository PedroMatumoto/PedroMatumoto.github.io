import { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'mauagrid',
    title: 'MauaGrid',
    description: 'Scheduler generator for IMT',
    longDescription:
      'Sistema inteligente de geração de horários para o Instituto Mauá de Tecnologia, desenvolvido para otimizar a distribuição de disciplinas e recursos.',
    link: 'https://github.com/20242-Maua-ECM-Fontys/front',
    demoLink: '#',
    screenshot: '/screenshots/mauagrid.jpg',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Clean Architecture'
    ],
    languages: ['typescript', 'react'],
    category: 'case-study',
    featured: true,
    status: 'completed',
    startDate: '2024-08',
    endDate: '2024-12',
    challenges: [
      'Otimização de algoritmos de scheduling',
      'Interface intuitiva para configuração complexa',
      'Regras de negócio específicas do IMT'
    ],
    solutions: [
      'Design system componentizado',
      'Virtualização de listas e lazy loading'
    ],
    results: [
      'Redução de 80% no tempo de criação de horários',
      'Interface mais intuitiva segundo usuários'
    ]
  },
  {
    id: 'kirby',
    title: 'Kirby',
    description: 'Robot waiter to deliver food',
    longDescription:
      'Robô garçom autônomo desenvolvido para entrega de alimentos em restaurantes, utilizando navegação por sensores e controle embarcado.',
    link: 'https://github.com/PedroMatumoto/kirby',
    screenshot: '/screenshots/kirby.jpg',

    technologies: [
      'Arduino',
      'C/C++',
      'Sensores Ultrassônicos',
      'Motores Servo'
    ],
    languages: ['c'],
    category: 'case-study',
    featured: true,
    status: 'completed',
    startDate: '2023-03',
    endDate: '2023-11',
    challenges: [
      'Navegação autônoma em ambientes predeterminados',
      'Detecção de pontos de entrega'
    ],
    solutions: [
      'Sistema de sensores de linha infravermelho',
      'Algoritmo de navegação baseado em estados'
    ],
    results: ['Capacidade de carregar até 300g']
  },
  {
    id: 'boramarcar',
    title: 'BoraMarcar',
    description: 'Simplified appointment scheduling system',
    longDescription:
      'Sistema simplificado de agendamento de qualquer evento, focado em reuniões rápidas e práticas.',
    link: 'https://github.com/4-ANO-COMP-IMT/ac2',
    demoLink: 'https://boramarcar.vercel.app',
    screenshot: '/screenshots/boramarcar.jpg',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Clean Architecture',
      'Microsservices'
    ],
    languages: ['typescript', 'react'],
    category: 'project',
    featured: false,
    status: 'completed',
    startDate: '2023-08',
    endDate: '2023-12',
    challenges: [],
    solutions: [],
    results: []
  },
  {
    id: 'tabrick',
    title: 'Tabrick',
    description: 'Data analyst - Insights generator from personal data',
    longDescription:
      'Aplicação Django inteligente para análise e consulta de documentos e dados. Combina tecnologias de processamento de documentos com IA e análise de dados, oferecendo análise de PDFs usando RAG com OpenAI, análise de dados CSV com agentes pandas e LangChain, e processamento de documentos escaneados com Google Document AI.',
    link: 'https://github.com/PedroMatumoto/tabrick',
    screenshot: '/screenshots/tabrick.png',

    technologies: [
      'Django',
      'OpenAI GPT-4',
      'LangChain',
      'ChromaDB',
      'Google Document AI',
      'Pandas',
      'Bootstrap'
    ],
    languages: ['python', 'html'],
    category: 'project',
    featured: true,
    status: 'completed',
    startDate: '2025-04',
    endDate: '2025-05',
    challenges: [
      'Processamento multimodal de PDFs e CSVs',
      'Implementação de sistema RAG para consultas semânticas',
      'Integração de múltiplas APIs de IA'
    ],
    solutions: [
      'Sistema RAG com ChromaDB para consultas inteligentes',
      'Agentes pandas com LangChain para análise estatística',
      'Interface web responsiva com Django'
    ],
    results: [
      'Análise inteligente de documentos PDF e dados CSV',
      'Consultas em linguagem natural',
      'Histórico de conversas mantido'
    ]
  },

  {
    id: 'omoidasu',
    title: 'Omoidasu',
    description: 'Meeting synthesizer',
    longDescription:
      'Plataforma baseada em Python projetada para resumir reuniões. Transforma transcrições de reuniões em resumos concisos e organizados, facilitando o acompanhamento e recuperação de informações importantes através de uma interface web.',
    link: 'https://github.com/PedroMatumoto/omoidasu',
    screenshot: '/screenshots/omoidasu.png',

    technologies: [
      'Python',
      'Flask/Web Framework',
      'Natural Language Processing',
      'Transcript Processing'
    ],
    languages: ['python'],
    category: 'case-study',
    featured: false,
    status: 'in-progress',
    startDate: '2025-04',
    endDate: 'Present',
    challenges: [
      'Processamento preciso de transcrições de reuniões',
      'Geração de resumos concisos e organizados',
      'Interface web intuitiva para usuários'
    ],
    solutions: [
      'Algoritmos de processamento de linguagem natural',
      'Sistema modular com chatting.py e transcript.py',
      'Interface web com webapp.py'
    ],
    results: [
      'Transformação automática de transcrições em resumos',
      'Facilita acompanhamento de reuniões',
      'Interface web funcional'
    ]
  },

  {
    id: 'synmed',
    title: 'SynMed',
    description:
      'Sistema de Apoio à Identificação de Efeitos Colaterais de Medicamentos',
    longDescription:
      'Sistema voltado à área da saúde e farmacovigilância, cujo objetivo principal é apoiar a análise e monitoramento de possíveis reações adversas associadas ao uso de medicamentos a partir de sintomas relatados por usuários.',
    link: 'https://github.com/PedroMatumoto/SynMed',
    technologies: [
      'Python',
      'Machine Learning',
      'Data Analysis',
      'Healthcare APIs',
      'Pharmacovigilance'
    ],
    languages: ['python'],
    category: 'project',
    featured: true,
    status: 'completed',
    startDate: '2025-07',
    endDate: '2025-09',
    challenges: [
      'Identificação precisa de efeitos colaterais',
      'Correlação entre sintomas e medicamentos',
      'Conformidade com regulamentações de saúde'
    ],
    solutions: [
      'Algoritmos de machine learning para análise de sintomas',
      'Sistema de monitoramento de reações adversas',
      'Interface para profissionais de saúde'
    ],
    results: [
      'Apoio à farmacovigilância',
      'Identificação de possíveis reações adversas',
      'Ferramenta para profissionais de saúde'
    ]
  },
  {
    id: 'mirai',
    title: 'Mirai',
    description: 'Robô autônomo doméstico',
    longDescription:
      'Projeto de robótica desenvolvido no IMT para um robô autônomo doméstico, utilizando Python como linguagem principal com integração de sistemas embarcados em C++.',
    link: 'https://github.com/IMT-AT-home/athome',
    screenshot: '/screenshots/mirai.jpg',
    demoLink: 'https://imt-at-home.github.io',
    technologies: [
      'OpenCV',
      'TTS and STT',
      'Python',
      'C++',
      'Embedded Systems',
      'IoT',
      'Shell Scripts'
    ],
    languages: ['python', 'c++'],
    category: 'project',
    featured: true,
    status: 'in-progress',
    startDate: '2025-02',
    endDate: 'Current',
    challenges: [
      'Integração de múltiplos sensores e atuadores',
      'Sistema de tópicos complexos',
      'Localização e operação autônoma'
    ],
    solutions: [
      'Arquitetura modular com Python e C++',
      'Tecnologias de IA para interação homem máquina',
      'Sistema embarcado para controle de dispositivos'
    ],
    results: [
      'Robô com locomoção e manipulação de objetos autônomos',
      'Plataforma extensível para novos recursos'
    ]
  }
]
