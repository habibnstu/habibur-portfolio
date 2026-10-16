"use client";

import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";
import { education } from "@/data/education";
import Section, { Reveal, tones, type Tone } from "./Section";

const eduTones: Tone[] = ["grape", "sky", "mint"];

export default function Education() {
  return (
    <Section id="education" title="Education" intro="Academic background, most recent first." icon={GraduationCap} tone="grape">
      <ol className="relative">
        {/* animated timeline line */}
        <motion.span
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute bottom-6 left-[19px] top-6 w-[2px] origin-top rounded-full bg-gradient-to-b from-grape via-sky to-mint"
        />
        {education.map((edu, i) => {
          const tone = tones[eduTones[i % eduTones.length]];
          const Icon = edu.type === "university" ? GraduationCap : School;
          const meta = [
            edu.department,
            edu.board && `Board: ${edu.board}`,
            edu.group && `Group: ${edu.group}`,
            edu.session && `Session: ${edu.session}`,
          ].filter(Boolean);

          return (
            <li key={edu.degree} className={`relative flex gap-5 ${i < education.length - 1 ? "pb-6" : ""}`}>
              <span className={`relative z-10 grid h-10 w-10 flex-none place-items-center rounded-full ring-4 ring-bg ${tone.soft} ${tone.text}`}>
                <Icon size={18} />
              </span>
              <Reveal delay={i * 0.1} className="min-w-0 flex-1">
                <div
                  style={{ ["--tone" as string]: tone.shadow }}
                  className={`lift rounded-xl border border-line bg-surface p-5 ${tone.border}`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-bold text-ink">{edu.degree}</h3>
                    <span className="text-sm font-semibold text-muted">{edu.passingYear}</span>
                  </div>
                  {edu.institute && <p className={`mt-1 font-semibold ${tone.text}`}>{edu.institute}</p>}
                  {meta.length > 0 && <p className="mt-1.5 text-sm text-muted">{meta.join(", ")}</p>}
                  <p className={`mt-3 inline-flex rounded-md px-2.5 py-1 text-[13px] font-bold ${tone.chip}`}>{edu.result}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
