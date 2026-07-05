import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import LoadingScreen from "./components/LoadingScreen";
import CursorTrail from "./components/CursorTrail";
import MouseSpotlight from "./components/MouseSpotlight";
import Testimonials from "./components/Testimonials";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    return (localStorage.getItem("theme") as "dark" | "light") ?? "dark";
  });

  // Apply to <html> so every CSS variable picks it up site-wide
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    // data-theme on the root div means all children inherit variables
    <div
      data-theme={theme}
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        transition: "background-color 0.35s ease, color 0.35s ease",
      }}
    >
      <LoadingScreen />
      <CursorTrail />
      <MouseSpotlight />
      <ScrollProgress />

      {/* Mesh gradient background, driven entirely by theme variables now */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{ background: "var(--page-grad)" }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        {/* Pass toggleTheme and current theme down to Navbar */}
        <Navbar theme={theme} onToggleTheme={toggleTheme} />

        <main className="flex-1 py-6 lg:py-8">
          <Hero />
          <div className="py-10 sm:py-12">
            <Terminal />
          </div>
          <About />
          <Skills />
          <Testimonials />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>

      <BackToTop />
    </div>
  );
}

export default App;
