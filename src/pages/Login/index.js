import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

import BannerLogin from '../../assets/img/login.svg';
import LogoIES from '../../assets/img/logo_ies.png';

import './style.css'

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

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    navigate("/home");
  }

  return (
    <>
      <div class="row d-flex justify-content-center mt-4">
        <img src={LogoIES} class="img-fluid w-25" alt="Logo IES" />
        <h1 className='text-center pt-4'>Sistema de Controle de Presença</h1>
      </div>

      <div class="container h-100 pt-4">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
            <img src={BannerLogin} class="img-fluid" alt="Login Banner" />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div class="form-outline mb-4">
                <label class="form-label" for="username">Username</label>
                <input type="text"
                  id="username"
                  class="form-control form-control-lg"
                  onChange={e => setUsername(e.target.value)} />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="password">Password</label>
                <input type="password"
                  id="password"
                  class="form-control form-control-lg"
                  onChange={e => setPassword(e.target.value)} />
              </div>

              <button type="submit" class="btn btn-lg btn-login">Sign in</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};