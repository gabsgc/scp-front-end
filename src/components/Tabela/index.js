import React from 'react';

function Tabela() {
    return (
        <div className="container-fluid w-75 mt-3">
            <table class="table table-responsive-md table-md table-bordered border-dark">
                <thead>
                    <tr className="table-dark text-center">
                        <th scope="col">Matrícula</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Data de Nascimento</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody class="table-light border-dark text-center">
                    <tr>
                        <th scope="row">1</th>
                        <td>000000000</td>
                        <td>Otto</td>
                        <td>20/10/1999</td>
                        <td>M</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>000000000</td>
                        <td>Peter</td>
                        <td>12/01/1998</td>
                        <td>M</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>000000000</td>
                        <td>Mary</td>
                        <td>22/11/2000</td>
                        <td>F</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tabela;