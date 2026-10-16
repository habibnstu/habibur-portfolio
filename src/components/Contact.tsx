"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, MessageCircleHeart, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";
import Section, { Reveal, tones, type Tone } from "./Section";

// Replace these with your EmailJS keys (or move them to .env.local as NEXT_PUBLIC_*)
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY";

type Status = "idle" | "sending" | "sent" | "error";

const empty = { name: "", email: "", phone: "", message: "" };

const inputClass =
  "mt-2 w-full rounded-lg border border-line bg-bg px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status === "error" || status === "sent") setStatus("idle");
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, phone: form.phone, message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, tone: "sky" as Tone },
    { icon: Phone, label: "WhatsApp", value: profile.phone, href: `https://wa.me/${profile.whatsapp}`, tone: "mint" as Tone },
    { icon: MapPin, label: "Location", value: profile.location, tone: "coral" as Tone },
  ];

  return (
    <Section id="contact" title="Get in touch" intro="Send a message and I’ll get back to you, usually within 24 hours." icon={MessageCircleHeart} tone="sky">
      <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <ul className="space-y-6">
            {contactItems.map(({ icon: Icon, label, value, href, tone }) => (
              <li key={label} className="group flex gap-4">
                <span className={`grid h-11 w-11 flex-none place-items-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${tones[tone].soft} ${tones[tone].text}`}>
                  <Icon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] text-muted">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block break-words font-semibold text-ink transition-colors hover:text-accent"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="block font-semibold text-ink">{value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink transition-all hover:-translate-y-0.5 hover:border-grape hover:bg-grape-soft hover:text-grape"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink transition-all hover:-translate-y-0.5 hover:border-sky hover:bg-sky-soft hover:text-sky"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={sendEmail} className="relative overflow-hidden rounded-xl border border-line bg-surface p-6 sm:p-8">
            <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky via-grape to-coral" />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-ink">
                Full name
                <input name="name" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" autoComplete="name" />
              </label>
              <label className="block text-sm font-medium text-ink">
                Email address
                <input name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" autoComplete="email" />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-ink">
              Phone number <span className="font-normal text-muted">(optional)</span>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} placeholder="+8801XXXXXXXXX" autoComplete="tel" />
            </label>
            <label className="mt-5 block text-sm font-medium text-ink">
              Message
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project, timeline and budget"
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="grad-bg inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_var(--accent)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send message
                  </>
                )}
              </button>

              <AnimatePresence mode="wait">
                {status === "sent" && (
                  <motion.p
                    key="sent"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#22a06b]"
                    role="status"
                  >
                    <CheckCircle2 size={16} /> Message sent. I’ll reply soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm font-medium text-coral"
                    role="alert"
                  >
                    Message not sent. Please email {profile.email} directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
