import { Phone, Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h1 className="text-4xl font-bold mb-10 highlight">
          Contact Us
        </h1>

        <p className="subtext mb-12">
          For admission related queries or information about the
          Artificial Intelligence & Machine Learning department
          at AJ Institute of Engineering & Technology, you may
          contact us through the following numbers or email.
        </p>

        {/* Phone Numbers */}

        <div className="flex flex-wrap justify-center gap-6">

          <div className="card flex items-center gap-3">
            <Phone size={18} />
            +91 9483026503
          </div>

          <div className="card flex items-center gap-3">
            <Phone size={18} />
            +91 0824 2862200
          </div>

          <div className="card flex items-center gap-3">
            <Phone size={18} />
            +91 0824 2455048
          </div>

        </div>

        {/* Email */}

        <div className="mt-8 flex justify-center">

          <div className="card flex items-center gap-3">
            <Mail size={18} />
            ajenggcollege@gmail.com
          </div>

        </div>

        {/* Social Links */}

        <div className="mt-12">

          <h2 className="text-2xl font-semibold mb-6 subtext">
            Connect With Artifex
          </h2>

          <div className="flex justify-center gap-6 flex-wrap">

            <a
              href="https://github.com/Artifex-AIML"
              target="_blank"
              className="card flex items-center gap-3 hover:scale-105 transition"
            >
              <Github size={20} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/company/artifex-ajiet/"
              target="_blank"
              className="card flex items-center gap-3 hover:scale-105 transition"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/artifex.ajiet"
              target="_blank"
              className="card flex items-center gap-3 hover:scale-105 transition"
            >
              <Instagram size={20} />
              Instagram
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}