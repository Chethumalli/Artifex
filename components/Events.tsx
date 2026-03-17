import Image from "next/image";

export default function Events() {

  const events = [
    {
      title: "Generative AI Workshop",
      date: "Feb 2026",
      image: "/events/workshop.png"
    },
    {
      title: "AI Hackathon",
      date: "Oct 2025",
      image: "/events/hackathon.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-100 px-10">

      <h2 className="text-3xl font-bold text-center mb-10">
        Events
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {events.map((event, i) => (

          <div key={i} className="bg-white rounded-xl shadow overflow-hidden">

            <Image
              src={event.image}
              alt={event.title}
              width={500}
              height={300}
              className="w-full"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p>{event.date}</p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}