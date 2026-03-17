"use client";

import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Hero() {

  const router = useRouter();

  return (

    <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Skull Background */}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <Image
          src="/skull.png"
          alt="AI Skull Background"
          width={900}
          height={900}
          className="opacity-10 object-contain"
          priority
        />

      </div>

      {/* Main Content */}

      <div className="max-w-4xl z-10">

        <h1 className="text-6xl md:text-7xl font-bold mb-6 highlight">
          ARTIFEX
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold subtext mb-6">
          Artificial Intelligence & Machine Learning Innovation Hub
        </h2>

        <TypeAnimation
          sequence={[
            "The Artificial Intelligence and Machine Learning innovation hub of AJ Institute of Engineering and Technology empowering students to explore intelligent systems and advanced computational technologies.",
            2000,
            "A collaborative community dedicated to developing intelligent solutions, conducting technical workshops, and fostering research-driven innovation in modern AI systems.",
            2000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          className="text-lg leading-relaxed subtext"
        />

        <div className="mt-12 flex justify-center gap-6 flex-wrap">

          <button
            onClick={() => router.push("/projects")}
            className="primary-btn"
          >
            Explore Projects
          </button>

          <button
            onClick={() => router.push("/events")}
            className="secondary-btn"
          >
            Workshops & Events
          </button>

        </div>

      </div>

    </section>
  );
}