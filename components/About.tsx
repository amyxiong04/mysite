import { MotionSection } from "@/components/MotionSection";

export function About() {
  return (
    <MotionSection id="about" className="section-shell scroll-mt-24">
      <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">A little about me.</h2>
        </div>
        <div className="card space-y-4 p-6 text-sm font-normal leading-7 text-slate-600 dark:text-slate-400 sm:p-8 sm:text-base">
          <p>
            I&apos;m currently studying Computer Science at the University of
            British Columbia and graduating in 2027.
          </p>
          <p>
            I originally got into software because I liked building things, but
            what kept me interested was how much there is to learn. I enjoy
            understanding how systems fit together, working through difficult
            problems, and picking up new tools along the way.
          </p>
          <p>
            So far, I&apos;ve worked in both enterprise software and research
            environments, which gave me experience with very different kinds of
            engineering work and helped me grow a lot as a developer.
          </p>
          <p>
            Lately, I&apos;ve been especially interested in full-stack development
            and backend systems.
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
