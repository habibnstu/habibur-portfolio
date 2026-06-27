"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
  Send,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      });
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
          Connect
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto mt-3 rounded-full" />
        <p className="mt-5 text-gray-600 dark:text-gray-400">
          Let's connect and discuss your project
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE - CONTACT INFO */}
        <div className="space-y-5">

          {/* Email */}
          <div className="flex items-center gap-5 p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/90 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
              <Mail className="text-indigo-600 dark:text-indigo-400 w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Email</p>
              <p className="font-semibold text-gray-800 dark:text-white">mdhabibnstu@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-5 p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/90 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center">
              <Phone className="text-green-600 dark:text-green-400 w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">WhatsApp</p>
              <p className="font-semibold text-gray-800 dark:text-white">+88 01768238762</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-5 p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/90 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center">
              <MapPin className="text-purple-600 dark:text-purple-400 w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Location</p>
              <p className="font-semibold text-gray-800 dark:text-white">Mirpur-1, Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-3 pt-4">
            <a
              href="https://github.com"
              className="w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <FaGithub className="text-gray-700 dark:text-gray-300 w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com"
              className="w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <FaLinkedin className="text-blue-600 w-5 h-5" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          onSubmit={sendEmail}
          className="bg-white dark:bg-gray-900/90 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 shadow-md space-y-5"
        >
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
            <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-xl px-4 mt-2 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all">
              <User className="text-gray-400 w-4 h-4" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 outline-none bg-transparent text-gray-900 dark:text-white"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-xl px-4 mt-2 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all">
              <Mail className="text-gray-400 w-4 h-4" />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 outline-none bg-transparent text-gray-900 dark:text-white"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
            <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-xl px-4 mt-2 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all">
              <Phone className="text-gray-400 w-4 h-4" />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 outline-none bg-transparent text-gray-900 dark:text-white"
                placeholder="+8801XXXXXXXXX"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <div className="flex items-start border border-gray-200 dark:border-gray-700 rounded-xl px-4 mt-2 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all">
              <MessageSquare className="text-gray-400 w-4 h-4 mt-3" />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 outline-none bg-transparent text-gray-900 dark:text-white h-32 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            Send Message <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}