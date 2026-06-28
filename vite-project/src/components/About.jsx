function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-slate-800 py-16 sm:py-20"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          About
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Building thoughtful software with a product-minded approach.
        </h2>
        {/* <p className="mt-6 text-lg leading-8 text-slate-300">
          This is a clean starter portfolio layout for daily iteration. Replace
          this text with a short intro about your background, focus areas, and
          the kind of work you want to shape next.
        </p> */}
      </div>
    </section>
  );
}

export default About;
