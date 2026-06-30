import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

if (typeof window !== 'undefined') {
  document.addEventListener('contextmenu', (e) => e.preventDefault());
  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (e.ctrlKey && ['c', 'u', 's', 'p'].includes(key)) e.preventDefault();
    if (e.key === 'F12') e.preventDefault();
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
