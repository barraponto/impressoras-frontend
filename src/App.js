import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import logo from './consulti.png';

const App = () => {
  return (
    <div className="app">
      <h1 className="app-header">
        <img src={logo} alt="ConsulTI" />
      </h1>
      <LoginForm />
    </div>
  );
}

export default App;
