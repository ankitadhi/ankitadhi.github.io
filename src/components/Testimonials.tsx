import { useMemo } from "react";
import useStaggerReveal from "../hooks/useStaggerReveal";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem Ipsum",
    role: "Dolor Sit",
    company: "Amet Corp",
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Consectetur Adipiscing",
    role: "Elit Tempor",
    company: "Incididunt LLC",
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Excepteur Sint",
    role: "Occaecat Cupidatat",
    company: "Proident Inc",
  },
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
    name: "Nemo Enim",
    role: "Ipsam Voluptatem",
    company: "Fugit Studios",
  },
];

function Testimonials() {
  const featured = useMemo(() => {
    const items = [...testimonials];
    for (let index = items.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
    }
    return items.slice(0, 3);
  }, []);

  const { containerRef, isVisible, getDelay } = useStaggerReveal<HTMLDivElement>(
    featured.length,
  );

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 py-16 sm:py-20"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Testimonials
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
          A few words from people who have worked with him.
        </h2>
      </div>

      <div ref={containerRef} className="mt-10 grid gap-6 lg:grid-cols-3">
        {featured.map((item, index) => (
          <article
            key={item.name}
            className={`glass-card interactive-card gradient-ring magnetic-hover relative overflow-hidden rounded-[24px] border border-[color:var(--border)] p-6 stagger-child${isVisible ? " revealed" : ""}`}
            style={{ animationDelay: getDelay(index) + "ms" }}
          >
            <span
              className="gradient-text absolute -top-1 left-3 text-5xl leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="pt-6 text-sm leading-7 text-[color:var(--muted)]">
              {item.quote}
            </p>
            <div className="mt-6">
              <p className="font-semibold text-accent">
                {item.name}
              </p>
              <p className="text-sm text-[color:var(--muted)]">
                {item.role} · {item.company}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
