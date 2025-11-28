import {
  SiPython,
  SiRos,
  SiC,
  SiOpencv,
  SiDjango,
  SiDocker,
  SiAmazonwebservices,
  SiGooglecloud,
  SiTerraform,
  SiTypescript,
  SiReact,
  SiFastapi,
  SiKubernetes,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiLinux,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiWordpress,
  SiR,
  SiOpenai,
  SiDotnet,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiStreamlit,
  SiSpacy,
  SiHuggingface,
} from "react-icons/si";
import { FaRobot, FaCode } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

export const getTechIcon = (tech: string) => {
  const normalizedTech = tech.toLowerCase().replace(/\s+/g, "");

  switch (normalizedTech) {
    case "python":
      return <SiPython className="text-[#3776AB]" />;
    case "pytorch":
      return <SiPytorch className="text-[#EE4C2C]" />;
    case "pandas":
      return <SiPandas className="text-[#150458]" />;
    case "numpy":
      return <SiNumpy className="text-[#013243]" />;
    case "streamlit":
      return <SiStreamlit className="text-[#FF4B4B]" />;
    case "spacy":
      return <SiSpacy className="text-[#09A3D5]" />;
    case "huggingface":
    case "sentencetransformers":
    case "transformers":
      return <SiHuggingface className="text-[#FFD21E]" />;
    case "ros2":
    case "ros":
      return <SiRos className="text-[#22314E]" />;
    case "c":
      return <SiC className="text-[#A8B9CC]" />;
    case "c#":
    case "csharp":
      return <TbBrandCSharp className="text-[#239120]" />;
    case "wpf":
    case "dotnet":
    case ".net":
      return <SiDotnet className="text-[#512BD4]" />;
    case "opencv":
    case "computervision":
      return <SiOpencv className="text-[#5C3EE8]" />;
    case "nav2":
    case "moveit":
    case "gazebo":
    case "slam":
      return <FaRobot className="text-stone-600" />;
    case "microsoftsqlserver":
    case "sqlserver":
      return <DiMsqlServer className="text-[#CC2927]" />;
    case "django":
      return <SiDjango className="text-[#092E20]" />;
    case "docker":
      return <SiDocker className="text-[#2496ED]" />;
    case "azure":
    case "azurecloud":
    case "azureopenai":
      return <VscAzure className="text-[#0078D4]" />;
    case "aws":
      return <SiAmazonwebservices className="text-[#FF9900]" />;
    case "googlecloud":
      return <SiGooglecloud className="text-[#4285F4]" />;
    case "terraform":
      return <SiTerraform className="text-[#7B42BC]" />;
    case "typescript":
      return <SiTypescript className="text-[#3178C6]" />;
    case "react":
    case "reactjs":
      return <SiReact className="text-[#61DAFB]" />;
    case "fastapi":
      return <SiFastapi className="text-[#009688]" />;
    case "kubernetes":
      return <SiKubernetes className="text-[#326CE5]" />;
    case "next.js":
    case "nextjs":
      return <SiNextdotjs className="text-black" />;
    case "tailwind":
    case "tailwindcss":
      return <SiTailwindcss className="text-[#06B6D4]" />;
    case "mongodb":
      return <SiMongodb className="text-[#47A248]" />;
    case "postgresql":
      return <SiPostgresql className="text-[#4169E1]" />;
    case "linux":
      return <SiLinux className="text-black" />;
    case "html":
    case "html/css":
      return <SiHtml5 className="text-[#E34F26]" />;
    case "css":
      return <SiCss3 className="text-[#1572B6]" />;
    case "figma":
      return <SiFigma className="text-[#F24E1E]" />;
    case "wordpress":
      return <SiWordpress className="text-[#21759B]" />;
    case "r":
      return <SiR className="text-[#276DC3]" />;
    case "openaiwhisper":
    case "openai":
      return <SiOpenai className="text-[#412991]" />;
    case "cleanarchitecture":
    case "backend":
    case "restapi":
    case "rpa":
    case "cicd":
    case "ci/cd":
      return <FaCode className="text-stone-500" />;
    default:
      return <FaCode className="text-stone-400" />;
  }
};
