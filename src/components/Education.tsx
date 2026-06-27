"use client";

import { GraduationCap, School } from "lucide-react";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto  py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
          Academics
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
          Educational Qualification
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto mt-3 rounded-full" />
        <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Academic background and educational achievements
        </p>
      </div>

      {/* Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => {
          const Icon = edu.type === "university" ? GraduationCap : School;

          return (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900/90 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-5">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-500/10 dark:to-blue-500/10">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>

                      {edu.institute && (
                        <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                          {edu.institute}
                        </p>
                      )}

                      {edu.department && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                          {edu.department}
                        </p>
                      )}

                      {edu.board && (
                        <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                          Board: {edu.board}
                        </p>
                      )}

                      {edu.group && (
                        <p className="text-gray-500 dark:text-gray-500 text-sm">
                          Group: {edu.group}
                        </p>
                      )}

                      {edu.session && (
                        <p className="text-gray-400 dark:text-gray-600 text-xs mt-2">
                          Session: {edu.session}
                        </p>
                      )}

                      <p className="text-gray-400 dark:text-gray-600 text-xs">
                        Passing Year: {edu.passingYear}
                      </p>
                    </div>

                    {/* Result Badge */}
                    <div>
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-500/20">
                        {edu.result}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}