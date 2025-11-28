"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getTechIcon } from "@/utils/icons";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProjectDetailsProps {
  slug: string;
}

export default function ProjectDetails({ slug }: ProjectDetailsProps) {
  const { t: portfolioData } = useLanguage();
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    // In a client component, we might want to handle this differently,
    // but for now, let's return null or a message.
    // notFound() might not work as expected if called during render in client component?
    // Actually it does work in App Router client components.
    return <div className="min-h-screen flex items-center justify-center">Project not found</div>;
  }

  return (
    <main className="min-h-screen bg-stone-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          {portfolioData.ui.backToHome}
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-serif">
            {project.title}
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-3">
                <span className="w-8 h-[1px] bg-stone-900"></span>
                {portfolioData.ui.overview}
              </h2>
              <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed">
                <p>{project.longDescription || project.description}</p>
              </div>
            </div>

            {project.features && (
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-stone-900"></span>
                  {portfolioData.ui.keyFeatures}
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-stone-600">
                      <span className="mt-2 w-1.5 h-1.5 bg-stone-400 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.videos && project.videos.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-stone-900"></span>
                  {portfolioData.ui.videos}
                </h2>
                <div className="space-y-6">
                  {project.videos.map((video, index) => (
                    <div key={index} className="aspect-video bg-stone-100 rounded-lg overflow-hidden border border-stone-200 shadow-sm">
                      {video.includes("youtube.com") || video.includes("youtu.be") ? (
                        <iframe
                          src={video.replace("watch?v=", "embed/").replace("youtu.be/", "www.youtube.com/embed/")}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video controls className="w-full h-full">
                          <source src={video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-stone-900"></span>
                  {portfolioData.ui.gallery}
                </h2>
                <div className="space-y-8">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative w-full bg-stone-100 rounded-lg overflow-hidden group border border-stone-200 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 border border-stone-200 shadow-sm">
              <h3 className="text-lg font-bold text-stone-900 mb-4 font-serif">{portfolioData.ui.technologies}</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm font-mono text-stone-600 bg-stone-50 px-3 py-1.5 rounded border border-stone-100"
                  >
                    <span className="text-base">{getTechIcon(tech)}</span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 border border-stone-200 shadow-sm">
              <h3 className="text-lg font-bold text-stone-900 mb-4 font-serif">{portfolioData.ui.links}</h3>
              <div className="space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    <Github size={20} />
                    <span>{portfolioData.ui.viewSourceCode}</span>
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>{portfolioData.ui.liveDemo}</span>
                  </a>
                )}
                {!project.github && !project.link && (
                  <p className="text-stone-400 text-sm italic">{portfolioData.ui.noLinks}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
