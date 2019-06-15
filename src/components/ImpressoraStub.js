import React from 'react';

export default ({serie, marca, modelo, local}) => (
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Impressora #{serie}</h5>
    </div>
    <p className="mb-1">Impressora {marca} {modelo}</p>
    <small>Alocada em <em>{local}</em></small>
  </a>
)
