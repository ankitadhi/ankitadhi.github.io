const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C", "C++"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Django", "Django REST Framework", "React.js", "Hugging Face"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Jupyter", "PowerPoint", ],
  },
  {
    title: "ML / NLP",
    skills: [
      "LangChain",
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
import { useTilt } from "../hooks/useTilt";

type SkillGroup = (typeof skillGroups)[number];

function SkillCard({ group }: { group: SkillGroup }) {
  const tiltRef = useTilt<HTMLDivElement>(5);

  return (
    <div ref={tiltRef} className="glass-card interactive-card rounded-[24px] p-6">
      <h3 className="text-lg font-semibold text-cyan-400">{group.title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-strong)]/80 px-3 py-1 text-sm text-[color:var(--muted)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <ScrollReveal>
      <section
        id="skills"
        className="scroll-mt-24 border-t border-[color:var(--border)] py-16 sm:py-20"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
            Focus areas I’ve built around in study and project work.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} group={group} />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Skills;
