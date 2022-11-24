import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Presenca from "./pages/Presença";

import useToken from './utils/useToken';

function Rotas() {

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login setToken={setToken} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/presenca" element={<Presenca />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;