"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Award, Briefcase, Download, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { profile, whatsappLink } from "@/data/profile";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

// The C# snippet typed out in the code card — one line per entry
const codeLines: { text: string; tone?: "kw" | "str" | "type" | "plain" }[][] = [
  [{ text: "var ", tone: "kw" }, { text: "habibur" }, { text: " = " }, { text: "new ", tone: "kw" }, { text: "Developer", tone: "type" }, { text: " {" }],
  [{ text: "  Role" }, { text: " = " }, { text: '"Full Stack .NET"', tone: "str" }, { text: "," }],
  [{ text: "  Stack" }, { text: " = [" }, { text: '".NET"', tone: "str" }, { text: ", " }, { text: '"React"', tone: "str" }, { text: ", " }, { text: '"SQL"', tone: "str" }, { text: "]," }],
  [{ text: "  OpenToWork" }, { text: " = " }, { text: "true", tone: "kw" }],
  [{ text: "};" }],
];

const toneClass = {
  kw: "text-[#c678dd] dark:text-[#d7a3e8]",
  str: "text-[#3f8f5a] dark:text-[#9fd3a6]",
  type: "text-[#2f74b5] dark:text-[#8ec1ec]",
  plain: "",
};

function CodeCard() {
  const reduce = useReducedMotion();
  const total = codeLines.reduce((n, l) => n + l.reduce((m, s) => m + s.text.length, 0), 0);
  const [shown, setShown] = useState(reduce ? total : 0);

  useEffect(() => {
    if (reduce) {
      setShown(total);
      return;
    }
    let i = 0;
    let id: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      id = setInterval(() => {
        i += 2;
        setShown(Math.min(i, total));
        if (i >= total && id) clearInterval(id);
      }, 28);
    }, 900);
    return () => {
      clearTimeout(start);
      if (id) clearInterval(id);
    };
  }, [reduce, total]);

  let budget = shown;
  return (
    <div className="w-[300px] rounded-xl border border-line bg-surface/95 shadow-[0_18px_40px_-18px_rgb(15_23_42/0.35)] backdrop-blur sm:w-[340px]">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-coral/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-sun/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-mint/80" />
        <span className="ml-2 text-xs text-muted">Developer.cs</span>
      </div>
      <pre className="overflow-hidden px-4 py-3.5 font-code text-[12px] leading-[1.7] text-ink sm:text-[12.5px]" aria-label="C# code: a developer object with role Full Stack .NET, stack .NET, React and SQL, open to work">
        {codeLines.map((line, li) => {
          const lineLen = line.reduce((m, s) => m + s.text.length, 0);
          const before = budget;
          const out = line.map((seg, si) => {
            const take = Math.max(0, Math.min(seg.text.length, budget));
            budget -= take;
            return take > 0 ? (
              <span key={si} className={toneClass[seg.tone ?? "plain"]}>
                {seg.text.slice(0, take)}
              </span>
            ) : null;
          });
          const caretHere =
            shown < total && ((shown === 0 && li === 0) || (before > 0 && before <= lineLen));
          return (
            <div key={li} className="min-h-[1.7em] whitespace-pre">
              {out}
              {caretHere && (
                <span className="caret ml-px inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-grape" />
              )}
            </div>
          );
        })}
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft colour blobs */}
      <div aria-hidden className="blob blob-a -left-24 top-10 h-80 w-80 bg-sky" />
      <div aria-hidden className="blob blob-b right-[-6rem] top-24 h-96 w-96 bg-grape" />
      <div aria-hidden className="blob blob-c -bottom-24 right-1/4 h-72 w-72 bg-mint" />
      {/* faint dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-14 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pt-24">
        {/* Text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-muted"
          >
            <span className="pulse-dot h-2 w-2 rounded-full bg-[#22a06b]" />
            Available for freelance and full-time roles
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.25rem]"
          >
            MD. Habibur <span className="grad-text">Rahman</span>
          </motion.h1>

          <motion.div variants={item} className="mt-5 flex flex-wrap items-center gap-2 text-lg font-semibold sm:text-xl">
            <span className="text-ink">{profile.role}</span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-line sm:block" />
            <span className="flex gap-1.5 text-[13px]">
              <span className="rounded-md bg-grape-soft px-2 py-0.5 text-grape">.NET</span>
              <span className="rounded-md bg-sky-soft px-2 py-0.5 text-sky">React</span>
              <span className="rounded-md bg-sun-soft px-2 py-0.5 text-sun">SQL Server</span>
            </span>
          </motion.div>

          <motion.p variants={item} className="mt-5 max-w-[34rem] text-[17px] leading-relaxed text-muted">
            I build business software that teams rely on every day: POS, HR and e-commerce systems with
            ASP.NET Core, Web API, React and SQL Server.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="grad-bg inline-flex items-center gap-2 rounded-lg px-5 py-3 text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_var(--accent)] transition-transform hover:-translate-y-0.5"
            >
              <FaWhatsapp size={17} /> Hire me
            </a>
            <a
              href={profile.cv}
              download="MD_Habibur_Rahman_CV.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-[15px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-mint hover:text-mint"
            >
              <Download size={16} /> Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-coral" /> Dhaka, Bangladesh
            </span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-grape">
              <FaGithub size={15} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-sky">
              <FaLinkedin size={15} /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Photo + code card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="relative mx-auto w-full max-w-[340px] pb-16 sm:max-w-[400px] lg:mr-0"
        >
          {/* offset frame */}
          <div className="absolute inset-0 bottom-16 translate-x-2.5 translate-y-2.5 rounded-[28px] bg-gradient-to-br from-sky via-grape to-coral opacity-70 sm:translate-x-4 sm:translate-y-4" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-surface-2">
            <Image
              src="/image/HabiburAbout.png"
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              className="object-cover object-[center_22%]"
              sizes="(max-width: 1024px) 400px, 400px"
            />
          </div>
          <div className="absolute -left-4 bottom-0 z-10 sm:-left-14">
            <CodeCard />
          </div>

          {/* floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 220, damping: 14 }}
            className="absolute -right-3 top-8 sm:-right-8"
          >
            <div className="float-1 flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 shadow-lg">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-mint-soft text-mint">
                <Briefcase size={15} />
              </span>
              <span className="text-[12px] leading-tight">
                <span className="block font-bold text-ink">POS, HR &amp; ERP</span>
                <span className="text-muted">Enterprise systems</span>
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 220, damping: 14 }}
            className="absolute -right-2 top-[46%] sm:-right-10"
          >
            <div className="float-2 flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 shadow-lg">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-sun-soft text-sun">
                <Award size={15} />
              </span>
              <span className="text-[12px] leading-tight">
                <span className="block font-bold text-ink">788 hours</span>
                <span className="text-muted">IsDB-BISEW training</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
