import React, { useState, useEffect } from 'react';
import axios from 'axios';

const impressora = {
  id: 45,
  serie: "28868816954",
  marca: "Epson",
  modelo: "EcoTank L3110",
  local: "Campus Campinas"
};

const fetchSolucao = (setSolucao, defeitoId) => () => {
  axios.get(`/solucoes/${defeitoId}`)
    .then((response) => { setSolucao(response.data); });
}

export default ({match}) => {
  const {serie, marca, modelo, local} = impressora;
  const [solucao, setSolucao] = useState({solucao: '<p>Carregando solucoes</p>'});

  console.log(props);

  useEffect(fetchSolucao(setSolucao, match.params.defeitoId), []);

  return (
    <div class="sugestao">
      <h1 className="h3 font-weight-normal text-center">Solução Sugerida</h1>
      <div className="solucao" dangerouslySetInnerHTML={{__html: solucao.solucao }} />
      <button className="btn btn-primary btn-block mt-3" type="button">Problema Resolvido!</button>
      <button className="btn btn-secondary btn-block" type="button">Ainda não resolveu!</button>
      <small>Apresentando soluções para Impressora {marca} {modelo} número de série {serie} alocada em <em>{local}</em>.</small>
    </div>
  );
};
