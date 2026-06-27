"use client";

import jsPDF from "jspdf";

export default function Resume() {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("MD. Habibur Rahman", 10, 10);
    doc.text(".NET Full Stack Developer", 10, 20);
    doc.text("Email: mdhabibnstu@gmail.com", 10, 30);
    doc.text("Skills: ASP.NET Core, React, SQL Server", 10, 40);

    doc.save("Habibur_Rahman_Resume.pdf");
  };

  return (
    <section className="text-center py-20">
      <button
        onClick={downloadPDF}
        className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg"
      >
        Download Resume PDF
      </button>
    </section>
  );
}