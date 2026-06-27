"use client";

import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        background: { color: "#0a0a0a" },
        particles: {
          number: { value: 50 },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.5 },
          size: { value: 3 }
        }
      }}
    />
  );
}