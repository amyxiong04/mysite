import { SocialIconButtons } from "@/components/SocialIconButtons";

export function Footer() {
  return (
    <footer id="contact" className="section-shell scroll-mt-24 pb-10 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title">Thanks for visiting!</h2>
        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
          If you&apos;d like to get in touch, feel free to reach out.
        </p>
        <div className="mt-8 flex justify-center">
          <SocialIconButtons includeLabels />
        </div>
      </div>
      <p className="mt-8 text-sm text-slate-500 dark:text-slate-500">
        Designed and built by yours truly with Next.js, TypeScript, and Tailwind CSS.
      </p>
    </footer>
  );
}
