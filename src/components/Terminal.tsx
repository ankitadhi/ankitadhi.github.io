import { useState, useRef, useEffect, type FormEvent } from "react";

const WELCOME_LINES: TerminalLine[] = [
  { type: "system", text: "Welcome to ankit@portfolio — v2.0.0" },
  { type: "system", text: "Type 'help' to see available commands." },
  { type: "system", text: "" },
];

type LineType = "input" | "output" | "system" | "error";

interface TerminalLine {
  type: LineType;
  text: string;
}

type TerminalProps = {
  onSetTheme: (theme: "dark" | "light") => void;
};

function Terminal({ onSetTheme }: TerminalProps) {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<TerminalLine[]>(WELCOME_LINES);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  // Click anywhere in terminal body → focus input
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const processCommand = (command: string): TerminalLine[] => {
    const cmd = command.trim().toLowerCase();
    if (!cmd) return [];

    switch (cmd) {
      case "help":
        return [
          { type: "output", text: "Available commands:" },
          { type: "output", text: "" },
          { type: "output", text: "  help          Show this help message" },
          { type: "output", text: "  about         About me" },
          { type: "output", text: "  skills        Technical skills" },
          { type: "output", text: "  projects      Project showcase" },
          { type: "output", text: "  contact       Contact information" },
          { type: "output", text: "  whoami        Quick intro" },
          { type: "output", text: "  theme dark    Switch to dark mode" },
          { type: "output", text: "  theme bright  Switch to light mode" },
          { type: "output", text: "  clear         Clear terminal" },
          { type: "output", text: "" },
        ];
      case "about":
        return [
          {
            type: "output",
            text: "Ankit builds ML/NLP systems, practical full-stack apps, and thoughtful digital products.",
          },
        ];
      case "contact":
        return [
          { type: "output", text: "  Email    ankitadankit@gmail.com" },
          { type: "output", text: "  GitHub   github.com/ankitadhi" },
          {
            type: "output",
            text: "  LinkedIn linkedin.com/in/ankit-adhikari-10853227a",
          },
        ];
      case "theme dark":
        onSetTheme("dark");
        return [{ type: "system", text: "✓ Theme switched to dark mode." }];
      case "theme bright":
        onSetTheme("light");
        return [{ type: "system", text: "✓ Theme switched to light mode." }];
      case "skills":
        return [
          {
            type: "output",
            text: "Python · Django · React · TypeScript · NLP · Hugging Face · REST APIs · MySQL",
          },
        ];
      case "projects":
        return [
          {
            type: "output",
            text: "  ▸ Merge Conflict Resolver — transformer-based conflict resolution",
          },
          {
            type: "output",
            text: "  ▸ Quiz App — full-stack platform with auth & leaderboard",
          },
          {
            type: "output",
            text: "  ▸ Resume Builder & Parser — NLP-powered extraction",
          },
          {
            type: "output",
            text: "  ▸ Job Placement Analysis — ML classification workflow",
          },
        ];
      case "whoami":
        return [
          {
            type: "output",
            text: "Ankit Adhikari — Computer Engineering student building ML/NLP systems.",
          },
        ];
      case "experience":
        return [
          {
            type: "output",
            text: "AI products, NLP pipelines, REST APIs, and product-focused frontend work.",
          },
        ];
      case "clear":
        setLines([]);
        return [];
      default:
        return [
          {
            type: "error",
            text: `zsh: command not found: ${command.trim()}`,
          },
        ];
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();

    // Add input line
    const inputLine: TerminalLine = {
      type: "input",
      text: trimmed || "",
    };

    if (trimmed === "clear") {
      processCommand(trimmed);
      setInput("");
      setHistoryIndex(-1);
      if (trimmed) setHistory((prev) => [trimmed, ...prev]);
      return;
    }

    const result = processCommand(trimmed);
    setLines((prev) => [...prev, inputLine, ...result]);

    if (trimmed) {
      setHistory((prev) => [trimmed, ...prev]);
    }

    setInput("");
    setHistoryIndex(-1);
  };

  // Arrow key history navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const nextIndex = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(nextIndex);
      if (history[nextIndex]) setInput(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = historyIndex - 1;
      if (nextIndex < 0) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    }
  };

  return (
    <div className="glass-card overflow-hidden rounded-[20px] border border-[color:var(--border)] shadow-[0_0_40px_var(--accent-10)]">
      {/* ── Title bar ── */}
      <div className="flex items-center gap-3 border-b border-[color:var(--border)] bg-[color:var(--surface-strong)]/90 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <span className="rounded-md bg-[color:var(--surface)]/60 px-3 py-0.5 text-[11px] font-medium tracking-wide text-[color:var(--muted)]">
            ankit@portfolio: ~
          </span>
        </div>
        <div className="w-12" /> {/* Spacer to center title */}
      </div>

      {/* ── Terminal body — click anywhere to focus ── */}
      <div
        ref={scrollRef}
        onClick={focusInput}
        className="max-h-[360px] min-h-[280px] cursor-text overflow-y-auto scroll-smooth p-4 font-mono text-[13px] leading-relaxed"
        style={{
          background:
            "linear-gradient(180deg, rgba(2, 6, 23, 0.97) 0%, rgba(15, 23, 42, 0.98) 100%)",
        }}
      >
        {/* Output lines */}
        <div className="space-y-0.5">
          {lines.map((line, index) => {
            if (line.type === "input") {
              return (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-[color:var(--accent)] opacity-80">
                    ❯
                  </span>
                  <span className="text-slate-200">{line.text}</span>
                </div>
              );
            }
            if (line.type === "error") {
              return (
                <p key={index} className="text-rose-400/90">
                  {line.text}
                </p>
              );
            }
            if (line.type === "system") {
              return (
                <p key={index} className="text-slate-500">
                  {line.text || "\u00A0"}
                </p>
              );
            }
            // output
            return (
              <p key={index} className="text-slate-300">
                {line.text || "\u00A0"}
              </p>
            );
          })}
        </div>

        {/* ── Active prompt line ── */}
        <form
          onSubmit={handleSubmit}
          className="mt-2 flex items-center gap-2"
        >
          <span className="text-[color:var(--accent)]">❯</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-[13px] text-slate-100 caret-[color:var(--accent)] outline-none placeholder:text-slate-600"
            placeholder="type a command..."
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}

export default Terminal;
