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
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },

          background: {
            color: "transparent",
          },

          particles: {
            number: { value: 80 },

            color: { value: "#ffffff" },

            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },

            move: {
              enable: true,
              speed: 1,
            },

            opacity: { value: 0.4 },

            size: { value: { min: 1, max: 3 } },
          },

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },

            modes: {
              grab: {
                distance: 140,
                links: { opacity: 0.5 },
              },
            },
          },
        }}
      />
    </div>
  );
}