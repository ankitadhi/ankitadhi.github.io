const focusPoints = [
  "Transformers and NLP workflows",
  "Practical full-stack development",
  "Data preprocessing and model evaluation",
];

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[80vh] items-center py-20 sm:py-24 lg:py-28"
    >
      <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            ML / NLP • Full-stack
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I’m <span className="text-cyan-400">Ankit Adhikari</span>.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            I build practical ML/NLP systems and full-stack products that turn
            ideas into reliable user experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-white"
            >
              Contact me
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Python", "Django", "React", "NLP"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-fade-in-up [animation-delay:180ms]">
          <div className="rounded-[28px] border border-slate-800/80 bg-slate-900/70 p-6 shadow-[0_0_60px_rgba(8,145,178,0.16)] backdrop-blur-2xl sm:p-8">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Current focus
              </p>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Open to work
              </span>
            </div>

            <div className="mt-6 rounded-[24px] border border-slate-800 bg-slate-950/70 p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">
                    AI + Product Thinking
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Building systems with measurable impact.
                  </p>
                </div>
                <div className="relative h-16 w-16">
                  <div className="absolute inset-0 rounded-full border border-cyan-400/30" />
                  <div className="absolute inset-2 rounded-full border border-cyan-400/40" />
                  <div className="absolute inset-5 rounded-full bg-cyan-500/15" />
                  <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-cyan-400" />
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {focusPoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <p className="text-sm leading-6 text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
