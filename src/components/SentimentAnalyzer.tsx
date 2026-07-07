import { useState } from "react";

/**
 * Placeholder sentiment analyser widget for the Home section.
 *
 * This ships with a tiny keyword-based heuristic just so the UI has
 * something to show out of the box. Swap `analyzeLocally` for a real
 * call to your Django + PyTorch/NLP inference endpoint when it's ready
 * (see the TODO below) — the rest of the container (input, loading
 * state, result card) is already wired up for that.
 */

type Sentiment = "positive" | "neutral" | "negative";

type Result = {
  sentiment: Sentiment;
  confidence: number;
};

const POSITIVE_WORDS = [
  "good",
  "great",
  "love",
  "amazing",
  "awesome",
  "happy",
  "excellent",
  "fantastic",
  "wonderful",
  "nice",
  "best",
  "brilliant",
];

const NEGATIVE_WORDS = [
  "bad",
  "hate",
  "terrible",
  "awful",
  "sad",
  "worst",
  "horrible",
  "poor",
  "disappointing",
  "annoying",
  "angry",
  "broken",
];

// TODO: replace this with a fetch() to your Django REST endpoint that
// runs a fine-tuned PyTorch/HF model, e.g.:
//   const res = await fetch("/api/sentiment", { method: "POST", body: ... });
function analyzeLocally(text: string): Result {
  const words = text.toLowerCase().match(/[a-z']+/g) ?? [];
  let score = 0;

  for (const word of words) {
    if (POSITIVE_WORDS.includes(word)) score += 1;
    if (NEGATIVE_WORDS.includes(word)) score -= 1;
  }

  const sentiment: Sentiment =
    score > 0 ? "positive" : score < 0 ? "negative" : "neutral";
  const confidence = Math.min(0.55 + Math.abs(score) * 0.12, 0.97);

  return { sentiment, confidence };
}

const sentimentStyles: Record<
  Sentiment,
  { label: string; className: string; emoji: string }
> = {
  positive: {
    label: "Positive",
    className: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
    emoji: "🙂",
  },
  neutral: {
    label: "Neutral",
    className: "border-slate-400/30 bg-slate-500/10 text-slate-300",
    emoji: "😐",
  },
  negative: {
    label: "Negative",
    className: "border-rose-400/30 bg-rose-500/10 text-rose-300",
    emoji: "🙁",
  },
};

function SentimentAnalyzer() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const handleAnalyze = () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);

    // Simulated latency so the loading state is visible — remove once
    // this calls a real endpoint.
    window.setTimeout(() => {
      setResult(analyzeLocally(text));
      setLoading(false);
    }, 500);
  };

  return (
    <div className="glass-card interactive-card rounded-[28px] p-6 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Sentiment Analyser
        </p>
        <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
          Demo
        </span>
      </div>

      <p className="mt-2 text-sm text-[color:var(--muted)]">
        Type a sentence and get an instant sentiment read. Currently running
        a lightweight local heuristic — the real PyTorch/NLP model plugs in
        here later.
      </p>

      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={3}
        placeholder="e.g. This portfolio is really well built!"
        className="form-field mt-4 resize-none"
      />

      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={handleAnalyze}
          disabled={!text.trim() || loading}
          className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-400 disabled:pointer-events-none disabled:opacity-50"
        >
          {loading ? "Analysing…" : "Analyse"}
        </button>
        {result && (
          <button
            type="button"
            onClick={() => {
              setText("");
              setResult(null);
            }}
            className="text-sm text-[color:var(--muted)] transition hover:text-cyan-400"
          >
            Clear
          </button>
        )}
      </div>

      {result && (
        <div
          className={`mt-5 flex items-center justify-between rounded-2xl border px-4 py-3 ${sentimentStyles[result.sentiment].className}`}
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">
              {sentimentStyles[result.sentiment].emoji}
            </span>
            <span className="text-sm font-semibold">
              {sentimentStyles[result.sentiment].label}
            </span>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] opacity-80">
            {Math.round(result.confidence * 100)}% confidence
          </span>
        </div>
      )}
    </div>
  );
}

export default SentimentAnalyzer;
