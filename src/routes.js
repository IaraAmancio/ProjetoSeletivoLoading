import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Diretoria from "./pages/contato";
import Loja from "./pages/loja"
import PortalDenuncia from "./pages/portal_denuncia"
import Contato from "./pages/contato"
export const RoutesApp = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/diretoria" element={<Diretoria />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/denuncia" element={<PortalDenuncia />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
  );
};

