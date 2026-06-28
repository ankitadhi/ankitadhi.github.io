function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-800 py-16 sm:py-20"
    >
      <div className="max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/70 p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Let’s build something useful.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Reach out if you want to collaborate, talk about ideas, or explore a
          new project together.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <a
            href="mailto:ankitadankit@gmail.com"
            className="text-cyan-400 transition hover:text-cyan-300"
          >
            Email
          </a>
          <a
            href="https://github.com/ankitadhi"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 transition hover:text-cyan-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 transition hover:text-cyan-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
