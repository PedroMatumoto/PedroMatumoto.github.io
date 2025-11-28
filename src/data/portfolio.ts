export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  features?: string[];
  gallery?: string[];
  videos?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export const portfolioData = {
  name: "Pedro Matumoto",
  title: "Engenheiro de Software",
  titleJP: "ソフトウェアエンジニア",
  about: "Engenheiro de Computação com sólida experiência em Robótica, Automação, Backend e Cloud. Gosto de criar soluções escaláveis integrando IA, infraestrutura em nuvem e arquiteturas modernas.",
  aboutJP: "ロボット工学、自動化、バックエンド、クラウドの確かな経験を持つコンピュータエンジニア。AI、クラウドインフラ、最新のアーキテクチャを統合したスケーラブルなソリューションの構築を専門としています。",
  skills: [
    "Python", "ROS2", "C", "OpenCV", "Nav2", "MoveIt", "Gazebo", "SLAM",
    "Microsoft SQL Server", "Django", "Docker", "Azure", "AWS", "Google Cloud", "Terraform",
    "TypeScript", "React", "FastAPI", "Kubernetes"
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      date: "08/2023",
      link: "https://www.credly.com/badges/9ca0b5f9-6f4d-46c1-889f-7b7d94d5a87e/public_url",
    },
    {
      name: "Linux Essentials",
      issuer: "Cisco",
      date: "2022",
    },
    {
      name: "Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "03/2024",
      link: "https://www.credly.com/badges/a051f691-ba9f-4f2e-8c8d-ee700c6a94bd/public_url",
    },
    {
      name: "AZ-900 Azure Fundamentals",
      issuer: "Microsoft",
      date: "10/2024",
      link: "https://learn.microsoft.com/api/credentials/share/pt-br/PedroMatumoto-9901/8DB5E10E5D4597FA?sharingId=18D2DEB419144A0A",
    },
    {
      name: "TOEFL ITP - 597 (B2)",
      issuer: "ETS",
      date: "2022",
    }
  ] as Certification[],
  experiences: [
    {
      company: "Alvarez & Marsal",
      role: "Engenheiro de Software",
      period: "05/2025 - Presente",
      description: "Desenvolvimento de sistema de processamento de documentos com IA (Azure OpenAI), automação de processos (RPA) reduzindo tempo em 30%, e infraestrutura em nuvem distribuída. Implementação de APIs com FastAPI, dashboards complexos e pipelines de CI/CD.",
      technologies: ["Azure OpenAI", "RPA", "FastAPI", "CI/CD", "Azure"],
    },
    {
      company: "Alvarez & Marsal",
      role: "Estágio em Engenharia de Software",
      period: "11/2023 - 05/2025",
      description: "Desenvolvi soluções de automação (RPA) em Python e aplicações desktop com frontend em C# WPF, integradas ao Microsoft SQL Server, incluindo modelagem de banco de dados. Implementei sistemas de computação em nuvem distribuída, melhorando o processamento de dados em 40%. Criei dashboards analíticos e APIs com FastAPI, gerenciando pipelines de deploy no Azure DevOps.",
      technologies: ["Python", "RPA", "C#", "WPF", "SQL Server", "Azure", "FastAPI"],
    }
  ] as Experience[],
  projects: [
    {
      title: "Mirai - Robô Autônomo",
      slug: "mirai-robo-autonomo",
      description: "Sistema de software para robô de serviço com navegação autônoma, interação humano-robô, reconhecimento de ambientes e interpretação de fala com Whisper (OpenAI).",
      longDescription: "Desenvolvimento completo do sistema de software para um robô autônomo de serviço, focado em interação humano-robô e navegação em ambientes internos. O projeto utilizou ROS2 para orquestração de módulos e comunicação entre sensores e atuadores. Foram implementadas funcionalidades avançadas de interpretação de fala utilizando Whisper (OpenAI), além de visão computacional e inteligência artificial para reconhecimento de ambientes, pessoas e tomada de decisões autônomas. O sistema foi projetado para ser modular, flexível e preparado para aplicações em contextos reais.",
      features: [
        "Navegação autônoma em ambientes internos (Nav2)",
        "Interação humano-robô por voz e visão",
        "Reconhecimento de ambientes e objetos",
        "Arquitetura modular baseada em ROS2"
      ],
      technologies: ["ROS2", "Python", "OpenAI Whisper", "Computer Vision", "Nav2"],
      link: "https://imt-at-home.github.io",
      github: "https://github.com/IMT-AT-home",
      gallery: [], // Adicione URLs de imagens aqui
      videos: ['https://youtu.be/_0UWpudF1pA'], // Adicione URLs de vídeos (YouTube ou local) aqui
    },
    {
      title: "SynMed",
      slug: "synmed",
      description: "Sistema de apoio à identificação de efeitos colaterais de medicamentos utilizando IA e processamento de linguagem natural.",
      longDescription: "O SynMed é uma ferramenta voltada à área da saúde e farmacovigilância, projetada para apoiar a análise e monitoramento de possíveis reações adversas a medicamentos. O sistema utiliza técnicas avançadas de Inteligência Artificial e Processamento de Linguagem Natural (PLN) para analisar sintomas relatados por usuários, relacioná-los com medicamentos cadastrados e indicar potenciais efeitos adversos. O objetivo é complementar o trabalho clínico e contribuir para a segurança do paciente.",
      features: [
        "Análise de sintomas com IA e PLN",
        "Identificação de efeitos adversos",
        "Suporte à farmacovigilância",
        "Monitoramento em larga escala"
      ],
      technologies: ["Python", "FastAPI", "PyTorch", "Pandas", "Numpy", "Spacy", "Streamlit", "MongoDB", "Hugging Face"],
      github: "https://github.com/PedroMatumoto/SynMed/tree/feat/api-transfering",
    },
    {
      title: "Scrapihaus",
      slug: "scrapihaus",
      description: "Plataforma de web scraping distribuído com arquitetura moderna, utilizando FastAPI, MongoDB e Cloud Run.",
      longDescription: "Projeto pessoal de uma plataforma robusta para web scraping e automação. A arquitetura é baseada em microsserviços, utilizando FastAPI para alta performance e MongoDB para armazenamento flexível de dados não estruturados. O sistema conta com agendamento avançado de processos de scraping e é implantado no Google Cloud Run, garantindo escalabilidade e eficiência. O frontend em React/TypeScript oferece uma interface intuitiva para gestão e visualização dos dados coletados.",
      features: [
        "API de alta performance com FastAPI",
        "Armazenamento NoSQL com MongoDB",
        "Deploy escalável no Google Cloud Run",
        "Agendamento de processos de scraping",
        "Frontend em React/TypeScript"
      ],
      technologies: ["FastAPI", "MongoDB", "Google Cloud Run", "Python", "React", "TypeScript", "Web Scraping"],
      github: "https://github.com/TobyNest/scrapihaus_back",
      link: "https://scrapihaus.vercel.app/",
      gallery: ['/images/scrapihaus_landing_page.png'], // Adicione URLs de imagens aqui
    },
    {
      title: "Sistema de Grade Horária (Fontys)",
      slug: "sistema-grade-horaria-fontys",
      description: "Desenvolvimento de sistema de grade horária com autenticação via Microsoft Entra ID, utilizando React, Vite e Tailwind CSS.",
      longDescription: "Projeto internacional desenvolvido para a Fontys University (Holanda). O objetivo foi criar um sistema de grade horária intuitivo e responsivo. Implementei a autenticação segura no frontend utilizando o Microsoft Entra ID (antigo Azure AD). A tecnologia utilizada incluiu React para a interface, Vite para build tool e Tailwind CSS para estilização. Além do desenvolvimento técnico, o projeto envolveu atuação como facilitador de comunicação entre as equipes do Brasil e da Holanda.",
      features: [
        "Autenticação com Microsoft Entra ID",
        "Interface Responsiva com React",
        "Estilização com Tailwind CSS",
        "Colaboração Internacional"
      ],
      technologies: ["React", "Microsoft Entra ID", "Vite", "Tailwind CSS"],
      github: "https://github.com/20242-Maua-ECM-Fontys/front",
      gallery: ['/images/fontys_grid_example.jpg', '/images/fontys_landing_page.jpg'], // Adicione URLs de imagens aqui
      videos: [], // Adicione URLs de vídeos (YouTube ou local) aqui
    },
    {
      title: "Sistema de Processamento Inteligente",
      slug: "sistema-processamento-inteligente",
      description: "Arquitetura de sistema para processamento de documentos sensíveis com IA, integrando Azure OpenAI, Django, Docker e Kubernetes.",
      longDescription: "Projeto focado na automação de fluxos de documentos e tratamento seguro de dados sensíveis. A arquitetura do sistema foi projetada e implementada com integrações de IA e pipelines de produção. O Azure OpenAI foi integrado para extração e enriquecimento de dados. O backend foi desenvolvido em Django, com automações em JavaScript. A infraestrutura foi configurada utilizando Docker e Kubernetes, com pipelines de CI/CD criados no GitHub Actions e Azure DevOps. O resultado foi um sistema robusto e escalável.",
      features: [
        "Processamento automatizado de documentos",
        "Extração de dados com Azure OpenAI",
        "Infraestrutura escalável com Kubernetes",
        "Pipelines de CI/CD automatizados"
      ],
      technologies: ["Azure OpenAI", "Django", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      title: "BoraMarcar",
      slug: "boramarcar",
      description: "Plataforma de agendamento baseada em microsserviços com TypeScript, MongoDB e princípios SOLID.",
      longDescription: "Aplicação web inspirada no When2meet, desenvolvida com uma arquitetura de microsserviços robusta utilizando TypeScript. O backend segue rigorosamente os princípios SOLID e Clean Architecture, garantindo um código desacoplado, testável e de fácil manutenção. Utiliza MongoDB para persistência de dados e oferece sugestão automática de horários baseada na disponibilidade dos participantes.",
      features: [
        "Arquitetura de Microsserviços",
        "Backend em TypeScript com SOLID",
        "Persistência com MongoDB",
        "Sugestão automática de horários"
      ],
      technologies: ["TypeScript", "Microservices", "MongoDB", "SOLID", "Clean Architecture"],
      github: "https://github.com/4-ANO-COMP-IMT/ac2",
      gallery: ['/images/bora_marcar_landing_page.png', '/images/bora_marcar_schedule_example.jpg'], // Adicione URLs de imagens aqui
    },
  ] as Project[],
  contact: {
    email: "pedromatumoto@gmail.com",
    github: "https://github.com/PedroMatumoto",
    linkedin: "https://linkedin.com/in/pedromatumoto",
  },
  ui: {
    experience: "Experiências",
    projects: "Projetos",
    skills: "Habilidades",
    contact: "Contato",
    viewProject: "Ver Projeto",
    viewCode: "Ver Código",
    viewDetails: "Ver Detalhes",
    certifications: "Certificações",
    hardSkills: "Hard Skills",
    getInTouch: "Entre em Contato",
    contactText: "Se você tem uma pergunta ou apenas quer dizer oi, farei o meu melhor para responder!",
    overview: "Visão Geral",
    keyFeatures: "Principais Funcionalidades",
    videos: "Vídeos",
    gallery: "Galeria",
    technologies: "Tecnologias",
    links: "Links",
    viewSourceCode: "Ver Código Fonte",
    liveDemo: "Demo ao Vivo",
    noLinks: "Nenhum link público disponível.",
    backToHome: "Voltar para o Início",
    about: "Sobre",
  }
};
