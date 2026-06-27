"use client";

import { Mail, Phone, MapPin, ArrowRight, Download } from "lucide-react";

export default function HireMe() {
  const handleHire = () => {
    const phoneNumber = "8801768238762";
    const message = encodeURIComponent(
      "Hello, I want to hire you for a project."
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    );
  };

   const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/CV Habibur Rahman.pdf";
    link.download = "MD_Habibur_Rahman_CV.pdf";
    link.click();
  };

  return (
    <section id="hire" className="max-w-6xl mx-auto  py-5 text-center">
      {/* Heading */}
      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
        Collaboration
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
        Let's Work Together
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto mt-3 rounded-full" />

      <p className="mt-5 text-gray-600 dark:text-gray-400 text-lg">
        Ready to bring your project to life?
      </p>

      {/* Message */}
      <p className="mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
        I'm available for freelance projects and full-time positions. Let's
        build something amazing together using ASP.NET Core, React, Angular,
        and modern web technologies.
      </p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Email */}
        <div className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mx-auto">
            <Mail className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
          </div>
          <p className="mt-4 font-semibold text-gray-900 dark:text-white">
            mdhabibnstu@gmail.com
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Email</p>
        </div>

        {/* Phone */}
        <div className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center mx-auto">
            <Phone className="text-green-600 dark:text-green-400 w-6 h-6" />
          </div>
          <p className="mt-4 font-semibold text-gray-900 dark:text-white">
            +88 01768238762
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">WhatsApp</p>
        </div>

        {/* Location */}
        <div className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center mx-auto">
            <MapPin className="text-purple-600 dark:text-purple-400 w-6 h-6" />
          </div>
          <p className="mt-4 font-semibold text-gray-900 dark:text-white">
            Mirpur-10, Dhaka
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Bangladesh</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12">
        {/* Hire Me */}
        <button
          onClick={handleHire}
          className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Hire Me Now <ArrowRight size={18} />
        </button>

        {/* CV */}
        <button
          onClick={handleDownloadCV}
          className="flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-gray-300 dark:border-gray-700 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
        >
          Download CV <Download size={18} />
        </button>
      </div>
    </section>
  );
} 