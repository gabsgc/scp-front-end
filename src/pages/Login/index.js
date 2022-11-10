import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';
import BannerLogin from '../../assets/img/login.svg';

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

  return (
    <>
      <h1 className='text-center text-primary pt-5'>Sistema de Controle de Presença</h1>
      <div class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src={BannerLogin} class="img-fluid" alt="Login Banner"/>
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <div class="form-outline mb-4">
                  <label class="form-label" for="username">Username</label>
                  <input type="text" id="username" class="form-control form-control-lg" />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="password">Password</label>
                  <input type="password" id="password" class="form-control form-control-lg" />
                </div>

                <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};