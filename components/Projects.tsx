import Link from "next/link";

export default function Projects() {

  const projects = [
    {
      name: "AI Image Generator",
      description:
        "Generate images from text prompts using OpenAI models.",
      tech: "React • Node • MongoDB • OpenAI",
      link: "https://github.com/Artifex-AIML"
    },
    {
      name: "AI Chatbot",
      description:
        "Conversational chatbot using NLP and AI APIs.",
      tech: "Python • NLP",
      link: "https://github.com/Artifex-AIML"
    },
    {
      name: "Smart Attendance System",
      description:
        "Face recognition based attendance tracking.",
      tech: "Computer Vision • OpenCV",
      link: "https://github.com/Artifex-AIML"
    },
  ];

  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Artifex Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((p, i) => (

            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:scale-105 transition"
            >

              <h3 className="text-xl font-semibold">
                {p.name}
              </h3>

              <p className="text-sm text-gray-200 mt-3">
                {p.description}
              </p>

              <p className="text-purple-200 text-sm mt-3">
                {p.tech}
              </p>

              <Link
                href={p.link}
                target="_blank"
                className="inline-block mt-4 text-white bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-500"
              >
                View on GitHub
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}