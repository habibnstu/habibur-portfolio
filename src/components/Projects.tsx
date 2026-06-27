// Projects.tsx or Projects.jsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const personal = projects.filter(
    (p) => p.type === "personal project"
  );

  const professional = projects.filter(
    (p) => p.type === "professional contribution"
  );

  const other = projects.filter((p) => p.type === "other");

  const Card = ({ project }: any) => (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white dark:bg-gray-900/90 border border-gray-100 dark:border-gray-800 rounded-2xl p-7 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
    >
      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
        {project.title}
      </h4>

      <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.tech.map((t: string) => (
          <span
            key={t}
            className="text-xs px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <ExternalLink size={16} /> Demo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <FaGithub size={16} /> GitHub
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="max-w-6xl mx-auto py-5">
      {/* HEADER */}
      <div className="text-center mb-5">
        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
          Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
          Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto mt-3 rounded-full" />
        <p className="mt-5 text-gray-600 dark:text-gray-400">
          Personal Projects & Professional Contributions
        </p>
      </div>

      {/* PERSONAL PROJECTS */}
      {personal.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 pb-2 border-b-2 border-indigo-500 inline-block">
            Personal Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {personal.map((p, i) => (
              <Card key={i} project={p} />
            ))}
          </div>
        </div>
      )}

      {/* PROFESSIONAL CONTRIBUTIONS */}
      {professional.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 pb-2 border-b-2 border-indigo-500 inline-block">
            Professional Contributions
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {professional.map((p, i) => (
              <Card key={i} project={p} />
            ))}
          </div>
        </div>
      )}

      {/* OTHER PROJECTS */}
      {other.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 pb-2 border-b-2 border-indigo-500 inline-block">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            {other.map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/90 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-bold text-gray-900 dark:text-white">
                  {p.title}
                </h4>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.github && (
                  <div className="mt-4">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <FaGithub size={14} /> View Code
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}