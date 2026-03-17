import HOD from "@/components/HOD";

export default function AboutPage() {
  return (
    <>

      {/* About Section */}
      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-4xl font-bold text-center mb-12">
            About Artifex – AIML Association
          </h1>

          <p className="text-lg leading-relaxed text-gray-200">
            Artifex is the official student association of the Department of
            Computer Science & Engineering (Artificial Intelligence and
            Machine Learning) at AJ Institute of Engineering and Technology,
            Mangaluru. The association promotes innovation, technical
            excellence, and collaborative learning among students interested
            in Artificial Intelligence, Machine Learning, and emerging
            technologies.
          </p>

          <p className="mt-6 text-lg text-gray-200">
            The Department of Artificial Intelligence & Machine Learning at
            AJIET focuses on cutting-edge technologies such as intelligent
            systems, predictive analytics, and automated decision-making.
            Through workshops, technical events, research initiatives,
            and industry collaborations, students gain practical exposure
            to real-world AI applications.
          </p>

          <p className="mt-6 text-lg text-gray-200">
            Artifex provides students with opportunities to participate in
            hackathons, project development activities, innovation challenges,
            and technical workshops that enhance their problem-solving skills
            and prepare them for careers in AI and emerging technologies.
          </p>

        </div>

      </section>

      {/* HOD Section */}
      <HOD />

    </>
  );
}