function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[75vh] items-center py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
          Portfolio starter
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Hi, I'm Ankit Adhikari
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
          I build practical ML/NLP systems and full-stack products that turn
          ideas into reliable user experiences.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-400"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
