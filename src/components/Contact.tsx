import { useState, type FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

type Status = "idle" | "sending" | "sent" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange =
    (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      // Clear field error when user starts typing
      if (field in fieldErrors) {
        setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: FieldErrors = {};
    if (!values.name.trim()) errors.name = "Name cannot be left empty.";
    if (!values.email.trim()) errors.email = "Email cannot be left empty.";
    if (!values.message.trim()) errors.message = "Message cannot be left empty.";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      return;
    }

    setFieldErrors({});

    setStatus("sending");

    // No backend is wired up yet — fall back to opening the user's mail
    // client pre-filled with the message, while giving instant UI feedback.
    const mailBody = encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`,
    );
    const mailSubject = encodeURIComponent(
      values.subject || `Portfolio message from ${values.name}`,
    );

    window.setTimeout(() => {
      window.location.href = `mailto:ankitadankit@gmail.com?subject=${mailSubject}&body=${mailBody}`;
      setStatus("sent");
    }, 500);
  };

  return (
    <ScrollReveal>
      <section
        id="contact"
        className="scroll-mt-24 py-16 sm:py-20"
      >
        <div className="glass-card interactive-card gradient-ring relative overflow-hidden rounded-[28px] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
            Let's build something useful.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            Reach out if you want to collaborate, talk about ideas, or explore a
            new project together. Fill in the form and it'll open a message
            ready to send, or use one of the links below.
          </p>

          {/* ── Contact form ── */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            <div className="sm:col-span-1">
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                value={values.name}
                onChange={handleChange("name")}
                className="form-field"
              />
              {fieldErrors.name && (
                <p className="mt-1 text-xs text-rose-400">{fieldErrors.name}</p>
              )}
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                value={values.email}
                onChange={handleChange("email")}
                className="form-field"
              />
              {fieldErrors.email && (
                <p className="mt-1 text-xs text-rose-400">{fieldErrors.email}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={values.subject}
                onChange={handleChange("subject")}
                className="form-field"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about what you have in mind..."
                value={values.message}
                onChange={handleChange("message")}
                className="form-field resize-none"
              />
              {fieldErrors.message && (
                <p className="mt-1 text-xs text-rose-400">{fieldErrors.message}</p>
              )}
            </div>

            <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-accent rounded-full px-6 py-2.5 text-sm font-medium transition duration-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Opening mail…" : "Send message"}
              </button>

              {status === "sent" && (
                <span className="text-sm font-medium text-emerald-400">
                  Your email app should be open now. Thanks for reaching out!
                </span>
              )}
              {status === "error" && (
                <span className="text-sm font-medium text-rose-400">
                  Fields cannot be left empty. Please fill in all required fields.
                </span>
              )}
            </div>
          </form>

          {/* ── Quick links ── */}
          <div className="mt-8 flex flex-wrap gap-3 border-t border-[color:var(--border)] pt-6 text-sm">
            <a
              href="mailto:ankitadankit@gmail.com"
              className="chip-accent chip-accent-hover rounded-full px-4 py-2 font-medium transition hover:-translate-y-0.5"
            >
              Email
            </a>
            <a
              href="https://github.com/ankitadhi"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-accent rounded-full px-4 py-2 font-medium transition hover:-translate-y-0.5"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-adhikari-10853227a/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-accent rounded-full px-4 py-2 font-medium transition hover:-translate-y-0.5"
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
