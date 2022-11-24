import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <h2 className="m-3 pt-4 text-h2">Olá, professor(a)!</h2>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header">Cadastro de Aluno</div>
                            <div className="card-body">
                                <p>Cadastre novos alunos no sistema</p>
                                <Link to="/cadastro" className="linkPage">
                                    <button type="button" className="btn btn-light btn-rounded">
                                        <span className='p-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
                                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                                            </svg>
                                        </span>
                                        Novo aluno
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card text-light bg-danger mb-3">
                            <div className="card-header">Controle de Presença</div>
                            <div className="card-body">
                                <p>Registre as presenças e ausências dos alunos cadastrados</p>
                                <Link to="/presenca" className="linkPage">
                                    <button type="button" className="btn btn-light btn-rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                        </svg>
                                        Registrar presença
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}