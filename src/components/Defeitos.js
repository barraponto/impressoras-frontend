import React, { useState, useEffect } from 'react';
import axios from 'axios';

const impressora = {
  id: 45,
  serie: "28868816954",
  marca: "Epson",
  modelo: "EcoTank L3110",
  local: "Campus Campinas"
};

const navigate = (history) => (event) => {
  history.push(`/chamado/sugestao/${event.target.value}`);
}

const fetchDefeitos = (setDefeitos) => () => {
  axios.get('/defeitos')
    .then((response) => { setDefeitos(response.data); });
}

export default ({history}) => {
  const [defeitos, setDefeitos] = useState([]);
  const {serie, marca, modelo, local} = impressora;

  useEffect(fetchDefeitos(setDefeitos), []);

  return (
    <form className="defeito" onChange={navigate(history)}>
      <h1 className="h3 font-weight-normal text-center">Abrindo Chamado</h1>
      <div className="form-group">
        <label htmlFor="defeito">Selecione um defeito que sua impressora está apresentando:</label>
        <select className="form-control" id="defeito">
          {defeitos.map(defeito => <option key={defeito.id} value={defeito.id}>{defeito.descricao}</option>)}
        </select>
      </div>
      <small>Abrindo chamado para Impressora {marca} {modelo} número de série {serie} alocada em <em>{local}</em>.</small>
    </form>
  );
}
