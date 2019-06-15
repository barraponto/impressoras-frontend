import React from 'react';
import ImpressoraStub from './ImpressoraStub';

const impressora = {
  id: 45,
  serie: "28868816954",
  marca: "Epson",
  modelo: "EcoTank L3110",
  local: "Campus Campinas"
};

export default () => {
  const {serie, marca, modelo, local} = impressora;
  return (
    <div class="sugestao">
      <h1 className="h3 font-weight-normal text-center">Solução Sugerida</h1>
      <ol>
        <li>Verifique se a impressora está conectada na tomada.</li>
        <li>Confira se a tomada está com energia. Experimente conectar outro aparelho, como um carregador de celular.</li>
        <li>Experimente substituir o cabo que conecta a impressora na tomada. O cabo reserva se encontra preso atrás da mesma.</li>
      </ol>
      <button className="btn btn-primary btn-block mt-3" type="button">Problema Resolvido!</button>
      <button className="btn btn-secondary btn-block" type="button">Ainda não resolveu!</button>
      <small>Apresentando soluções para Impressora {marca} {modelo} número de série {serie} alocada em <em>{local}</em>.</small>
    </div>
  );
};
