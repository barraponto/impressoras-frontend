import React from 'react';
import { Link } from 'react-router-dom';
import ChamadoStub from './ChamadoStub';

const chamados = [
  {
    id: 27,
    impressora: "28868816954",
    abertura: "2 horas atrás",
    marca: "Epson",
    modelo: "EcoTank L3110",
    local: "Campus Campinas"
  },
  {
    id: 29,
    impressora: "55465785451",
    abertura: "1 hora atrás",
    marca: "Samsung",
    modelo: "SL-M2070W",
    local: "Campus Sumaré"
  }
]

export default () => {
  return (
    <div className="dashboard">
      <h1 className="h3 font-weight-normal text-center">Chamados em aberto</h1>
      <div className="list-group mt-3">
        {chamados.map(chamado => <ChamadoStub key={chamado.id} {...chamado} />)}
      </div>
      <Link to="/chamado/impressora" className="btn btn-primary btn-block mt-3">Abrir Novo Chamado</Link>
    </div>
  );
}
