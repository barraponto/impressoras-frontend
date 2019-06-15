import React from 'react';

const impressora = {
  id: 45,
  serie: "28868816954",
  marca: "Epson",
  modelo: "EcoTank L3110",
  local: "Campus Campinas"
};

const defeitos = [
  { id: 1, descricao: "A impressora não liga." },
  { id: 2, descricao: "A impressora imprime um papel em branco." },
  { id: 3, descricao: "A impressora emite um bipe longo." },
  { id: 4, descricao: "A impressora sempre imprime uma folha de teste." },
];

const navigate = (history) => (event) => {
  history.push('/chamado/sugestao');
}

export default ({history}) => {
  const {serie, marca, modelo, local} = impressora;
  return (
    <form className="defeito" onChange={navigate(history)}>
      <h1 className="h3 font-weight-normal text-center">Abrindo Chamado</h1>
      <div class="form-group">
        <label for="defeito">Selecione um defeito que sua impressora está apresentando:</label>
        <select class="form-control" id="defeito">
          {defeitos.map(defeito => <option key={defeito.id} value={defeito.id}>{defeito.descricao}</option>)}
        </select>
      </div>
      <small>Abrindo chamado para Impressora {marca} {modelo} número de série {serie} alocada em <em>{local}</em>.</small>
    </form>
  );
}
