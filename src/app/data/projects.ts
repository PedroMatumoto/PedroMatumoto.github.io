import { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'mauagrid',
    title: 'MauaGrid',
    description: 'Scheduler generator for IMT',
    longDescription: 'Sistema inteligente de geração de horários para o Instituto Mauá de Tecnologia, desenvolvido para otimizar a distribuição de disciplinas e recursos.',
    link: 'https://github.com/20242-Maua-ECM-Fontys/front',
    demoLink: '#',
    icon: '📅',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    languages: ['typescript', 'react'],
    category: 'case-study',
    featured: true,
    status: 'completed',
    startDate: '2024-08',
    endDate: '2024-12',
    challenges: [
      'Otimização de algoritmos de scheduling',
      'Interface intuitiva para configuração complexa',
      'Performance com grandes volumes de dados'
    ],
    solutions: [
      'Implementação de algoritmos genéticos',
      'Design system componentizado',
      'Virtualização de listas e lazy loading'
    ],
    results: [
      'Redução de 80% no tempo de criação de horários',
      'Interface mais intuitiva segundo usuários',
      'Adoção por 3 departamentos da universidade'
    ]
  },
  {
    id: 'kirby',
    title: 'Kirby',
    description: 'Robot waiter to deliver food',
    longDescription: 'Robô garçom autônomo desenvolvido para entrega de alimentos em restaurantes, utilizando navegação por sensores e controle embarcado.',
    link: 'https://github.com/PedroMatumoto/kirby',
    icon: '🤖',
    technologies: ['Arduino', 'C/C++', 'Sensores Ultrassônicos', 'Motores Servo'],
    languages: ['c'],
    category: 'case-study',
    featured: true,
    status: 'completed',
    startDate: '2023-03',
    endDate: '2023-11',
    challenges: [
      'Navegação autônoma em ambientes dinâmicos',
      'Detecção e desvio de obstáculos',
      'Estabilidade da bandeja durante movimento'
    ],
    solutions: [
      'Sistema de sensores ultrassônicos múltiplos',
      'Algoritmo de pathfinding adaptativo',
      'Gimbal mecânico para estabilização'
    ],
    results: [
      'Navegação 90% precisa em testes',
      'Capacidade de carregar até 2kg',
      'Tempo de entrega reduzido em 40%'
    ]
  },
  {
    id: 'boramarcar',
    title: 'BoraMarcar',
    description: 'Simplified appointment scheduling system',
    longDescription: 'Sistema simplificado de agendamento de qualquer evento, focado em reuniões rápidas e práticas.',
    link: 'https://github.com/4-ANO-COMP-IMT/ac2',
    demoLink: 'https://boramarcar.vercel.app',
    icon: '📋',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    languages: ['typescript', 'react'],
    category: 'project',
    featured: false,
    status: 'completed',
    startDate: '2023-08',
    endDate: '2023-12'
  },
  {
    id: 'twodrive',
    title: 'TwoDrive',
    description: 'Simple file transfer system',
    longDescription: 'Sistema simples de transferência de arquivos peer-to-peer, desenvolvido em Java com interface gráfica.',
    link: 'https://github.com/PedroMatumoto/two_drive',
    icon: '📁',
    technologies: ['Java', 'Swing', 'Socket Programming'],
    languages: ['java'],
    category: 'project',
    featured: false,
    status: 'completed',
    startDate: '2023-03',
    endDate: '2023-06'
  }
]