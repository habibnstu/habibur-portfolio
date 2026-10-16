"use client";

import { Code2, Database, Layers, Sparkles, Workflow } from "lucide-react";
import { services } from "@/data/services";
import Section, { Reveal, tones, type Tone } from "./Section";

const iconMap: Record<string, typeof Code2> = {
  code: Code2,
  api: Layers,
  database: Database,
  mobile: Workflow,
};

const serviceTones: Tone[] = ["sky", "grape", "sun", "mint"];

export default function Services() {
  return (
    <Section id="services" title="What I can do for you" intro="Services for businesses and teams." icon={Sparkles} tone="mint">
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon] ?? Code2;
          const t = tones[serviceTones[i % serviceTones.length]];
          return (
            <Reveal key={s.title} delay={i * 0.07}>
              <div
                style={{ ["--tone" as string]: t.shadow }}
                className={`lift group relative h-full overflow-hidden rounded-xl border border-line bg-surface p-6 sm:p-7 ${t.border}`}
              >
                <span
                  aria-hidden
                  className={`absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-150 ${t.soft}`}
                />
                <span className={`relative grid h-12 w-12 place-items-center rounded-xl ${t.soft} ${t.text} transition-transform duration-300 group-hover:-rotate-6`}>
                  <Icon size={22} strokeWidth={1.9} />
                </span>
                <h3 className="relative mt-5 text-[17px] font-bold text-ink">{s.title}</h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-muted">{s.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
