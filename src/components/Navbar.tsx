"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Glass background */}
      <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/30 dark:border-gray-800/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LEFT: Navigation Links */}
          <div className="flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
            >
              Projects
            </a>
              <a
              href="#skills"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
            >
              Contact
            </a>
          </div>

          {/* RIGHT: Profile + Theme */}
          <div className="flex items-center gap-5">
            
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Profile Section */}
            <div className="flex items-center gap-3 px-3 py-1.5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex flex-col leading-tight text-right">
                <span className="text-gray-900 dark:text-white text-sm font-semibold">
                  {profile.name}
                </span>
                <span className="text-xs text-indigo-600 dark:text-indigo-400">
                  {profile.role}
                </span>
              </div>
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-indigo-500/30">
                <Image
                  src="/image/HabiburProfile.png"
                  alt={profile.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}