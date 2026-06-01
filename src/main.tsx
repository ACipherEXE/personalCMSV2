import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/custom/NavBar.tsx";
import Content from "./components/Pages/Content.tsx";
import Models from "./components/Pages/Models/Models.tsx";
import { modelPath } from "./paths/model-paths.ts";
import { contentPath } from "./paths/content-path.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen bg-black">
      <BrowserRouter>
        <NavBar>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path={modelPath.model} element={<Models />} />
            <Route
              path={`${modelPath.modelEntry}:modelId`}
              element={<Models />}
            />
            <Route path={contentPath.content} element={<Content />} />
            <Route
              path={`${contentPath.contentEntry}:contentId`}
              element={<Content />}
            />
          </Routes>
        </NavBar>
      </BrowserRouter>
    </div>
  </StrictMode>,
);
