import React, { useState } from 'react';

const frases = [
  "Você vai ter um dia incrível!",
  "Boas surpresas estão a caminho!",
  "Sorria, coisas boas estão chegando!",
  "A sorte está ao seu lado!",
  "Um novo amigo pode surgir hoje.",
  "Confie em sua intuição.",
  "Um desafio vai se transformar em oportunidade.",
  "A felicidade está nos pequenos momentos.",
  "Você receberá boas notícias em breve.",
  "Aproveite cada momento com pessoas queridas.",
  "Uma viagem ou mudança está chegando.",
  "Seja paciente, grandes coisas estão por vir.",
  "Uma oportunidade inesperada aparecerá.",
  "Alguém vai te surpreender com um gesto de carinho.",
  "Hoje é dia de iniciar algo novo.",
  "Sua criatividade vai brilhar.",
  "Um segredo será revelado de forma positiva.",
  "Você vai conquistar algo que deseja há tempos.",
  "A sorte financeira está a seu favor.",
  "Não tenha medo de seguir seu coração."
];

export default function Biscoito() {
  const [frase, setFrase] = useState('');
  const [quebrado, setQuebrado] = useState(false);

  function quebrarBiscoito() {
    const indice = Math.floor(Math.random() * frases.length);
    setFrase(frases[indice]);
    setQuebrado(true);
  }

  function resetarBiscoito() {
    setFrase('');
    setQuebrado(false);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Imagem do biscoito */}
      <img
        src={
          quebrado
            ? process.env.PUBLIC_URL + '/biscoito_aberto.png'
            : process.env.PUBLIC_URL + '/biscoito_fechado.png'
        }
        alt="Biscoito da sorte"
        style={{
          width: quebrado ? 300 : 200, // aumenta a imagem quando aberto
          marginBottom: 20,
          transition: 'width 0.3s ease'
        }}
      />

      {/* Botões */}
      <div style={{ marginBottom: 20 }}>
        <button
          onClick={quebrarBiscoito}
          style={{ marginRight: 10, padding: 10, fontSize: 16 }}
          disabled={quebrado} // desabilita após clicar
        >
          Quebrar Biscoito
        </button>
        <button
          onClick={resetarBiscoito}
          style={{ padding: 10, fontSize: 16 }}
        >
          Resetar
        </button>
      </div>

      {/* Frase */}
      {frase && <p style={{ fontSize: 18, fontWeight: 'bold' }}>{frase}</p>}
    </div>
  );
}
