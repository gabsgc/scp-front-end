import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div class="area-login">
      <div class="login">
        <h1>Cadastro de Presença</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username"  placeholder="Seu Nome" onChange={e => setUserName(e.target.value)}></input>
          <input type="passoword" name="username"  placeholder="Sua Senha" onChange={e => setPassword(e.target.value)}></input>
          <button type="submit" value="Entrar"> Entrar </button>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};