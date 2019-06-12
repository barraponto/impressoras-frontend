import React from 'react';

export default () => {
  return (
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Olá, querido cliente!</h1>
      <p>Entre com seu email e senha para acessar a ferramenta!</p>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
      <button class="btn btn-primary btn-block" type="submit">Entrar</button>
      <button class="btn btn-secondary btn-block" type="button">Esqueci minha senha!</button>
      <p class="mt-5 mb-3 text-muted">Um projeto de GTI Fatec Campinas</p>
    </form>
  );
}
