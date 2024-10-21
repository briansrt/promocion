import React, { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import './styles/UserHome.css';

export default function UserHome({ user }) {
    

    const [code, setCode] = useState('');
    const [registeredCodes, setRegisteredCodes] = useState([
        { date: '2023-05-15', code: 'ABC123', prize: 'Camiseta' },
        { date: '2023-05-16', code: 'XYZ789', prize: 'Gorra' },
    ]);
    const home = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the code to your backend
        // and receive the prize information
        const newEntry = {
        date: new Date().toISOString().split('T')[0],
        code: code,
        prize: 'Premio aleatorio', // This would come from your backend
        };
        setRegisteredCodes([...registeredCodes, newEntry]);
        setCode('');
    };
  
    const handleLogout = () => {
        home("/");
    };

  return (
    <div className="user-home">
      <header className="user-home-header">
        <h1>Bienvenido, Usuario</h1>
        <button onClick={handleLogout} className="logout-button">Salir</button>
      </header>
      
      <main>
        <section className="register-code-section">
          <h2>Registrar Código</h2>
          <form onSubmit={handleSubmit} className="register-code-form">
            <div className="form-group">
              <label htmlFor="code-input">Código:</label>
              <input type="number" value={code} required placeholder="Ingrese el código"
                onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 3 && value >= 0 && value <= 999) {
                    setCode(value);
                    }
                }} 
                onBlur={() => {
                    setCode(code.padStart(3, '0'));
                }}
              />

            </div>
            <button type="submit" className="register-button">Registrar</button>
          </form>
        </section>

        <section className="registered-codes-section">
          <h2>Códigos Registrados</h2>
          <table className="registered-codes-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Código</th>
                <th>Premio</th>
              </tr>
            </thead>
            <tbody>
              {registeredCodes.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.code}</td>
                  <td>{entry.prize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}