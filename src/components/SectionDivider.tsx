import type { ReactNode } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

interface SectionDividerProps {
  /** Optional icon to replace the default accent dot */
  icon?: ReactNode;
}

function SectionDivider({ icon }: SectionDividerProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  const className = [
    "section-divider",
    isVisible ? "visible" : "",
    icon ? "has-icon" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={className}>
      {icon && (
        <span className="relative z-[1]">{icon}</span>
      )}
    </div>
  );
}

export default SectionDivider;
