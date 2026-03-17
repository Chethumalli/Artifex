"use client";

import { useRouter } from "next/navigation";

export default function Features() {

  const router = useRouter();

  const features = [
    {
      title: "AI Projects",
      description:
        "Explore innovative Artificial Intelligence and Machine Learning projects developed by students and researchers of the Artifex community.",
      link: "/projects",
    },
    {
      title: "Workshops",
      description:
        "Participate in hands-on workshops and technical training sessions focused on real-world AI engineering, intelligent systems, and modern technologies.",
      link: "/events",
    },
    {
      title: "Innovation",
      description:
        "Discover creative ideas, research initiatives, and student-driven innovation activities that aim to solve real-world problems using AI technologies.",
      link: "/events",
    },
  ];

  return (

    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {features.map((feature, i) => (

          <div
            key={i}
            onClick={() => router.push(feature.link)}
            className="cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:scale-105 transition"
          >

            <h3 className="text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="text-gray-200 mt-4">
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}