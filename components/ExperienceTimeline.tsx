import { MotionSection } from "@/components/MotionSection";
import { experiences } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <MotionSection id="experience" className="section-shell scroll-mt-24">
      <div className="mb-10">
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title">Places I&apos;ve learned the most.</h2>
      </div>

      <div className="relative space-y-6 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-slate-300 dark:before:bg-white/10">
        {experiences.map((experience) => (
          <article key={experience.company} className="relative grid gap-4 pl-10 md:grid-cols-[13rem_1fr]">
            <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-cloud bg-teal shadow-sm dark:border-navy dark:bg-lamp" />
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              {experience.date}
            </p>
            <div className="card p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-medium text-slate-800 dark:text-slate-100">
                  {experience.role}
                </h3>
                <p className="text-sm font-medium text-teal dark:text-lamp">
                  {experience.company}
                </p>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {experience.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
