import { Project, Experience, Certification } from "./portfolio";

export const portfolioData = {
  name: "Pedro Matumoto",
  title: "Software Engineer",
  titleJP: "ソフトウェアエンジニア",
  about: "Computer Engineer with solid experience in Robotics, Automation, Backend, and Cloud. I enjoy creating scalable solutions integrating AI, cloud infrastructure, and modern architectures.",
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
      role: "Software Engineer",
      period: "05/2025 - Present",
      description: "Development of AI document processing system (Azure OpenAI), process automation (RPA) reducing time by 30%, and distributed cloud infrastructure. Implementation of APIs with FastAPI, complex dashboards, and CI/CD pipelines.",
      technologies: ["Azure OpenAI", "RPA", "FastAPI", "CI/CD", "Azure"],
    },
    {
      company: "Alvarez & Marsal",
      role: "Software Engineering Intern",
      period: "11/2023 - 05/2025",
      description: "Developed automation solutions (RPA) in Python and desktop applications with C# WPF frontend, integrated with Microsoft SQL Server, including database modeling. Implemented distributed cloud computing systems, improving data processing by 40%. Created analytical dashboards and APIs with FastAPI, managing deployment pipelines in Azure DevOps.",
      technologies: ["Python", "RPA", "C#", "WPF", "SQL Server", "Azure", "FastAPI"],
    }
  ] as Experience[],
  projects: [
    {
      title: "Mirai - Autonomous Robot",
      slug: "mirai-robo-autonomo",
      description: "Software system for service robot with autonomous navigation, human-robot interaction, environment recognition, and speech interpretation with Whisper (OpenAI).",
      longDescription: "Complete software system development for an autonomous service robot, focused on human-robot interaction and indoor navigation. The project used ROS2 for module orchestration and communication between sensors and actuators. Advanced speech interpretation features were implemented using Whisper (OpenAI), as well as computer vision and artificial intelligence for environment recognition, people detection, and autonomous decision-making. The system was designed to be modular, flexible, and ready for real-world applications.",
      features: [
        "Autonomous indoor navigation (Nav2)",
        "Voice and vision human-robot interaction",
        "Environment and object recognition",
        "Modular architecture based on ROS2"
      ],
      technologies: ["ROS2", "Python", "OpenAI Whisper", "Computer Vision", "Nav2"],
      link: "https://imt-at-home.github.io",
      github: "https://github.com/IMT-AT-home",
      gallery: [],
      videos: ['https://youtu.be/_0UWpudF1pA'],
    },
    {
      title: "SynMed",
      slug: "synmed",
      description: "System for identifying medication side effects using AI and natural language processing.",
      longDescription: "SynMed is a tool for healthcare and pharmacovigilance, designed to support the analysis and monitoring of possible adverse drug reactions. The system uses advanced Artificial Intelligence and Natural Language Processing (NLP) techniques to analyze symptoms reported by users, relate them to registered medications, and indicate potential adverse effects. The goal is to complement clinical work and contribute to patient safety.",
      features: [
        "Symptom analysis with AI and NLP",
        "Identification of adverse effects",
        "Pharmacovigilance support",
        "Large-scale monitoring"
      ],
      technologies: ["Python", "FastAPI", "PyTorch", "Pandas", "Numpy", "Spacy", "Streamlit", "MongoDB", "Hugging Face"],
      github: "https://github.com/PedroMatumoto/SynMed/tree/feat/api-transfering",
    },
    {
      title: "Scrapihaus",
      slug: "scrapihaus",
      description: "Distributed web scraping platform with modern architecture, using FastAPI, MongoDB, and Cloud Run.",
      longDescription: "Personal project of a robust platform for web scraping and automation. The architecture is based on microservices, using FastAPI for high performance and MongoDB for flexible unstructured data storage. The system features advanced scraping process scheduling and is deployed on Google Cloud Run, ensuring scalability and efficiency. The React/TypeScript frontend offers an intuitive interface for management and visualization of collected data.",
      features: [
        "High-performance API with FastAPI",
        "NoSQL storage with MongoDB",
        "Scalable deploy on Google Cloud Run",
        "Scraping process scheduling",
        "React/TypeScript Frontend"
      ],
      technologies: ["FastAPI", "MongoDB", "Google Cloud Run", "Python", "React", "TypeScript", "Web Scraping"],
      github: "https://github.com/TobyNest/scrapihaus_back",
      link: "https://scrapihaus.vercel.app/",
      gallery: ['/images/scrapihaus_landing_page.png'],
    },
    {
      title: "Schedule System (Fontys)",
      slug: "sistema-grade-horaria-fontys",
      description: "Schedule system development with Microsoft Entra ID authentication, using React, Vite, and Tailwind CSS.",
      longDescription: "International project developed for Fontys University (Netherlands). The goal was to create an intuitive and responsive schedule system. I implemented secure frontend authentication using Microsoft Entra ID (formerly Azure AD). The technology used included React for the interface, Vite for build tool, and Tailwind CSS for styling. Besides technical development, the project involved acting as a communication facilitator between teams in Brazil and the Netherlands.",
      features: [
        "Authentication with Microsoft Entra ID",
        "Responsive Interface with React",
        "Styling with Tailwind CSS",
        "International Collaboration"
      ],
      technologies: ["React", "Microsoft Entra ID", "Vite", "Tailwind CSS"],
      github: "https://github.com/20242-Maua-ECM-Fontys/front",
      gallery: ['/images/fontys_grid_example.jpg', '/images/fontys_landing_page.jpg'],
      videos: [],
    },
    {
      title: "Intelligent Processing System",
      slug: "sistema-processamento-inteligente",
      description: "System architecture for sensitive document processing with AI, integrating Azure OpenAI, Django, Docker, and Kubernetes.",
      longDescription: "Project focused on automating document flows and secure handling of sensitive data. The system architecture was designed and implemented with AI integrations and production pipelines. Azure OpenAI was integrated for data extraction and enrichment. The backend was developed in Django, with JavaScript automations. The infrastructure was configured using Docker and Kubernetes, with CI/CD pipelines created in GitHub Actions and Azure DevOps. The result was a robust and scalable system.",
      features: [
        "Automated document processing",
        "Data extraction with Azure OpenAI",
        "Scalable infrastructure with Kubernetes",
        "Automated CI/CD pipelines"
      ],
      technologies: ["Azure OpenAI", "Django", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      title: "BoraMarcar",
      slug: "boramarcar",
      description: "Scheduling platform based on microservices with TypeScript, MongoDB, and SOLID principles.",
      longDescription: "Web application inspired by When2meet, developed with a robust microservices architecture using TypeScript. The backend strictly follows SOLID principles and Clean Architecture, ensuring decoupled, testable, and maintainable code. Uses MongoDB for data persistence and offers automatic schedule suggestions based on participant availability.",
      features: [
        "Microservices Architecture",
        "Backend in TypeScript with SOLID",
        "Persistence with MongoDB",
        "Automatic schedule suggestion"
      ],
      technologies: ["TypeScript", "Microservices", "MongoDB", "SOLID", "Clean Architecture"],
      github: "https://github.com/4-ANO-COMP-IMT/ac2",
      gallery: ['/images/bora_marcar_landing_page.png', '/images/bora_marcar_schedule_example.jpg'],
    },
  ] as Project[],
  contact: {
    email: "pedromatumoto@gmail.com",
    github: "https://github.com/PedroMatumoto",
    linkedin: "https://linkedin.com/in/pedromatumoto",
  },
  ui: {
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    viewProject: "View Project",
    viewCode: "View Code",
    viewDetails: "View Details",
    certifications: "Certifications",
    hardSkills: "Hard Skills",
    getInTouch: "Get In Touch",
    contactText: "Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    overview: "Overview",
    keyFeatures: "Key Features",
    videos: "Videos",
    gallery: "Gallery",
    technologies: "Technologies",
    links: "Links",
    viewSourceCode: "View Source Code",
    liveDemo: "Live Demo",
    noLinks: "No public links available.",
    backToHome: "Back to Home",
    about: "About",
  }
};
