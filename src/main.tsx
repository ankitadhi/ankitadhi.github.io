import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const storedTheme = window.localStorage.getItem("theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
document.documentElement.setAttribute(
  "data-theme",
  storedTheme ?? (prefersLight ? "light" : "dark"),
);

console.log(
  "%cAnkit Adhikari \n\ncrafting thoughtful AI products with a little bit of magic.\nStay curious, keep shipping.",
  "color:#22d3ee;font-family:monospace;font-size:14px;",
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
