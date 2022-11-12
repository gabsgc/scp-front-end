import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";

const Rotas = () => (
<BrowserRouter>
   <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
  </BrowserRouter>
)

export default Rotas;