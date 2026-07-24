import { useTilt } from "../hooks/useTilt";
import useStaggerReveal from "../hooks/useStaggerReveal";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Skill {
  name: string;
  /** Optional emphasis — highlighted skills get a subtle accent ring */
  highlight?: boolean;
}

interface SkillGroup {
  title: string;
  subtitle?: string;
  skills: Skill[];
  /** Grid span class — controls bento box sizing */
  gridClass: string;
  /** Whether this is a "hero" card (ML/NLP/LLM) — gets ambient glow */
  featured?: boolean;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const skillGroups: SkillGroup[] = [
  {
    title: "ML / NLP / LLM",
    subtitle: "Core specialisation",
    featured: true,
    gridClass: "md:col-span-2 md:row-span-2",
    skills: [
      { name: "NLP", highlight: true },
      { name: "Machine Learning", highlight: true },
      { name: "Prompt Engineering", highlight: true },
      { name: "RAG", highlight: true },
      { name: "LLM API Integration", highlight: true },
      { name: "CodeT5", highlight: true },
      { name: "Model Fine-Tuning" },
      { name: "Data Preprocessing" },
      { name: "Model Evaluation" },
      { name: "Feature Engineering" },
    ],
  },
  {
    title: "Languages",
    gridClass: "md:col-span-1",
    skills: [
      { name: "Python", highlight: true },
      { name: "JavaScript" },
      { name: "C" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    gridClass: "md:col-span-1",
    skills: [
      { name: "Django" },
      { name: "Django REST Framework" },
      { name: "React.js" },
      { name: "Hugging Face", highlight: true },
    ],
  },
  {
    title: "Tools & Platforms",
    gridClass: "md:col-span-2",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Jupyter" },
      { name: "Excel" },
      { name: "PowerPoint" },
      { name: "PowerBI" },
    ],
  },
];

// ─── Skill Card ──────────────────────────────────────────────────────────────

function SkillCard({
  group,
  className = "",
  style,
}: {
  group: SkillGroup;
  className?: string;
  style?: React.CSSProperties;
}) {
  const tiltRef = useTilt<HTMLDivElement>(4);

  return (
    <div
      ref={tiltRef}
      className={`glass-card interactive-card relative overflow-hidden rounded-[22px] p-5 sm:p-6 ${group.gridClass} ${className}`}
      style={style}
    >
      {/* Ambient radial glow for featured card */}
      {group.featured && (
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, var(--accent-15), transparent 60%)",
          }}
        />
      )}

      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-base font-semibold text-accent sm:text-lg">
          {group.title}
        </h3>
        {group.subtitle && (
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--muted)] opacity-70 sm:inline">
            {group.subtitle}
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill.name}
            className={`rounded-full border px-3 py-1 text-xs transition-all duration-200 hover:border-[color:var(--accent-40)] hover:text-[color:var(--text)] ${
              skill.highlight
                ? "border-[color:var(--accent-30)] bg-[color:var(--accent-10)] text-accent"
                : "border-[color:var(--border)] bg-[color:var(--surface-strong)]/80 text-[color:var(--muted)]"
            }`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Skills Section ──────────────────────────────────────────────────────────

function Skills() {
  const { containerRef, isVisible, getDelay } = useStaggerReveal<HTMLDivElement>(skillGroups.length);

  return (
    <section
      id="skills"
      className="scroll-mt-24 py-16 sm:py-20"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Skills
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
          Focus areas I've built around in study and project work.
        </h2>
      </div>

      {/* Bento Box asymmetric grid — ML/NLP spans 2 cols + 2 rows */}
      <div
        ref={containerRef}
        className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-auto"
      >
        {skillGroups.map((group, index) => (
          <SkillCard
            key={group.title}
            group={group}
            className={`stagger-child${isVisible ? " revealed" : ""}`}
            style={{ animationDelay: getDelay(index) + "ms" }}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
