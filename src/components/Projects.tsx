const projects = [
  {
    title: "NLP Assist App",
    description:
      "A lightweight app for summarizing and exploring long-form documents with a simple interface.",
    stack: ["React", "FastAPI", "OpenAI"],
    link: "#",
  },
  {
    title: "Data Insights Dashboard",
    description:
      "An internal dashboard for turning raw metrics into readable trends and team-friendly summaries.",
    stack: ["Vite", "Tailwind", "Charts"],
    link: "#",
  },
  {
    title: "Full-Stack Portfolio Starter",
    description:
      "A modular starter template with clear structure for building polished personal sites quickly.",
    stack: ["React", "Node", "Postgres"],
    link: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-slate-800 py-16 sm:py-20"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A few recent ideas and experiments.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="mt-6 inline-flex text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
            >
              View project →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
