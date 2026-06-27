"use client";

import {
  Award,
  CalendarDays,
  GraduationCap,
} from "lucide-react";
import { professionalTraining } from "@/data/professionalTraining";

export default function ProfessionalTraining() {
  const training = professionalTraining[0];

  return (
    <section id="training" className="max-w-6xl mx-auto  py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
          Certification
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
          Professional Training
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto mt-4 rounded-full" />
        <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Industry-focused training that strengthened my expertise
        </p>
      </div>

      {/* Training Card */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-900/90 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
        {/* Certificate Icon */}
        <div className="absolute top-6 right-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-500/10 dark:to-blue-500/10">
            <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
        </div>

        {/* Training Name */}
        <div className="pr-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-snug">
            {training.title}
          </h3>

          <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-2">
            {training.courseName}
          </p>
        </div>

        {/* Organization */}
        <div className="flex items-center gap-3 mt-6">
          <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10">
            <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </div>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {training.institute}
          </span>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-3 mt-2 text-gray-500 dark:text-gray-400">
          <CalendarDays className="w-4 h-4" />
          <span className="text-sm">
            {training.duration} • {training.hours}
          </span>
        </div>

        {/* Key Focus Areas */}
        <div className="mt-8">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
            Key Focus Areas
          </h4>

          <div className="flex flex-wrap gap-3">
            {training.keyFocusAreas.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full text-sm font-medium bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Overview
          </h4>

          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            {training.overview}
          </p>
        </div>
      </div>
    </section>
  );
}