import Image from "next/image";

export default function HOD() {
  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Head of Department
        </h2>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-10">

          {/* HOD Image */}

          <div className="flex justify-center mb-6">
            <Image
              src="/hod.png"
              alt="Dr. Chanchal Antony"
              width={180}
              height={180}
              className="rounded-full border-4 border-white/30"
            />
          </div>

          <h3 className="text-xl font-semibold">
            Dr. Chanchal Antony
          </h3>

          <p className="text-purple-200">
            Associate Professor & Head – AIML Department
          </p>

          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            The Department of Artificial Intelligence & Machine Learning
            at AJ Institute of Engineering and Technology focuses on
            developing innovative AI solutions, encouraging research,
            and preparing students to become globally competent engineers
            in emerging technologies.
          </p>

        </div>

      </div>

    </section>
  );
}