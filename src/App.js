import React, { useState } from 'react';
import Biscoito from './Biscoito';
import Integrantes from './Integrantes';
import './App.css';

export default function App() {
  const [tela, setTela] = useState('home');

  return (
    <div>
      <h1>Biscoito da Sorte</h1>

      <nav>
        <button onClick={() => setTela('biscoito')}>Biscoito</button>
        <button onClick={() => setTela('integrantes')}>Integrantes</button>
      </nav>

      {tela === 'home' && <p>Bem-vindo ao Biscoito da Sorte!</p>}
      {tela === 'biscoito' && <Biscoito />}
      {tela === 'integrantes' && <Integrantes />}
    </div>
  );
}