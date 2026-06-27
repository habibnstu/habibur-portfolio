"use client";

import { profile } from "@/data/profile";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href={profile.github}
            target="_blank"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}