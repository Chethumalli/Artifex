"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
      options={{
        background: { color: "transparent" },

        particles: {
          number: { value: 80 },

          color: { value: "#37f3ff" },

          links: {
            enable: true,
            distance: 150,
            color: "#37f3ff",
            opacity: 0.3,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: { value: 0.5 },

          size: { value: { min: 1, max: 3 } },
        },

        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },

          modes: {
            grab: {
              distance: 150,
              links: { opacity: 0.6 },
            },
          },
        },
      }}
    />
  );
}