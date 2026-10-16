"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Check } from "lucide-react";
import { experience } from "@/data/experience";
import Section, { Chip, Reveal, toneAt } from "./Section";

const bullets = [
  "Maintain and enhance features for large-scale POS, HR and e-commerce platforms.",
  "Develop and maintain ASP.NET Core Web API and MVC applications.",
  "Build responsive interfaces with React and Next.js.",
  "Contribute to internal enterprise systems and automation tools.",
];

const stack = [".NET Core", "C#", "ASP.NET", "Web API", "React", "Next.js", "MVC", "SQL Server"];

export default function Experience() {
  return (
    <Section id="experience" title="Experience" intro="Where I build software today." icon={BriefcaseBusiness} tone="mint">
      {experience.map((exp) => (
        <Reveal key={exp.company}>
          <article
            style={{ ["--tone" as string]: "var(--mint)" }}
            className="lift relative overflow-hidden rounded-xl border border-line bg-surface p-6 hover:border-mint/50 sm:p-8"
          >
            <span aria-hidden className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-mint to-sky" />
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-ink">{exp.role}</h3>
                <p className="mt-1 font-semibold text-mint">
                  {exp.company}
                  {exp.location && <span className="font-normal text-muted">, {exp.location}</span>}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-mint-soft px-3 py-1 text-[13px] font-semibold text-mint">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint" />
                {exp.duration}
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex gap-3 leading-relaxed text-ink/85"
                >
                  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-mint-soft text-mint">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {b}
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
              {stack.map((s, i) => (
                <Chip key={s} tone={toneAt(i)} index={i}>
                  {s}
                </Chip>
              ))}
            </div>
          </article>
        </Reveal>
      ))}
    </Section>
  );
}
