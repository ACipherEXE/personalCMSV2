import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/custom/NavBar.tsx";
import Content from "./components/Pages/Content.tsx";
import Models from "./components/Pages/Models.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen bg-black">
      <BrowserRouter>
        <NavBar>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/:modelId" element={<Models />} />
            <Route path="/content" element={<Content />} />
            <Route path="/content/:contentId" element={<Content />} />
          </Routes>
        </NavBar>
      </BrowserRouter>
    </div>
  </StrictMode>,
);
