import { ExternalLink, Github } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { projects } from "@/data/portfolio";

export function ProjectsGrid() {
  return (
    <MotionSection id="projects" className="section-shell scroll-mt-24">
      <div className="mb-10">
        <div>
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title">Some projects.</h2>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="card group flex h-full flex-col p-6 hover:-translate-y-1 hover:border-teal/50">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-100">
                {project.title}
              </h3>
              <div className="flex gap-2">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-teal dark:text-slate-400 dark:hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target={project.demo === "#" ? undefined : "_blank"}
                    rel={project.demo === "#" ? undefined : "noreferrer"}
                    aria-label={`${project.title} demo`}
                    className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-teal dark:text-slate-400 dark:hover:bg-white/10"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>
            <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
