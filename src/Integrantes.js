import React from 'react';

export default function Integrantes() {
  return (
    <div className="integrantes-container">
      <div className="integrante">
        <img src={process.env.PUBLIC_URL + '/membro1.jpg'} alt="Matheus Soares Valério" />
        <p>Matheus Soares Valério</p>
      </div>
    </div>
  );
}
