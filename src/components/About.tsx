"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MapPin, Phone, Mail, User } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
          Introduction
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* Name */}
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            MD. HABIBUR RAHMAN
          </h3>

          {/* Title */}
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-2 text-lg">
            .NET Full Stack Developer
          </p>

          {/* Bio */}
          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            A passionate .NET Full Stack Developer with hands-on experience in
            building scalable enterprise applications using ASP.NET Core, Web API,
            React, and Angular. Skilled in delivering secure, high-performance
            solutions with clean architecture and modern development practices.
          </p>

          {/* Contact Info */}
          <div className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span>Mirpur-10, Dhaka, Bangladesh</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span>+88 01768238762 (WhatsApp)</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span>mdhabibnstu@gmail.com</span>
            </div>

          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://linkedin.com/in/habibnstu"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-all duration-300"
            >
              <FaLinkedin className="w-4 h-4" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com/habibnstu"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <FaGithub className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (PHOTO CARD) */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-2xl opacity-30" />

            {/* Image box */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 dark:border-gray-700/50 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
              <Image
                src="/image/profile.jpg"
                alt="Profile Picture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}