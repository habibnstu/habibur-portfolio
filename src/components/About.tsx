"use client";

import { Mail, MapPin, Phone, UserRound } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";
import Section, { Reveal, tones, type Tone } from "./Section";

const details = [
  { icon: MapPin, label: "Location", value: profile.location, tone: "coral" as Tone },
  { icon: Phone, label: "Phone / WhatsApp", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, tone: "mint" as Tone },
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, tone: "sky" as Tone },
];

export default function About() {
  return (
    <Section id="about" title="About me" intro="A short introduction and how to reach me." icon={UserRound} tone="sky">
      <Reveal>
        <p className="max-w-[62ch] text-lg leading-[1.75] text-ink/90">
          I’m a .NET Full Stack Developer who enjoys turning business processes into reliable software.
          I work with ASP.NET Core, Web API, React and Angular, and I care about clean architecture,
          secure APIs and SQL that stays fast as the data grows.
        </p>
        <p className="mt-5 max-w-[62ch] leading-[1.75] text-muted">
          Today I maintain and extend POS, HR and e-commerce systems at Fashion Tax Ltd. Before that I
          completed the 788-hour IsDB-BISEW ESAD-CS programme, building full-stack projects end to end.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2">
          {details.map(({ icon: Icon, label, value, href, tone }, i) => (
            <div
              key={label}
              style={{ ["--tone" as string]: tones[tone].shadow }}
              className={`lift flex items-start gap-4 rounded-xl border border-line bg-surface p-5 ${tones[tone].border} ${
                i === details.length - 1 ? "sm:col-span-2" : ""
              }`}
            >
              <span className={`grid h-10 w-10 flex-none place-items-center rounded-lg ${tones[tone].soft} ${tones[tone].text}`}>
                <Icon size={18} />
              </span>
              <div className="min-w-0">
              <dt className="text-[13px] text-muted">{label}</dt>
              <dd className="mt-1 break-words text-[15px] font-semibold text-ink">
                {href ? (
                  <a href={href} className="transition-colors hover:text-accent">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:-translate-y-0.5 hover:border-sky hover:text-sky"
          >
            <FaLinkedin size={16} /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:-translate-y-0.5 hover:border-grape hover:text-grape"
          >
            <FaGithub size={16} /> GitHub
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
