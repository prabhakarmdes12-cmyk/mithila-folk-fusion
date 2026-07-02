import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n/i18n";
import App from "./App";

if (typeof window !== 'undefined') {
  // Right-click
  document.addEventListener('contextmenu', (e) => e.preventDefault());
  // Drag
  document.addEventListener('dragstart', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG' || target.tagName === 'VIDEO') e.preventDefault();
  });
  // Copy / cut / select
  document.addEventListener('copy', (e) => e.preventDefault());
  document.addEventListener('cut', (e) => e.preventDefault());
  document.addEventListener('selectstart', (e) => e.preventDefault());
  // Keyboard: block DevTools, save, print, etc.
  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (e.ctrlKey && ['c', 'u', 's', 'p'].includes(key)) e.preventDefault();
    if (e.key === 'F12') e.preventDefault();
    if (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(key)) e.preventDefault();
  });
  // Blur page when window/tab loses focus (catches Snipping Tool, Win+Shift+S, etc.)
  const setBlurred = (blurred: boolean) => {
    document.documentElement.classList.toggle('page-blurred', blurred);
  };
  document.addEventListener('visibilitychange', () => setBlurred(document.hidden));
  window.addEventListener('blur', () => setBlurred(true));
  window.addEventListener('focus', () => setBlurred(false));
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
