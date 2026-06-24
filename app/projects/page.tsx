async function getRepos() {
  const res = await fetch(
    "https://api.github.com/orgs/Artifex-AIML/repos",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function ProjectsPage() {
  const repos = await getRepos();

  const featuredProjects = [
  {
    title: "AI-Based Elderly Fall Detection Smartwatch",
    description:
      "TinyML-powered wearable system using ESP32, MPU6050 and TensorFlow Lite for real-time fall detection and emergency caregiver alerts. on going project not yet completed",
    tech: "ESP32 • TensorFlow Lite • IoT" ,
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "Automated attendance management system using facial recognition and computer vision technologies.",
    tech: "Python • OpenCV • Streamlit",
    github:
      "https://github.com/Chethumalli/face-recognition-attendance-system",
  },
  {
    title: "AI Speech-to-Text Converter",
    description:
      "Converts audio and video recordings into accurate text transcripts using speech recognition models.",
    tech: "Python • Whisper • Streamlit",
    github:
      "https://github.com/Chethumalli/AI-Speech-to-Text-Converter",
  },
  {
    title: "Student Performance Predictor",
    description:
      "Machine learning model that predicts student academic performance and learning outcomes.",
    tech: "Machine Learning • Python",
    github: "https://github.com/Chethumalli/Student-Grade-Management-System-Python-CLI-Project-",
  },
  {
    title: "Plant Disease Detection System",
    description:
      "Deep learning solution for identifying crop diseases from leaf images and assisting farmers with recommendations.",
    tech: "TensorFlow • CNN • Computer Vision",
    github: "https://github.com/raj20-Anu/Plant-disease-advisory-system",
  },
  {
    title: "AINNOVATE 2025 Innovation Projects",
    description:
      "Collection of innovative AI-driven solutions developed during the Artifex AI Ideathon Sprint Challenge.",
    tech: "Artificial Intelligence • Innovation",
    github: "https://github.com/Artifex-AIML",
  },
];
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4">
          Artifex Innovation Showcase
        </h1>

        <p className="text-center subtext max-w-3xl mx-auto mb-16">
          Explore projects developed by Artifex members in Artificial
          Intelligence, Machine Learning, Computer Vision, IoT,
          Generative AI, Full Stack Development, and emerging technologies.
        </p>

        {/* Featured Student Projects */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Student Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
  {featuredProjects.map((project, index) => (
    <div
      key={index}
      className="card hover:scale-105 transition-all duration-300"
    >
      <h3 className="text-xl font-bold highlight">
        {project.title}
      </h3>

      <p className="subtext mt-3 leading-relaxed">
        {project.description}
      </p>

      <p className="mt-4 text-cyan-300 text-sm">
        {project.tech}
      </p>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="primary-btn inline-block mt-5"
      >
        View Project
      </a>
    </div>
  ))}
</div>

        {/* Open Source Repositories */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Open Source Repositories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(repos) &&
            repos.map((repo: any) => (
              <div
                key={repo.id}
                className="card hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-bold highlight mb-3">
                  {repo.name}
                </h3>

                <p className="subtext text-sm leading-relaxed min-h-[80px]">
                  {repo.description ||
                    "Open-source project developed by Artifex AI & Machine Learning Association."}
                </p>

                <div className="flex justify-between items-center mt-6">
                  <span className="text-cyan-300 text-sm">
                    ⭐ {repo.stargazers_count}
                  </span>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-btn"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}