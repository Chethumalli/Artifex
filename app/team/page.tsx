import Image from "next/image";

export default function Team() {

  const team = [
    {
      name: "AI Club Lead",
      role: "President",
      image: "/team/member1.png"
    },
    {
      name: "ML Engineer",
      role: "Core Team",
      image: "/team/member2.png"
    },
    {
      name: "Developer",
      role: "AI Developer",
      image: "/team/member3.png"
    }
  ];

  return (

    <div className="p-20">

      <h1 className="text-4xl font-bold text-center">
        Our Team
      </h1>

      <div className="grid md:grid-cols-3 gap-10 mt-10">

        {team.map((member, i) => (

          <div key={i} className="text-center border rounded-xl p-6">

            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />

            <h3 className="mt-4 font-bold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>

          </div>

        ))}

      </div>

    </div>

  );
}