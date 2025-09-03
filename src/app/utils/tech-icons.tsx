import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiArduino,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiExpress,
  SiDjango,
  SiFlask,
  SiSpring,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiGitlab,
  SiIntellijidea,
  SiEclipseide,
  SiAndroidstudio,
  SiXcode,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiBlender,
  SiUnity,
  SiUnrealengine,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiC,
  SiPhp,
  SiRuby,
  SiGo,
  SiRust,
  SiKotlin,
  SiSwift,
  SiDart,
  SiFlutter,
  SiIonic,
  SiElectron,
  SiTauri,
  SiRedis,
  SiSqlite,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiDigitalocean,
  SiNginx,
  SiApache,
  SiJest,
  SiCypress,
  SiSelenium,
  SiPostman,
  SiInsomnia,
  SiSwagger,
  SiGraphql,
  SiLaravel,
  SiRubyonrails,
  SiFastapi,
  SiWeb3Dotjs,
  SiEthereum,
  SiSolidity,
  SiWordpress,
  SiGhost,
  SiGatsby,
  SiNuxtdotjs,
  SiSvelte,
  SiQwik,
  SiAstro,
  SiRemix,
  SiStrapi,
  SiSanity,
  SiContentful,
  SiShopify,
  SiWoocommerce,
  SiMagento,
  SiJavascript,
  SiCanva
} from 'react-icons/si'
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaLess,
  FaBootstrap,
  FaJava,
  FaApple,
  FaLinux,
  FaWindows,
  FaUbuntu,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaYarn,
  FaFigma,
  FaSketch
} from 'react-icons/fa'
import { BiLogoSpringBoot } from 'react-icons/bi'
import { DiMsqlServer } from 'react-icons/di'
import { VscAzure } from 'react-icons/vsc'

export interface TechIconProps {
  name: string
  size?: number
  className?: string
}

// Mapeamento de tecnologias para ícones
export const techIconMap: Record<string, React.ComponentType<any>> = {
  // Frontend Frameworks & Libraries
  React: SiReact,
  Vue: SiVuedotjs,
  'Vue.js': SiVuedotjs,
  Angular: SiAngular,
  Svelte: SiSvelte,
  'Next.js': SiNextdotjs,
  'Nuxt.js': SiNuxtdotjs,
  Gatsby: SiGatsby,
  Astro: SiAstro,
  Remix: SiRemix,
  Qwik: SiQwik,

  // Languages
  TypeScript: SiTypescript,
  Python: SiPython,
  Java: FaJava,
  JavaScript: SiJavascript,
  'C++': SiCplusplus,
  'C/C++': SiCplusplus,
  PHP: SiPhp,
  Ruby: SiRuby,
  Go: SiGo,
  Rust: SiRust,
  Swift: SiSwift,
  Kotlin: SiKotlin,
  Dart: SiDart,
  C: SiC,

  // Web Technologies
  HTML: FaHtml5,
  HTML5: FaHtml5,
  CSS: FaCss3Alt,
  CSS3: FaCss3Alt,
  Sass: FaSass,
  SCSS: FaSass,
  Less: FaLess,
  'Tailwind CSS': SiTailwindcss,
  Bootstrap: FaBootstrap,

  // Backend & Runtime
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  'Express.js': SiExpress,
  Django: SiDjango,
  Flask: SiFlask,
  Spring: SiSpring,
  'Spring Boot': BiLogoSpringBoot,
  Laravel: SiLaravel,
  'Ruby on Rails': SiRubyonrails,
  FastAPI: SiFastapi,

  // Databases
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  SQLite: SiSqlite,
  'SQL Server': DiMsqlServer,
  Firebase: SiFirebase,
  Supabase: SiSupabase,

  // Build Tools & Bundlers
  Vite: SiVite,

  // Mobile Development
  Flutter: SiFlutter,
  Ionic: SiIonic,

  // Desktop Development
  Electron: SiElectron,
  Tauri: SiTauri,

  // DevOps & Cloud
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  AWS: FaAws,
  'Google Cloud': SiGooglecloud,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  Heroku: SiHeroku,
  DigitalOcean: SiDigitalocean,
  Azure: VscAzure,

  // Version Control
  Git: FaGitAlt,
  GitHub: FaGithub,
  GitLab: SiGitlab,

  // Package Managers
  npm: FaNpm,
  Yarn: FaYarn,

  // Testing
  Jest: SiJest,
  Cypress: SiCypress,
  Selenium: SiSelenium,

  // Hardware & IoT
  Arduino: SiArduino,
  'Sensores Ultrassônicos': SiArduino, // Fallback para Arduino
  'Motores Servo': SiArduino, // Fallback para Arduino

  // APIs & Protocols
  GraphQL: SiGraphql,
  REST: SiPostman,
  'Socket Programming': FaJava, // Fallback para Java

  // Desktop GUI
  Swing: FaJava, // Java Swing

  // Game Development
  Unity: SiUnity,
  'Unreal Engine': SiUnrealengine,
  Blender: SiBlender,

  // Machine Learning & AI
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  OpenCV: SiOpencv,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  Jupyter: SiJupyter,

  // Design Tools
  Figma: FaFigma,
  Sketch: FaSketch,
  'Adobe Photoshop': SiAdobephotoshop,
  'Adobe Illustrator': SiAdobeillustrator,

  // Operating Systems
  Linux: FaLinux,
  Ubuntu: FaUbuntu,
  Windows: FaWindows,
  macOS: FaApple,

  // IDEs & Editors
  'IntelliJ IDEA': SiIntellijidea,
  Eclipse: SiEclipseide,
  'Android Studio': SiAndroidstudio,
  Xcode: SiXcode,

  // CMS & Headless CMS
  WordPress: SiWordpress,
  Strapi: SiStrapi,
  Sanity: SiSanity,
  Contentful: SiContentful,
  Ghost: SiGhost,

  // E-commerce
  Shopify: SiShopify,
  WooCommerce: SiWoocommerce,
  Magento: SiMagento,

  // Blockchain & Web3
  Ethereum: SiEthereum,
  Solidity: SiSolidity,
  'Web3.js': SiWeb3Dotjs,

  // Other Tools
  Postman: SiPostman,
  Insomnia: SiInsomnia,
  Swagger: SiSwagger,
  Nginx: SiNginx,
  Apache: SiApache,
  Canva: SiCanva,

  // Business Intelligence & Analytics
  'Power BI': SiPython, // Fallback para Python até ter ícone específico

  // Data Science & Analytics
  Matplotlib: SiPython, // Fallback para Python

  // Web Technologies (additional)
  'HTML/CSS': FaHtml5
}

export function TechIcon({ name, size = 20, className = '' }: TechIconProps) {
  const IconComponent = techIconMap[name]

  if (!IconComponent) {
    // Fallback para tecnologias não mapeadas - retorna um ícone genérico ou texto
    return (
      <span
        className={`inline-flex h-5 w-5 items-center justify-center rounded text-xs font-bold ${className}`}
        style={{ fontSize: `${size * 0.6}px` }}
      >
        {name.charAt(0).toUpperCase()}
      </span>
    )
  }

  return <IconComponent size={size} className={className} />
}
