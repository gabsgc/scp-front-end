import React from 'react';

import Tabela from '../../components/Tabela';

function Home() {
    return (
        <>
            <h2 className="text-center pt-5 text-primary">Sistema de Controle de Presença</h2>
            {/* <button type="button" class="btn btn-primary">Cadastrar</button> */}
            <h2 className="text-center pt-3">Pessoas</h2>
            <p className="text-center">Confira a lista de pessoas cadastradas no sistema</p>
            <div className="container my-2">
                <Tabela />
            </div>
        </>
    )
}

export default Home;