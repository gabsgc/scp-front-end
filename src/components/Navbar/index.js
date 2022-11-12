import React from 'react';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand bg-primary" href="/home">
                    <span className="badge badge-warning bg-warning m-2">SCP</span>
                    Sistema de Controle de Presença
                </a>
            </nav>

        </>
    )
}

export default Navbar;