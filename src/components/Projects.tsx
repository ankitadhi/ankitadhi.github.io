const projects = [
  {
    title: "Merge Conflict Resolver using Transformers",
    description:
      "Built an automated system to resolve Git merge conflicts using a fine-tuned transformer model. The work included collecting and preprocessing real-world conflicted code datasets from public GitHub repositories and evaluating outputs to improve resolution accuracy.",
    stack: ["Python", "Hugging Face", "CodeT5", "NLP"],
    link: "#",
  },
  {
    title: "Quiz App",
    description:
      "Developed a full-stack quiz platform with JWT authentication, a custom grading engine, and a global leaderboard. The project involved building REST APIs in Django REST Framework for quiz logic, scoring, and ranking.",
    stack: ["React.js", "Django REST Framework", "MySQL", "TypeScript"],
    link: "#",
  },
  {
    title: "Resume Builder and Parser",
    description:
      "Created a parser that extracts structured fields such as skills, experience, and education from unstructured resume text. The work focused on text-processing logic and information extraction, which is closely related to NLP tasks.",
    stack: ["Python", "NLP"],
    link: "#",
  },
  {
    title: "Job Placement Analysis Model",
    description:
      "Built a classification model to predict job placement likelihood based on engineered features. The project covered data cleaning, feature engineering, and model evaluation as part of a practical machine learning workflow.",
    stack: ["Python", "Machine Learning"],
    link: "#",
  },
];

import ScrollReveal from "./ScrollReveal";

function Projects() {
  return (
    <ScrollReveal>
      <section
        id="projects"
        className="scroll-mt-24 border-t border-slate-800 py-16 sm:py-20"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Selected projects from study, experiments, and hands-on builds.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 2xl:grid-cols-4">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-[24px] border border-slate-800/80 bg-slate-900/70 p-6 shadow-[0_0_60px_rgba(2,6,23,0.35)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Featured
                </span>
                <span className="text-xs text-slate-500">{index + 1}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
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
                className="mt-6 inline-flex text-sm font-medium text-cyan-400 transition group-hover:text-cyan-300"
              >
                View project →
              </a>
            </article>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Projects;
