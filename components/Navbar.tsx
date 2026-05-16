"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { HeaderThemeToggle } from "@/components/HeaderThemeToggle";
import { SocialIconButtons } from "@/components/SocialIconButtons";
import { navItems, profile } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-cloud/80 backdrop-blur-xl dark:border-white/10 dark:bg-navy/80">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Primary navigation"
      >
        <div aria-hidden="true" className="hidden h-10 w-10 md:block" />

        <div className="md:hidden">
          <SocialIconButtons compact />
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-normal text-slate-600 transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-teal/40 dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            className="rounded-full border border-teal/40 px-4 py-2 text-sm font-medium text-slateblue transition hover:bg-teal/10 dark:text-teal"
          >
            Resume
          </a>
          <HeaderThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <HeaderThemeToggle />
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-ink transition hover:border-teal dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-200/70 bg-cloud/95 px-5 py-4 shadow-soft md:hidden dark:border-white/10 dark:bg-navy/95">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-white/70 dark:text-slate-200 dark:hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
