"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";

export default function Footer() {
  const links = [
    { href: profile.github, label: "GitHub", icon: FaGithub, external: true, cls: "hover:bg-grape-soft hover:text-grape" },
    { href: profile.linkedin, label: "LinkedIn", icon: FaLinkedin, external: true, cls: "hover:bg-sky-soft hover:text-sky" },
    { href: `mailto:${profile.email}`, label: "Email", icon: Mail, external: false, cls: "hover:bg-coral-soft hover:text-coral" },
  ];

  return (
    <footer className="relative mt-10 border-t border-line">
      <div aria-hidden className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-grape/60 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 pb-24 sm:flex-row sm:px-8 sm:pb-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-2">
          {links.map(({ href, label, icon: Icon, external, cls }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={`grid h-9 w-9 place-items-center rounded-lg text-muted transition-all hover:-translate-y-0.5 ${cls}`}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
