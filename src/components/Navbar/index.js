import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    
    const logout = (e) => {
        e.preventDefault();
        console.log('Logout');

        localStorage.clear();

        navigate("/");
    }
    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand bg-primary" href="/home">
                        <span className="badge badge-warning bg-warning m-2">SCP</span>
                        Sistema de Controle de Presença
                    </a>
                    <Link
                        to="#"
                        onClick={logout}
                    >
                    <button class="btn btn-dark" type="submit">
                        Logout</button>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;