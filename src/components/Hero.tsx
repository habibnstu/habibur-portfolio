"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/CV Habibur Rahman.pdf";
    link.download = "MD_Habibur_Rahman_CV.pdf";
    link.click();
  };

  const handleWhatsApp = () => {
    const phone = "8801768238762";
    const message = "Hello MD. Habibur Rahman, I would like to hire you.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-white via-indigo-50/30 to-white dark:from-gray-950 dark:via-gray-500 dark:to-gray-950 px-6 pt-20">

      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-5">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">

          {/* Glass badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex px-5 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-500/10 dark:to-blue-500/10 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-500/20 text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-6"
          >
            🚀 Available for Freelance & Full-Time Roles
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            .NET Full Stack
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Developer
            </span>
          </motion.h1>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-4"
          >
            {profile.name}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-5 text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed"
          >
            Building scalable web applications and enterprise systems
            with .NET, React, and modern cloud architecture.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={handleWhatsApp}
              className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Hire Me
            </button>

            <button
              onClick={handleDownloadCV}
              className="px-8 py-3.5 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Download CV
            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative">  
            
            {/* Glow background shape */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 to-blue-500/30 blur-3xl rounded-full"></div>

              {/* Glass card */}
              <div className="relative w-[280px] h-[360px] md:w-[380px] md:h-[480px] rounded-3xl overflow-hidden border-2 border-white/30 dark:border-gray-700/50 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm shadow-2xl">
                <Image
                    src="/image/HabiburAbout.png"
                    alt="Profile Picture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 880px) 100vw, (max-width: 1400px) 50vw, 33vw"
                    preload={true}           
                    fetchPriority="high"     
                  />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-lg whitespace-nowrap">
                .NET • React • Next.js
              </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}