import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Impressoras from './components/Impressoras';
import Defeitos from './components/Defeitos';
import Solucao from './components/Solucao';
import logo from './consulti.png';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} alt="ConsulTI" />
      </header>
      <main className="container">
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/chamado/impressora" component={Impressoras} />
        <Route exact path="/chamado/defeito" component={Defeitos} />
        <Route exact path="/chamado/sugestao/:defeitoId" component={Solucao} />
      </main>
    </div>
  );
}

export default App;
