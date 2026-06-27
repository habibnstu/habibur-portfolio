"use client";

import { Check, Briefcase } from "lucide-react";
import { experience } from "@/data/experience";

export default function Experience() {
  const exp = experience[0];

  const bullets = [
    "Maintain and enhance features for large-scale POS system, HR software, and ecommerce platforms.",
    "Develop and maintain ASP.NET Core Web API and MVC applications.",
    "Build responsive UI using React and Next.js.",
    "Contribute to internal enterprise systems and automation tools."
  ];

  const skills = [
    ".NET Core",
    "C#",
    "ASP.NET",
    "Web API",
    "React",
    "Next.js",
    "POS Systems",
    "MVC"
  ];

  return (
    <section className="max-w-6xl mx-auto  py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
          Career
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
          Work Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Card */}
      <div className="relative group bg-white dark:bg-gray-900/90 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">

        {/* Icon */}
        <div className="absolute top-6 right-6 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-500/10">
          <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        </div>

        {/* Header */}
        <div className="pr-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {exp.company}
          </h3>

          <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-2">
            {exp.role}
          </p>

          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {exp.duration}
            {exp.location && ` • ${exp.location}`}
          </div>
        </div>

        {/* Bullet Points */}
        <div className="mt-6 space-y-3">
          {bullets.map((item, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center mt-0.5">
                <Check className="text-indigo-600 dark:text-indigo-400 w-3 h-3" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}