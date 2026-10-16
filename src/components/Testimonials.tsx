"use client";

import { testimonials } from "@/data/testimonials";
import { MessageSquareQuote } from "lucide-react";
import Section, { Reveal, tones, type Tone } from "./Section";

const quoteTones: Tone[] = ["coral", "sky"];

const initials = (name: string) =>
  name
    .replace(/^(Md\.|MD\.|Syed)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export default function Testimonials() {
  return (
    <Section id="testimonials" title="Kind words" intro="From mentors and colleagues I’ve worked with." icon={MessageSquareQuote} tone="coral">
      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => {
          const tone = tones[quoteTones[i % quoteTones.length]];
          return (
          <Reveal key={t.name} delay={i * 0.08}>
            <figure
              style={{ ["--tone" as string]: tone.shadow }}
              className={`lift relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface p-6 sm:p-7 ${tone.border}`}
            >
              <span aria-hidden className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tone.bar}`} />
              <svg width="28" height="22" viewBox="0 0 28 22" className={tone.text} aria-hidden>
                <path
                  fill="currentColor"
                  d="M0 22V13.2C0 5.9 4.1 1.5 11 0l1.3 3.2C8.4 4.6 6.6 7 6.4 10.4H12V22H0Zm16 0V13.2C16 5.9 20.1 1.5 27 0l1 3.2c-3.9 1.4-5.7 3.8-5.9 7.2H28V22H16Z"
                />
              </svg>
              <blockquote className="mt-4 flex-1 text-[16.5px] leading-[1.7] text-ink/90">{t.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3.5 border-t border-line pt-5">
                <span className={`grid h-11 w-11 flex-none place-items-center rounded-full text-sm font-bold ${tone.soft} ${tone.text}`}>
                  {initials(t.name)}
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-[13px] leading-snug text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
