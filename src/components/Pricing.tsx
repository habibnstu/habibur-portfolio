"use client";

import { pricing } from "@/data/pricing";

export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10">Pricing Packages</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {pricing.map((plan, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl bg-white dark:bg-gray-900 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <p className="text-indigo-600 font-bold mt-2">{plan.price}</p>

            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {plan.features.map((f, idx) => (
                <li key={idx}>• {f}</li>
              ))}
            </ul>

            <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}