import React from 'react';

export default ({id, impressora, abertura, marca, modelo, local}) => (
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Chamado #{id}</h5>
      <small>{abertura}</small>
    </div>
    <p className="mb-1">Impressora {marca} {modelo} <br /> Número de Série {impressora}</p>
    <small>Alocada em <em>{local}</em></small>
  </a>
)
