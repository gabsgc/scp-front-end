import React from 'react';

import Routes from './routes';

import useToken from './util/useToken';
import Login from './pages/Login';

import './index.css';

function App() {

    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <Routes />
    );
}

export default App;
