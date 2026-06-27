"use client";

export default function Booking() {
  return (
    <section className="max-w-4xl mx-auto py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Book a Meeting</h2>

      <p className="text-gray-600 mb-6">
        Schedule a discussion for your project or hiring opportunity.
      </p>

      <a
        href="https://calendly.com/"
        target="_blank"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg"
      >
        Schedule Now
      </a>
    </section>
  );
}
