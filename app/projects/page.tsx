async function getRepos() {
  const res = await fetch(
    "https://api.github.com/orgs/Artifex-AIML/repos",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function ProjectsPage() {
  const repos = await getRepos();

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-16">
          Artifex AI Projects
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {repos.map((repo: any) => (

            <div
              key={repo.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:scale-105 transition"
            >

              <h2 className="text-xl font-semibold">
                {repo.name}
              </h2>

              <p className="text-gray-200 mt-3 text-sm">
                {repo.description || "AI/ML project by Artifex team"}
              </p>

              <div className="flex justify-between items-center mt-5">

                <span className="text-purple-200 text-sm">
                  ⭐ {repo.stargazers_count}
                </span>

                <a
                  href={repo.html_url}
                  target="_blank"
                  className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-500"
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