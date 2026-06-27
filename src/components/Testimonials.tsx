"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="max-w-6xl mx-auto py-5"
    >
      {/* Heading */}
      <div className="text-center mb-5">
        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
          What People Say
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto mt-3 rounded-full" />
        <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Kind words from colleagues and clients
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="group bg-white dark:bg-gray-900/90 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Quote Icon */}
            <div className="text-6xl text-indigo-200 dark:text-indigo-800/50 font-serif">
              “
            </div>

            {/* Text */}
            <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {t.text}
            </p>

            {/* Rating */}
            <div className="flex gap-1 mt-6">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className="w-5 h-5 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            {/* Profile */}
            <div className="flex items-center gap-4 mt-8 pt-4 border-t border-gray-100 dark:border-gray-800">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-indigo-500/20">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}