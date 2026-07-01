const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Django", "Django REST Framework", "React.js", "Hugging Face"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Jupyter", "Excel", "PowerPoint", "PowerBI"],
  },
  {
    title: "ML / NLP",
    skills: [
      "NLP",
      "Machine Learning",
      "Data Preprocessing",
      "Model Evaluation",
      "Feature Engineering",
      "Model Fine-Tuning",
      "Prompt Engineering",
      "RAG",
      "LLM API Integration",
      "CodeT5",
    ],
  },
];

import ScrollReveal from "./ScrollReveal";

function Skills() {
  return (
    <ScrollReveal>
      <section
        id="skills"
        className="scroll-mt-24 border-t border-slate-800 py-16 sm:py-20"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Focus areas I’ve built around in study and project work.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[24px] border border-slate-800/80 bg-slate-900/70 p-6 shadow-[0_0_60px_rgba(2,6,23,0.35)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <h3 className="text-lg font-semibold text-cyan-400">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Skills;
