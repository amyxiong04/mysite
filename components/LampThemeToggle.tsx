"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function LampThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="relative mx-auto flex h-[24rem] w-full max-w-[34rem] items-end justify-center sm:h-[29rem]">
      {mounted ? (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-[45%] top-[5.05rem] z-10 flex items-center gap-2 text-[0.76rem] font-normal italic text-slate-500/85 dark:text-slate-300/75 sm:top-[5.6rem]"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          lights?
        </motion.span>
      ) : null}

      <motion.span
        aria-hidden="true"
        className="absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full bg-lamp/30 blur-3xl dark:bg-teal/10"
        animate={{ opacity: isDark ? 0.32 : 0.95, scale: isDark ? 0.86 : 1.08 }}
        transition={{ duration: 0.45 }}
      />

      <svg
        viewBox="0 -64 560 504"
        role="img"
        aria-label="Illustrated desk with computer, plant, and lamp"
        className="pointer-events-none relative h-full w-full drop-shadow-xl"
      >
        <defs>
          <linearGradient id="screenGlow" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor={isDark ? "#43c7b5" : "#bde8ef"} />
            <stop offset="1" stopColor={isDark ? "#9f8cff" : "#f5d7e8"} />
          </linearGradient>
        </defs>

        <motion.path
          d="M308 66 L230 352 H386 Z"
          fill={isDark ? "rgba(67,199,181,0.14)" : "rgba(255,209,102,0.34)"}
          animate={{ opacity: isDark ? 0.22 : 0.95 }}
          transition={{ duration: 0.4 }}
        />

        <rect x="198" y="194" width="268" height="140" rx="10" fill={isDark ? "#111827" : "#ffffff"} stroke={isDark ? "#43c7b5" : "#26354f"} strokeWidth="7" />
        <rect x="214" y="211" width="236" height="96" rx="3" fill={isDark ? "#172033" : "#eff4f8"} />
        <rect x="226" y="224" width="76" height="44" rx="6" fill="url(#screenGlow)" opacity={isDark ? 0.55 : 0.8} />
        <rect x="226" y="279" width="76" height="24" rx="6" fill={isDark ? "#2a3550" : "#d9bfde"} />
        <rect x="322" y="224" width="104" height="6" rx="3" fill={isDark ? "#60728f" : "#aab4c3"} />
        <rect x="322" y="241" width="88" height="5" rx="3" fill={isDark ? "#43546e" : "#c3cbd5"} />
        <rect x="322" y="258" width="120" height="5" rx="3" fill={isDark ? "#43546e" : "#c3cbd5"} />
        <rect x="322" y="285" width="92" height="5" rx="3" fill={isDark ? "#43546e" : "#c3cbd5"} />
        <rect x="322" y="302" width="96" height="5" rx="3" fill={isDark ? "#43546e" : "#c3cbd5"} />
        <rect x="304" y="334" width="56" height="18" fill={isDark ? "#253044" : "#d5d7dc"} />
        <circle cx="332" cy="322" r="6" fill={isDark ? "#43c7b5" : "#26354f"} />

        <rect x="382" y="270" width="75" height="50" rx="4" fill={isDark ? "#071426" : "#26354f"} stroke={isDark ? "#43c7b5" : "#cfd6df"} strokeWidth="3" />
        <circle cx="393" cy="280" r="2.5" fill="#f87171" />
        <circle cx="404" cy="280" r="2.5" fill="#fbbf24" />
        <circle cx="415" cy="280" r="2.5" fill="#34d399" />
        <path d="M394 298 L404 305 L394 312" fill="none" stroke={isDark ? "#43c7b5" : "#dce5ef"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        <path d="M122 352 H166 L160 291 H128 Z" fill={isDark ? "#72534f" : "#d3b59a"} />
        <path d="M124 292 H164" stroke={isDark ? "#95746b" : "#b99a82"} strokeWidth="8" strokeLinecap="round" />
        <path d="M145 291 C124 255 114 232 120 212 C142 233 151 257 145 291Z" fill={isDark ? "#43c7b5" : "#58b99b"} />
        <path d="M145 292 C160 251 180 233 199 226 C196 259 176 283 145 292Z" fill={isDark ? "#6ee7b7" : "#78cdb5"} />
        <path d="M142 292 C132 252 142 228 158 210 C169 240 164 269 142 292Z" fill={isDark ? "#2fb398" : "#8ed9c2"} />

        <rect x="92" y="309" width="14" height="43" rx="2" fill={isDark ? "#9f8cff" : "#9f8cff"} />
        <rect x="110" y="299" width="16" height="53" rx="2" fill={isDark ? "#f0abfc" : "#d88aa5"} />
        <rect x="130" y="293" width="16" height="59" rx="2" fill={isDark ? "#43c7b5" : "#8fd2cc"} />
        <path d="M78 349 L92 305 L105 309 L91 352 Z" fill={isDark ? "#dbeafe" : "#eef5f5"} stroke={isDark ? "#43c7b5" : "#8fd2cc"} strokeWidth="3" />

        <motion.line x1="308" y1="-64" x2="308" y2="86" stroke={isDark ? "#8ea3c0" : "#79849a"} strokeWidth="5" />
        <rect x="294" y="80" width="28" height="20" rx="7" fill={isDark ? "#7c6ee6" : "#9f8cff"} />
        <path d="M247 149 C250 96 272 70 308 70 C344 70 366 96 369 149 Z" fill={isDark ? "#6d5fcf" : "#9f8cff"} />
        <motion.circle
          cx="308"
          cy="151"
          r="29"
          fill={isDark ? "rgba(67,199,181,0.22)" : "rgba(255,244,184,0.42)"}
          animate={{ opacity: isDark ? 0.32 : 0.8, scale: isDark ? 0.95 : 1.08 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.8 }}
        />
        <motion.circle
          cx="308"
          cy="154"
          r="23"
          fill={isDark ? "#43c7b5" : "#fff4b8"}
          animate={{ opacity: isDark ? 0.48 : 1, scale: isDark ? 0.96 : 1.02 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.8 }}
        />
        <path d="M247 149 C250 96 272 70 308 70 C344 70 366 96 369 149 Z" fill={isDark ? "#6d5fcf" : "#9f8cff"} />
        <rect x="241" y="146" width="134" height="8" rx="4" fill={isDark ? "#a5b4fc" : "#6b7280"} />

        <rect x="58" y="352" width="444" height="16" rx="8" fill={isDark ? "#13243a" : "#394152"} />

        <path
          d="M171 316 H207 L202 352 H176 Z"
          fill={isDark ? "#f0abfc" : "#d9859c"}
        />
        <path
          d="M177 316 H201"
          stroke={isDark ? "#f5d0fe" : "#e5a2b3"}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M430 352 C433 336 445 327 460 330 C473 333 481 342 483 352 Z"
          fill={isDark ? "#31425c" : "#d8dde5"}
        />
        <path
          d="M448 334 C455 332 464 334 470 340"
          fill="none"
          stroke={isDark ? "#50627e" : "#eef2f7"}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <button
        type="button"
        aria-label="Toggle theme"
        onClick={handleToggle}
        className="absolute left-[55%] top-0 h-[14.25rem] w-[12.5rem] -translate-x-1/2 rounded-[48%] outline-none focus:outline-none"
      />
    </div>
  );
}
