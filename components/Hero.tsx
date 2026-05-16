import { LampThemeToggle } from "@/components/LampThemeToggle";
import { SocialIconButtons } from "@/components/SocialIconButtons";

export function Hero() {
  return (
    <section id="top" className="section-shell grid items-center gap-8 pt-8 md:min-h-[calc(100vh-4rem)] md:grid-cols-[1fr_1fr] md:gap-12">
      <div>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
          Hi, I&apos;m Amy.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
          I&apos;m a Computer Science student at UBC who enjoys building
          full-stack applications and learning how systems work.
        </p>
        <div className="mt-8 hidden sm:block">
          <SocialIconButtons includeLabels />
        </div>
      </div>

      <div className="relative md:-mt-8">
        <LampThemeToggle />
      </div>
    </section>
  );
}
