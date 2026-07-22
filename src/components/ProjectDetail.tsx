import type { Project } from "./Projects";

type ProjectDetailProps = {
  project: Project;
  onBack: () => void;
};

// Placeholder body copy — swap this out per-project once real write-ups
// are ready. Kept intentionally generic/gibberish per request.
const GIBBERISH_PARAGRAPHS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec odio praesent libero sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet.",
  "Duis sagittis ipsum praesent mauris fusce nec tellus sed augue semper porta mauris massa vestibulum lacinia arcu eget nulla class aptent taciti sociosqu ad litora torquent.",
  "Per conubia nostra per inceptos himenaeos curabitur sodales ligula in libero sed dignissim lacinia nunc curabitur tortor pellentesque nibh aenean quam in scelerisque sem at dolor.",
];

const GIBBERISH_HIGHLIGHTS = [
  "Placeholder metric A — 00.0% improvement",
  "Placeholder metric B — 0.0s latency",
  "Placeholder metric C — 000 requests handled",
];

function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <div className="mx-auto w-full max-w-4xl py-10 sm:py-14">
      <button
        type="button"
        onClick={onBack}
        className="btn-ghost-accent inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5"
      >
        <span aria-hidden="true">←</span>
        <span>Back to portfolio</span>
      </button>

      <div className="mt-8 animate-fade-in-up">
        <span className="chip-accent rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
          {project.featured ? "Featured" : "Case Study"} · {project.category}
        </span>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
          {project.title}
        </h1>

        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-amber-300/80">
          Placeholder content — full write-up coming soon
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-strong)]/80 px-3 py-1 text-xs text-[color:var(--muted)]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {GIBBERISH_HIGHLIGHTS.map((item) => (
            <div
              key={item}
              className="glass-card rounded-2xl p-4 text-sm text-[color:var(--muted)]"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="glass-card mt-8 space-y-4 rounded-[24px] p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-accent">Overview</h2>
          {GIBBERISH_PARAGRAPHS.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm leading-7 text-[color:var(--muted)]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.link}
            target={project.link.startsWith("http") ? "_blank" : undefined}
            rel={project.link.startsWith("http") ? "noreferrer" : undefined}
            className="btn-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5"
          >
            <span>View Live Demo</span>
            <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            onClick={onBack}
            className="btn-ghost-accent rounded-full px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5"
          >
            Back to all projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
