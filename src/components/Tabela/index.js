import React, { useEffect, useState, useRef } from 'react';

export default function Tabela() {
    const [users, setUsers] = useState([]);
    const baseURL = 'http://localhost:8080/pessoa';
    const token = JSON.parse(window.localStorage.getItem('token'));
    const bearer_token = token.jwtToken;

    var userPhoto = null;

    useEffect(() => {
        load();
    }, []);


    async function load() {
        await fetch(`${baseURL}`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${bearer_token}`
            },
        })
            .then(data => data.json())
            .then(data => {
                setUsers(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <>
            <table className="table table-responsive-md table-md table-bordered border-dark">
                <thead>
                    <tr className="table-dark text-center">
                        <th scope="col">Foto</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Matrícula</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Data de Nascimento</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody className="table-light border-dark text-center">
                    {users.map(user => (
                        <tr key={user.matriculaPessoa}>
                            <td>
                                {userPhoto
                                ? <img src={user.foto} alt={`Foto de ${user.nome}`} />
                                : <img src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
                                    alt={`Foto de ${user.nome}`} 
                                    width="25%"/>
                            }</td>
                            <td>{user.nome}</td>
                            <td>{user.matricula}</td>
                            <td>{user.cpf}</td>
                            <td>{user.dataNascimento}</td>
                            <td>{user.genero}</td>
                            <td>{user.acoes ? "presente" : "ausente"}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </>
    )
}