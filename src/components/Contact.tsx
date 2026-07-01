import ScrollReveal from "./ScrollReveal";

function Contact() {
  return (
    <ScrollReveal>
      <section
        id="contact"
        className="scroll-mt-24 border-t border-slate-800 py-16 sm:py-20"
      >
        <div className="rounded-[28px] border border-slate-800/80 bg-slate-900/70 p-8 shadow-[0_0_60px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let’s build something useful.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Reach out if you want to collaborate, talk about ideas, or explore a
            new project together.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:ankitadankit@gmail.com"
              className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 font-medium text-cyan-400 transition hover:-translate-y-0.5 hover:bg-cyan-500/20"
            >
              Email
            </a>
            <a
              href="https://github.com/ankitadhi"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 px-4 py-2 font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 px-4 py-2 font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Contact;
