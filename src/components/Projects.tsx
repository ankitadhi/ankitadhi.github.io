import { useMemo, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { useTilt } from "../hooks/useTilt";

const projects = [
  {
    slug: "merge-conflict-resolver",
    title: "Merge Conflict Resolver using Transformers",
    description:
      "Built an automated system to resolve Git merge conflicts using a fine-tuned transformer model. The work included collecting and preprocessing real-world conflicted code datasets from public GitHub repositories and evaluating outputs to improve resolution accuracy.",
    stack: ["Python", "Hugging Face", "CodeT5", "NLP"],
    category: "AI",
    link: "#",
    featured: true,
  },
  {
    slug: "quiz-app",
    title: "Quiz App",
    description:
      "Developed a full-stack quiz platform with JWT authentication, a custom grading engine, and a global leaderboard. The project involved building REST APIs in Django REST Framework for quiz logic, scoring, and ranking.",
    stack: ["React.js", "Django REST Framework", "MySQL", "TypeScript"],
    category: "Web",
    link: "#",
    featured: false,
  },
  {
    slug: "resume-builder-parser",
    title: "Resume Builder and Parser",
    description:
      "Created a parser that extracts structured fields such as skills, experience, and education from unstructured resume text. The work focused on text-processing logic and information extraction closely related to NLP tasks.",
    stack: ["Python", "NLP"],
    category: "AI",
    link: "#",
    featured: false,
  },
  {
    slug: "job-placement-analysis",
    title: "Job Placement Analysis Model",
    description:
      "Built a classification model to predict job placement likelihood based on engineered features. The project covered data cleaning, feature engineering, and model evaluation as part of a practical machine learning workflow.",
    stack: ["Python", "Machine Learning"],
    category: "Data",
    link: "#",
    featured: false,
  },
];

const filters = ["All", "AI", "Web", "Data"] as const;

type Filter = (typeof filters)[number];

export type Project = (typeof projects)[number];

function ProjectCard({
  project,
  index,
  onExpand,
}: {
  project: Project;
  index: number;
  onExpand: (project: Project) => void;
}) {
  const tiltRef = useTilt<HTMLElement>(6);

  return (
    <article
      ref={tiltRef}
      className={`glass-card interactive-card group rounded-[24px] p-6 ${
        index === 0 ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {project.featured ? "Featured" : "Case Study"}
        </span>
        <span className="text-xs text-[color:var(--muted)]">{index + 1}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-[color:var(--text)]">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-strong)]/80 px-3 py-1 text-xs text-[color:var(--muted)]"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={project.link}
          target={project.link.startsWith("http") ? "_blank" : undefined}
          rel={project.link.startsWith("http") ? "noreferrer" : undefined}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-500/20"
        >
          <span>View Live Demo</span>
          <span aria-hidden="true">↗</span>
        </a>
        <button
          type="button"
          onClick={() => onExpand(project)}
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-4 py-2 text-sm font-medium text-[color:var(--text)] transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-400"
        >
          <span>Expand</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </article>
  );
}

function Projects({ onExpand }: { onExpand: (project: Project) => void }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <ScrollReveal>
      <section
        id="projects"
        className="scroll-mt-24 border-t border-[color:var(--border)] py-16 sm:py-20"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
            Selected projects from study, experiments, and hands-on builds.
          </h2>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-3 py-2 text-sm transition ${
                activeFilter === filter
                  ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-300"
                  : "border-[color:var(--border)] bg-[color:var(--surface)]/70 text-[color:var(--muted)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onExpand={onExpand}
            />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Projects;
