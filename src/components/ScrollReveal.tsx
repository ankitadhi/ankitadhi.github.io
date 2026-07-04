import { type ReactNode } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

function ScrollReveal({ children }: { children: ReactNode }) {
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""}`}
    >
      {children}
    </section>
  );
}

export default ScrollReveal;
