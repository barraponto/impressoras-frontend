import React from 'react';

export default () => {
  return (
    <form className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal">Olá, querido cliente!</h1>
      <p>Entre com seu email e senha para acessar a ferramenta!</p>
      <label htmlFor="inputEmail" className="sr-only">Email address</label>
      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
      <button className="btn btn-primary btn-block mt-2" type="submit">Entrar</button>
      <button className="btn btn-secondary btn-block" type="button">Esqueci minha senha!</button>
      <p className="mt-5 mb-3 text-muted">Um projeto de GTI Fatec Campinas</p>
    </form>
  );
}
