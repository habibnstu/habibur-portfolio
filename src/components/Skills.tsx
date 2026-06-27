"use client";

import {
  Code2,
  Layers3,
  Database,
  Wrench,
} from "lucide-react";
import { skillCategories } from "@/data/skills";

const icons = {
  Languages: Code2,
  "Frameworks & Technologies": Layers3,
  Databases: Database,
  "Tools & Others": Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto py-5"
    >
      {/* Section Heading */}
      <div className="text-center mb-5">
        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
          Expertise
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto mt-4 rounded-full" />
        <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I use to build scalable, high-performance web applications
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = icons[category.title as keyof typeof icons];

          return (
            <div
              key={category.title}
              className="group bg-white dark:bg-gray-900/90 border border-gray-100 dark:border-gray-800 rounded-xl p-7 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-500/10 dark:to-blue-500/10">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}