import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";

const Rotas = () => (
<BrowserRouter>
   <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/pessoa" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
  </BrowserRouter>
)

export default Rotas;