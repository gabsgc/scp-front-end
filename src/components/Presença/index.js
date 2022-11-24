import React from "react";
import Tabela from '../../components/Tabela';

function Presenca (){

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    

    if(today != ''){
        return (
        
            <>
                <Tabela />
            </>
        )
    } else{
        return (
            <>
                <div className='container mt-4'>
                    <h2 className='text-center text-primary p-4'>Presenças</h2>
                    <form class="row g-3" action="">
                        <div class="col-md-6">
                            <label class="form-label">Data: </label>
                            <input type="date" class="form-control" value={today} />
                        </div>
                    
                        <div class="col-md-6">
                            <label class="form-label">O aluno está: </label>
                            <select class="form-select" aria-label="acoes">
                                <option selected>Presença</option>
                                <option value={true} >Presente</option>
                                <option value={false}>Ausente</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <button type="submit" class="btn btn-primary">Confirmar</button>
                        </div>
                        
                    </form>
                </div>
            </>
        )
    }
    
    
}

export default Presenca;