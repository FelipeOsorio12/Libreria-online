import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppLibreria } from "./AppLibreria";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppLibreria></AppLibreria>
  </StrictMode>,
);
