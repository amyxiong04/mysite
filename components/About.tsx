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
            I&apos;m a Computer Science student at the University of British
            Columbia with software engineering experience in both enterprise and
            research environments.
          </p>
          <p>
            Through my co-op experience, I&apos;ve worked on production software in
            the maritime industry as well as technical tooling for cancer
            research, which gave me exposure to very different kinds of
            engineering work and team environments. I&apos;ve had the chance to work
            across frontend and backend systems, contribute to production
            codebases, and get a much better understanding of how software gets
            built in practice.
          </p>
          <p>
            I&apos;m especially interested in full-stack and backend engineering,
            and I like work where there&apos;s always something new to figure out.
          </p>
          <p>
            Outside of coding, I like drawing, baking, running, hiking, and
            annoying my dog.
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
