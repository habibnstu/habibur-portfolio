"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { profile, whatsappLink } from "@/data/profile";

export default function HireMe() {
  return (
    <section id="hire" className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden cta-bg rounded-2xl border border-transparent px-6 py-12 text-cta-ink dark:border-line sm:px-12 sm:py-14"
      >
        {/* drifting light spots */}
        <div aria-hidden className="blob blob-a -left-10 -top-16 h-56 w-56 bg-white !opacity-20" />
        <div aria-hidden className="blob blob-b -bottom-20 right-10 h-64 w-64 bg-sun !opacity-25" />
        {/* subtle pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Have a project in mind?</h2>
            <p className="mt-3 max-w-[52ch] text-[17px] leading-relaxed opacity-85">
              I’m available for freelance work and full-time roles. Tell me what you need built with
              ASP.NET Core, React or Angular, and I’ll reply within a day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappLink("Hello, I want to hire you for a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-[15px] font-semibold text-[#3b52d1] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <FaWhatsapp size={17} /> Message on WhatsApp
            </a>
            <a
              href={profile.cv}
              download="MD_Habibur_Rahman_CV.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-cta-ink/35 px-5 py-3 text-[15px] font-semibold transition-colors hover:bg-cta-ink/10"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
