"use client";

import { Award, CalendarDays, Clock3, Building2 } from "lucide-react";
import { professionalTraining } from "@/data/professionalTraining";
import Section, { Chip, Reveal, toneAt } from "./Section";

export default function ProfessionalTraining() {
  return (
    <Section
      id="training"
      title="Professional training"
      intro="Industry-focused training that shaped my .NET skills."
      icon={Award}
      tone="sun"
    >
      {professionalTraining.map((t) => (
        <Reveal key={t.title}>
          <article
            style={{ ["--tone" as string]: "var(--sun)" }}
            className="lift overflow-hidden rounded-xl border border-line bg-surface hover:border-sun/50"
          >
            <div className="h-1.5 bg-gradient-to-r from-sun via-coral to-grape" />
            <div className="p-6 sm:p-8">
              <h3 className="text-lg font-bold leading-snug text-ink sm:text-xl">{t.title}</h3>
              <p className="mt-1.5 font-semibold text-sun">{t.courseName}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Building2, text: t.institute, cls: "bg-grape-soft text-grape" },
                  { icon: CalendarDays, text: t.duration, cls: "bg-sky-soft text-sky" },
                  { icon: Clock3, text: t.hours.replace(" • ", ", "), cls: "bg-mint-soft text-mint" },
                ].map(({ icon: Icon, text, cls }) => (
                  <div key={text} className="flex items-center gap-2.5 rounded-lg bg-surface-2 p-3 text-[13.5px] font-medium text-ink/85">
                    <span className={`grid h-8 w-8 flex-none place-items-center rounded-md ${cls}`}>
                      <Icon size={15} />
                    </span>
                    {text}
                  </div>
                ))}
              </div>

              <p className="mt-6 max-w-[64ch] leading-[1.75] text-ink/85">{t.overview}</p>

              <h4 className="mt-6 text-sm font-semibold text-ink">Key focus areas</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.keyFocusAreas.map((a, i) => (
                  <Chip key={a} tone={toneAt(i + 3)} index={i}>
                    {a}
                  </Chip>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </Section>
  );
}
