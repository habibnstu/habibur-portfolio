"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type Tone = "sky" | "mint" | "grape" | "sun" | "coral";

/** Literal class strings per colour so Tailwind can see them */
export const tones: Record<
  Tone,
  { text: string; soft: string; dot: string; border: string; chip: string; bar: string; shadow: string }
> = {
  sky: {
    text: "text-sky",
    soft: "bg-sky-soft",
    dot: "bg-sky",
    border: "hover:border-sky/50",
    chip: "bg-sky-soft text-sky",
    bar: "from-sky to-grape",
    shadow: "var(--sky)",
  },
  mint: {
    text: "text-mint",
    soft: "bg-mint-soft",
    dot: "bg-mint",
    border: "hover:border-mint/50",
    chip: "bg-mint-soft text-mint",
    bar: "from-mint to-sky",
    shadow: "var(--mint)",
  },
  grape: {
    text: "text-grape",
    soft: "bg-grape-soft",
    dot: "bg-grape",
    border: "hover:border-grape/50",
    chip: "bg-grape-soft text-grape",
    bar: "from-grape to-coral",
    shadow: "var(--grape)",
  },
  sun: {
    text: "text-sun",
    soft: "bg-sun-soft",
    dot: "bg-sun",
    border: "hover:border-sun/50",
    chip: "bg-sun-soft text-sun",
    bar: "from-sun to-coral",
    shadow: "var(--sun)",
  },
  coral: {
    text: "text-coral",
    soft: "bg-coral-soft",
    dot: "bg-coral",
    border: "hover:border-coral/50",
    chip: "bg-coral-soft text-coral",
    bar: "from-coral to-grape",
    shadow: "var(--coral)",
  },
};

export const toneCycle: Tone[] = ["sky", "mint", "grape", "sun", "coral"];
export const toneAt = (i: number) => toneCycle[i % toneCycle.length];

type SectionProps = {
  id?: string;
  title: string;
  intro?: string;
  icon?: LucideIcon;
  tone?: Tone;
  children: React.ReactNode;
};

/**
 * Résumé-style section: the title sits in a left column (sticky on large
 * screens) and the content reads in the right column.
 */
export default function Section({ id, title, intro, icon: Icon, tone = "sky", children }: SectionProps) {
  const t = tones[tone];
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="grid gap-8 border-t border-line py-16 md:py-20 lg:grid-cols-[260px_1fr] lg:gap-16">
        <motion.header
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          {Icon && (
            <motion.span
              initial={{ scale: 0.6, rotate: -12, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
              className={`mb-4 grid h-11 w-11 place-items-center rounded-xl ${t.soft} ${t.text}`}
            >
              <Icon size={21} strokeWidth={2} />
            </motion.span>
          )}
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{title}</h2>
          <span className={`mt-3 block h-1 w-10 rounded-full bg-gradient-to-r ${t.bar}`} />
          {intro && <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted">{intro}</p>}
        </motion.header>

        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

/** Fade-up for content blocks, played once. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Tinted tag. Pass a tone to colour it; chips pop in one after another. */
export function Chip({ children, tone, index = 0 }: { children: React.ReactNode; tone?: Tone; index?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.15 + index * 0.035 }}
      whileHover={{ y: -2 }}
      className={`inline-flex cursor-default items-center rounded-md px-2.5 py-1 text-[13px] font-semibold ${
        tone ? tones[tone].chip : "bg-surface-2 text-ink/85"
      }`}
    >
      {children}
    </motion.span>
  );
}
