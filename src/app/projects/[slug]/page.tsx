import { portfolioData } from "@/data/portfolio";
import ProjectDetails from "./ProjectDetails";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  return <ProjectDetails slug={slug} />;
}
