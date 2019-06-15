import React from 'react';
import { Link } from 'react-router-dom';

export default ({serie, marca, modelo, local}) => (
  <Link to="/chamado/defeito" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Impressora #{serie}</h5>
    </div>
    <p className="mb-1">Impressora {marca} {modelo}</p>
    <small>Alocada em <em>{local}</em></small>
  </Link>
)
