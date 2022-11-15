import React, { useEffect, useState, useRef } from 'react';

export default function Tabela() {
    const [users, setUsers] = useState([]);
    const baseURL = 'http://localhost:8080/pessoa';
    const token = JSON.parse(window.localStorage.getItem('token'));
    const bearer_token = token.jwtToken;
    // const delete_id = useRef(null); 

    useEffect(() => {
        load();
    }, []);

    async function pessoaUser(){
        await fetch (`${baseURL}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        }) 
            .then(data => data.json())
    }

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

    /*     async function deleteById() {
            const id = delete_id.current.value;
    
            if (id) {
                await fetch(`${baseURL}/${id}`, { method: "delete" })
                    .then(res => res.json())
                    .then(res => console.log(res))
            }
        } */

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
                        <tr>
                            <td><img src={user.foto} alt={`Foto de ${user.nome}`} /></td>
                            <td>{user.nome}</td>
                            <td>{user.matricula}</td>
                            <td>{user.cpf}</td>
                            <td>{user.dataNascimento}</td>
                            <td>{user.genero}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}