import React from 'react';
import { Link } from 'react-router-dom';

import Tabela from '../../components/Tabela';
import Navbar from '../../components/Navbar';

import './style.css';

export default function Home() {
    return (
        <>
            <div className="home">
                <Navbar/>
                <h2 className="m-3 pt-4 text-h2">Olá, admin!</h2>
                <div className="d-flex flex-row-reverse mx-5">
                    <Link to="/cadastro" className="linkPage">
                        <button type="button" className="btn btn-primary btn-rounded">Cadastrar nova pessoa</button>
                    </Link>
                </div>
                <h5 className="m-3 pt-4 text-center">Confira a lista de pessoas cadastradas no sistema</h5>
                <div className="container">
                    <Tabela />
                </div>
            </div>
        </>
    )
}