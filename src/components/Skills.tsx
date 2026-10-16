"use client";

import { Code2, Database, Layers3, Wrench, Cpu } from "lucide-react";
import { skillCategories } from "@/data/skills";
import Section, { Chip, Reveal, tones, type Tone } from "./Section";

const meta: Record<string, { icon: typeof Code2; tone: Tone }> = {
  Languages: { icon: Code2, tone: "sky" },
  "Frameworks & Technologies": { icon: Layers3, tone: "grape" },
  Databases: { icon: Database, tone: "sun" },
  "Tools & Others": { icon: Wrench, tone: "mint" },
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools I use to build fast, maintainable web applications." icon={Cpu} tone="coral">
      <div className="grid gap-4 sm:grid-cols-2">
        {[...skillCategories]
          .sort((a, b) => Number(a.skills.length > 8) - Number(b.skills.length > 8))
          .map((cat, i) => {
          const m = meta[cat.title] ?? { icon: Code2, tone: "sky" as Tone };
          const t = tones[m.tone];
          const Icon = m.icon;
          const wide = cat.skills.length > 8;
          return (
            <Reveal key={cat.title} delay={i * 0.07} className={wide ? "sm:col-span-2" : ""}>
              <div
                style={{ ["--tone" as string]: t.shadow }}
                className={`lift h-full rounded-xl border border-line bg-surface p-6 ${t.border}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-lg ${t.soft} ${t.text}`}>
                    <Icon size={19} />
                  </span>
                  <h3 className="font-bold text-ink">{cat.title}</h3>
                  <span className={`ml-auto rounded-full px-2 py-0.5 text-xs font-bold ${t.chip}`}>{cat.skills.length}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((s, j) => (
                    <Chip key={s} tone={m.tone} index={j}>
                      {s}
                    </Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
