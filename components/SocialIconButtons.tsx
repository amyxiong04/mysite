import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

type SocialIconButtonsProps = {
  includeLabels?: boolean;
};

const iconClass = "h-4 w-4";

export function SocialIconButtons({ includeLabels: _includeLabels = false }: SocialIconButtonsProps) {
  const links = [
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      icon: <Mail className={iconClass} aria-hidden="true" />,
    },
    {
      label: "GitHub",
      href: profile.github,
      icon: <Github className={iconClass} aria-hidden="true" />,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      icon: <Linkedin className={iconClass} aria-hidden="true" />,
    },
    {
      label: "Resume",
      href: profile.resume,
      icon: <FileText className={iconClass} aria-hidden="true" />,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
          aria-label={link.label}
          title={link.label}
          className="group/social relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 bg-white/65 text-slate-700 transition hover:-translate-y-0.5 hover:border-teal hover:text-slateblue hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-teal/40 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-teal dark:hover:text-white"
        >
          {link.icon}
          <span className="sr-only">{link.label}</span>
          <span className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 rounded-full border border-slate-200 bg-white/95 px-2.5 py-1 text-xs font-normal text-slate-600 opacity-0 shadow-soft transition group-hover/social:opacity-100 dark:border-white/10 dark:bg-navy/95 dark:text-slate-200">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
}
