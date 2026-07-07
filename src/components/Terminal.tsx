import { useState, type FormEvent } from "react";

const initialOutput = [
  "Welcome to Ankit's terminal.",
  "Type 'help' to explore available commands.",
  "Tip: try 'theme dark', 'theme bright', 'about', 'contact', or 'clear'.",
];

type TerminalProps = {
  onSetTheme: (theme: "dark" | "light") => void;
};

function Terminal({ onSetTheme }: TerminalProps) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>(initialOutput);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const command = input.trim().toLowerCase();

    if (!command) {
      setOutput((prev) => [...prev, "$"]);
      setInput("");
      return;
    }

    const nextLines = [...output, `$ ${command}`];

    switch (command) {
      case "help":
        nextLines.push(
          "available commands: help, skills, projects, whoami, about, contact, theme dark, theme bright, clear",
        );
        break;
      case "about":
        nextLines.push(
          "Ankit builds ML/NLP systems, practical full-stack apps, and thoughtful digital products.",
        );
        break;
      case "contact":
        nextLines.push(
          "Email: ankitadankit@gmail.com",
          "GitHub: github.com/ankitadhi",
          "LinkedIn: linkedin.com/in/ankit-adhikari-10853227a",
        );
        break;
      case "theme dark":
        nextLines.push("Theme switched to dark mode.");
        onSetTheme("dark");
        break;
      case "theme bright":
        nextLines.push("Theme switched to bright mode.");
        onSetTheme("light");
        break;
      case "skills":
        nextLines.push(
          "Python · Django · React · TypeScript · NLP · PyTorch · Hugging Face · Docker · REST APIs · MySQL",
        );
        break;
      case "projects":
        nextLines.push(
          "Merge Conflict Resolver · transformer-based conflict resolution workflow",
          "Quiz App · full-stack quiz platform with auth and leaderboard",
          "Resume Builder and Parser · resume extraction and NLP parsing",
          "Job Placement Analysis Model · practical ML classification workflow",
        );
        break;
      case "whoami":
        nextLines.push(
          "Ankit Adhikari is a Computer Engineering student building ML/NLP systems and full-stack products.",
        );
        break;
      case "experience":
        nextLines.push(
          "Experience includes AI products, NLP pipelines, REST APIs, and product-focused frontend work.",
        );
        break;
      case "clear":
        setOutput([]);
        setInput("");
        return;
      default:
        nextLines.push(`command not found: ${command}`);
    }

    setOutput(nextLines);
    setInput("");
  };

  return (
    <div className="glass-card interactive-card overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[color:var(--surface-strong)]/90 p-0">
      <div className="flex items-center gap-2 border-b border-[color:var(--border)] bg-[color:var(--surface)]/90 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-500" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-500" />
        <span className="ml-2 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
          terminal
        </span>
      </div>
      <div className="min-h-[280px] bg-black/90 p-4 font-mono text-sm text-emerald-300">
        <div className="space-y-1 whitespace-pre-wrap">
          {output.map((line, index) => (
            <p key={`${line}-${index}`} className="leading-6">
              {line}
            </p>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2">
          <span className="text-cyan-400">$</span>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="w-full bg-transparent text-sm text-cyan-100 outline-none"
            placeholder="type a command"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}

export default Terminal;
