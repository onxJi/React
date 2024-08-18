import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroesApp } from "./HeroesApp";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <HeroesApp />
    </StrictMode>
  </BrowserRouter>
);
