import ScrollReveal from "./ScrollReveal";

function About() {
  return (
    <ScrollReveal>
      <section
        id="about"
        className="scroll-mt-24 border-t border-slate-800 py-16 sm:py-20"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              I’m a Computer Engineering student focused on NLP, machine
              learning, and practical software development.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              I’m currently building my experience around transformer models,
              data preprocessing, and LLM workflows, with hands-on work in
              Python and full-stack development. My projects have involved model
              fine-tuning, REST API design, and applying machine learning to
              real-world problems. I’m especially interested in work that
              connects NLP, software engineering, and thoughtful product
              building.
            </p>
          </div>

          <div className="rounded-[24px] border border-slate-800/80 bg-slate-900/70 p-6 shadow-[0_0_60px_rgba(2,6,23,0.45)] backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-cyan-400">
              What I bring
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <li className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                Strong foundation in Python, NLP, and machine learning
                workflows.
              </li>
              <li className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                Hands-on experience with transformers, prompt engineering, and
                LLM-related projects.
              </li>
              <li className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                Comfortable building both backend systems and user-facing
                interfaces.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default About;
