import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Presentation from "./pages/Presentation";
import Projects from "./pages/Projects";

export default function App() {
   return (
      <BrowserRouter>
        <header>
          <nav className="desktopMenu">
              <a href='/'>Apresentação</a>
              <a href='/projects'>Projetos</a>
          </nav>
        </header>
        <main>
          <Routes>
              <Route path="/" element={<Presentation />} />
              <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </BrowserRouter>
   );
}