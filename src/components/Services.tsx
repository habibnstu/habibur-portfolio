"use client";

import {
  Code2,
  Database,
  Globe,
  Layers,
} from "lucide-react";
import { services } from "@/data/services";

const iconMap: any = {
  code: Code2,
  api: Layers,
  database: Database,
  mobile: Globe,
};

const colorMap: any = {
  blue: "text-blue-600 bg-blue-50 dark:bg-blue-500/10",
  indigo: "text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10",
  green: "text-green-600 bg-green-50 dark:bg-green-500/10",
  purple: "text-purple-600 bg-purple-50 dark:bg-purple-500/10",
};

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-6xl mx-auto  py-5"
    >
      {/* Heading */}
      <div className="text-center mb-5">
        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
          What I Offer
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
          My Services
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto mt-3 rounded-full" />
        <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Comprehensive full-stack development services
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => {
          const Icon = iconMap[service.icon];

          return (
            <div
              key={service.title}
              className="group bg-white dark:bg-gray-900/90 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${colorMap[service.color]} transition-all duration-300 group-hover:scale-110`}>
                  <Icon className="w-7 h-7" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}