export default function EventsPage() {

  const events = [
    {
      title: "Applied Generative AI Engineering – Build Real AI Systems",
      date: "26–27 February 2026",
      description:
        "A two-day intensive workshop conducted at AJ Institute of Engineering & Technology where AI developers from Acadeno Technologies provided hands-on training on building real-world generative AI systems and modern AI applications.",
    },

    {
      title: "From AI Agents to Agentic AI Workshop",
      date: "21 January 2026",
      description:
        "A hands-on workshop organized by the Department of CSE (AIML) focusing on the evolution of intelligent systems, modern AI agent architectures, and real-world applications of agent-based AI systems.",
    },

    {
      title: "Science & Technology Expo 2025",
      date: "2025",
      description:
        "An innovation expo where students presented technological solutions and scientific ideas across multiple engineering domains. The event encouraged creativity, critical thinking, and practical problem-solving among participants.",
    },

    {
      title: "Scientific Writing and Project Documentation in LaTeX",
      date: "28–29 January 2026",
      description:
        "A two-day workshop providing practical training on scientific writing, research documentation, and professional project report preparation using LaTeX.",
    },

    {
      title: "AINNOVATE-2025 – AI Ideathon Sprint Challenge",
      date: "8 August 2025",
      description:
        "A mini project idea competition organized by the AIML Department in association with Artifex Club where students pitched innovative AI-based project ideas focused on sustainability and real-world problem solving.",
    },

    {
      title: "Practical Machine Learning for Real-World Applications",
      date: "Department Activity",
      description:
        "A hands-on learning session conducted by the AIML department focusing on applying machine learning techniques to real-world datasets and practical engineering problems.",
    },

    {
      title: "Role of Innovation in Startup Growth – Technical Talk",
      date: "Department Seminar",
      description:
        "An interactive technical session discussing how innovation drives startup ecosystems and how students can transform research ideas into technology-based ventures.",
    },

    {
      title: "Ayudha Pooja Celebration – Artifex Association",
      date: "Department Cultural Event",
      description:
        "The AIML department association Artifex organized the Ayudha Pooja celebration highlighting the cultural traditions of engineers and promoting unity among students and faculty.",
    },

    {
      title: "Technical Talk on Funding Pathways for Early-Stage Startups",
      date: "Department Announcement",
      description:
        "A knowledge session guiding students on startup funding opportunities, innovation ecosystems, and entrepreneurship support available for technology startups.",
    }
  ];

  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-16">
          Artifex – Events & Department Activities
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {events.map((event, i) => (

            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:scale-105 transition"
            >

              <h2 className="text-xl font-semibold">
                {event.title}
              </h2>

              <p className="text-purple-200 text-sm mt-2">
                {event.date}
              </p>

              <p className="text-gray-200 mt-4">
                {event.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}