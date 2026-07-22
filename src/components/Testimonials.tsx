import { useMemo } from "react";

const testimonials = [
  {
    quote:
      "Ankit brings a thoughtful mix of technical depth and product sense. His work feels polished and practical from the first draft onward.",
    name: "Aarav Sharma",
    role: "Product Designer",
    company: "Studio North",
  },
  {
    quote:
      "The ML and full-stack pieces he builds are not only impressive, but also genuinely useful. He understands how to turn ideas into trust.",
    name: "Meera Patel",
    role: "Engineering Lead",
    company: "Nexora Labs",
  },
  {
    quote:
      "He has a rare ability to combine clean interfaces with meaningful technical execution. Every interaction feels intentional.",
    name: "Daniel Kim",
    role: "Founder",
    company: "Brightloop",
  },
  {
    quote:
      "Working with Ankit felt effortless. The quality of the implementation and communication was consistently excellent.",
    name: "Sana Ali",
    role: "Startup Mentor",
    company: "Founders Circle",
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

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-t border-[color:var(--border)] py-16 sm:py-20"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Testimonials
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
          A few words from people who have worked with him.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {featured.map((item) => (
          <article
            key={item.name}
            className="glass-card magnetic-hover rounded-[24px] border border-[color:var(--border)] p-6"
          >
            <p className="text-sm leading-7 text-[color:var(--muted)]">
              “{item.quote}”
            </p>
            <div className="mt-6">
              <p className="font-semibold text-[color:var(--text)]">
                {item.name}
              </p>
              <p className="text-sm text-accent">
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
