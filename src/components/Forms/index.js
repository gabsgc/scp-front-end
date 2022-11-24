import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Forms() {
    const baseURL = 'http://localhost:8080/pessoa';
    const token = JSON.parse(window.localStorage.getItem('token'));
    const bearer_token = token.jwtToken;

    const navigate = useNavigate();

    const [postMatricula, setPostMatricula] = useState("");
    const [postNome, setPostNome] = useState("");
    const [postCPF, setPostCPF] = useState("");
    const [postDataNasc, setPostDataNasc] = useState("");
    const [postGenero, setPostGenero] = useState("");
    const [postFoto, setPostFoto] = useState("");

    const postData = async e => {
        e.preventDefault();

        const postData = {
            matricula: postMatricula,
            nome: postNome,
            cpf: postCPF,
            dataNascimento: postDataNasc,
            genero: postGenero,
            foto: postFoto
        };
        console.log(postData);

        try {

            await fetch(`${baseURL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${bearer_token}`
                },
                body: JSON.stringify(postData)
            });
            
        } catch (err) {
            console.log(err);
        }
        navigate("/home");
    }

    return (
        <>
            <div className='container mt-4'>
                <h2 className='text-center text-primary p-4'>Cadastro de Aluno</h2>
                <form className="row g-3 needs-validation" onSubmit={postData} novalidate>
                    <div className="col-md-6">
                        <label className="form-label">Matricula </label>
                        <input type="number" className="form-control" value={postMatricula} onChange={(e) =>
                            setPostMatricula(e.target.value)} name='matricula' placeholder='0000000' required />
                        <div class="invalid-feedback">
                            Por favor, infome a matrícula do aluno.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Nome </label>
                        <input type="name" className="form-control" value={postNome} onChange={(e) =>
                            setPostNome(e.target.value)} name='nome' placeholder='Nome' required />
                        <div class="invalid-feedback">
                            Por favor, infome o nome do aluno.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">CPF </label>
                        <input type="text" className="form-control" value={postCPF} onChange={(e) =>
                            setPostCPF(e.target.value)} name='cpf' placeholder='000.000.000-0' required />
                        <div class="invalid-feedback">
                            Por favor, infome o CPF do aluno.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Data de Nascimento </label>
                        <input type="date" className="form-control" value={postDataNasc} onChange={(e) =>
                            setPostDataNasc(e.target.value)} name='datanascimento' placeholder='01/01/2000' />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Gênero </label>
                        <select className="form-select" aria-label="Gênero" id='genero'>
                            <option selected>Selecione seu gênero</option>
                            <option value="M" onChange={(e) => setPostGenero(e.target.value)}>M</option>
                            <option value="F" onChange={(e) => setPostGenero(e.target.value)}>F</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="formFile" className="form-label">Foto</label>
                        <input className="form-control" type="file" id="formFile" value={postFoto} onChange={(e) =>
                            setPostFoto(e.target.value)} />
                    </div>
                    <div className='col-md-6'>
                        <button type="submit" className="btn btn-primary">Cadastrar</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Forms;