import { MotionSection } from "@/components/MotionSection";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <MotionSection id="skills" className="section-shell scroll-mt-24">
      <div className="mb-10">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">Tools I&apos;ve worked with.</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <section key={group.label} className="card p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              {group.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </MotionSection>
  );
}
