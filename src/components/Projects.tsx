"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, type Project, type ProjectType } from "@/data/projects";
import Section, { tones, toneAt, type Tone } from "./Section";

const tabs: { type: ProjectType; label: string; grad: string }[] = [
  { type: "personal project", label: "Personal", grad: "from-sky to-grape" },
  { type: "professional contribution", label: "Professional", grad: "from-mint to-sky" },
  { type: "other", label: "Practice & other", grad: "from-sun to-coral" },
];

const MAX_TECH = 5;

function ProjectCard({ project, tone, index }: { project: Project; tone: Tone; index: number }) {
  const extra = project.tech.length - MAX_TECH;
  const t = tones[tone];
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ ["--tone" as string]: t.shadow }}
      className={`lift group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface p-6 ${t.border}`}
    >
      <span aria-hidden className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${t.bar}`} />
      <div className="flex items-start gap-3">
        <span className={`grid h-10 w-10 flex-none place-items-center rounded-lg ${t.soft} ${t.text} transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}>
          <FolderGit2 size={19} />
        </span>
        <h3 className="pt-1.5 text-[17px] font-bold leading-snug text-ink">{project.title}</h3>
      </div>
      <div className="mt-3 flex-1">
        <p className="line-clamp-4 text-[15px] leading-relaxed text-muted" title={project.description}>
          {project.description}
        </p>
      </div>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.slice(0, MAX_TECH).map((tech) => (
          <li key={tech} className={`rounded px-2 py-0.5 text-[12.5px] font-semibold ${t.chip}`}>
            {tech}
          </li>
        ))}
        {extra > 0 && (
          <li className="rounded px-2 py-0.5 text-[12.5px] font-medium text-muted" title={project.tech.slice(MAX_TECH).join(", ")}>
            +{extra} more
          </li>
        )}
      </ul>

      {(project.github || project.demo) && (
        <div className="mt-6 flex gap-5 border-t border-line pt-4 text-sm font-semibold">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
            >
              <FaGithub size={15} /> Source code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
            >
              <ExternalLink size={15} /> Live demo
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState<ProjectType>("personal project");
  const list = projects.filter((p) => p.type === active);

  return (
    <Section
      id="projects"
      title="Projects"
      intro="Personal builds, work I contributed to, and practice projects."
      icon={FolderGit2}
      tone="grape"
    >
      {/* Tabs */}
      <div role="tablist" aria-label="Project categories" className="inline-flex flex-wrap gap-1 rounded-xl border border-line bg-surface p-1">
        {tabs.map((t) => {
          const count = projects.filter((p) => p.type === t.type).length;
          const selected = active === t.type;
          return (
            <button
              key={t.type}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(t.type)}
              className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                selected ? "text-white" : "text-muted hover:text-ink"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="project-tab"
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r ${t.grad}`}
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative">
                {t.label} <span className="opacity-70">{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mt-8 grid gap-5 md:grid-cols-2"
        >
          {list.map((p, i) => (
            <ProjectCard key={p.title} project={p} tone={toneAt(i)} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
