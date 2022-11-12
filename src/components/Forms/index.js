import React from 'react';

function Forms() {
    return (
        <>
            <div className='container mt-4'>
                <h2 className='text-center text-primary p-4'>Cadastro de Pessoa</h2>
                <form class="row g-3" action="">
                    <div class="col-md-6">
                        <label class="form-label">Matricula </label>
                        <input type="number" class="form-control" name='matricula' placeholder='0000000' />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Nome </label>
                        <input type="name" class="form-control" name='nome' placeholder='Nome' />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">CPF </label>
                        <input type="text" class="form-control" name='cpf' placeholder='000.000.000-0' />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Data de Nascimento </label>
                        <input type="date" class="form-control" name='datanascimento' placeholder='01/01/2000' />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Gênero </label>
                        <select class="form-select" aria-label="Gênero">
                            <option selected>Selecione seu gênero</option>
                            <option value="M">M</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="formFile" class="form-label">Foto</label>
                        <input class="form-control" type="file" id="formFile" />
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