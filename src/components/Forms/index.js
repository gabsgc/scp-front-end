import React, { useState } from 'react';

function Forms() {

    const baseURL = 'http://localhost:8080/pessoa';

    const [postMatricula, setPostMatricula] = useState("");
    const [postNome, setPostNome] = useState("");
    const [postCPF, setPostCPF] = useState("");
    const [postDataNasc, setPostDataNasc] = useState("");
    const [postMasculino, setPostMasculino] = useState("");
    const [postFeminino, setPostFeminino] = useState("");
    const [postFoto, setPostFoto] = useState("");

    async function postData() {
        const postData = {
            matricula: postMatricula,
            nome: postNome,
            cpf: postCPF,
            dataNascimento: postDataNasc,
            masculino: postMasculino,
            feminino: postFeminino,
            foto: postFoto,
        };
        console.log(postData);

        try {

            await fetch(`${baseURL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });


        }catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className='container mt-4'>
                <h2 className='text-center text-primary p-4'>Cadastro de Pessoa</h2>
                <form class="row g-3" action="">
                    <div class="col-md-6">
                        <label class="form-label">Matricula </label>
                        <input type="number" class="form-control" value={postMatricula} onChange={(e) => setPostMatricula(e.target.value)} name='matricula' placeholder='0000000' />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Nome </label>
                        <input type="name" class="form-control" value={postNome} onChange={(e) => setPostNome(e.target.value)} name='nome' placeholder='Nome' />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">CPF </label>
                        <input type="text" class="form-control" value={postCPF} onChange={(e) => setPostCPF(e.target.value)} name='cpf' placeholder='000.000.000-0' />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Data de Nascimento </label>
                        <input type="date" class="form-control" value={postDataNasc} onChange={(e) => setPostDataNasc(e.target.value)} name='datanascimento' placeholder='01/01/2000' />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Gênero </label>
                        <select class="form-select" aria-label="Gênero">
                            <option selected>Selecione seu gênero</option>
                            <option value={postMasculino} onChange={(e) => setPostMasculino(e.target.value)}>M</option>
                            <option value={postFeminino} onChange={(e) => setPostFeminino(e.target.value)}>F</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="formFile" class="form-label">Foto</label>
                        <input class="form-control" type="file" id="formFile" value={postFoto} onChange={(e) => setPostFoto(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <button type="submit" class="btn btn-primary">Cadastrar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Forms;