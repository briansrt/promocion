import React, { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import './styles/AdminHome.css';

export default function AdminHome() {
    const [winners, setWinners] = useState([
        {
        date: '2023-05-15',
        name: 'Juan Pérez',
        idNumber: '1234567890',
        phone: '3001234567',
        city: 'Bogotá',
        code: 'ABC123',
        prize: 'Camiseta'
        },
        {
        date: '2023-05-16',
        name: 'María Rodríguez',
        idNumber: '0987654321',
        phone: '3109876543',
        city: 'Medellín',
        code: 'XYZ789',
        prize: 'Gorra'
        },
        {
        date: '2023-05-17',
        name: 'Carlos Gómez',
        idNumber: '5678901234',
        phone: '3205678901',
        city: 'Cali',
        code: 'DEF456',
        prize: 'Mochila'
        }
    ]);

    const home = useNavigate();

    const handleLogout = () => {
        home("/");
    };

    return (
        <div className="admin-home">
        <header className="admin-home-header">
            <h1>Panel de Administración</h1>
            <button onClick={handleLogout} className="logout-button">Salir</button>
        </header>
        
        <main>
            <section className="winners-section">
            <h2>Tabla de Ganadores</h2>
            <div className="table-container">
                <table className="winners-table">
                <thead>
                    <tr>
                    <th>Fecha</th>
                    <th>Nombre</th>
                    <th>Cédula</th>
                    <th>Celular</th>
                    <th>Ciudad</th>
                    <th>Código</th>
                    <th>Premio</th>
                    </tr>
                </thead>
                <tbody>
                    {winners.map((winner, index) => (
                    <tr key={index}>
                        <td>{winner.date}</td>
                        <td>{winner.name}</td>
                        <td>{winner.idNumber}</td>
                        <td>{winner.phone}</td>
                        <td>{winner.city}</td>
                        <td>{winner.code}</td>
                        <td>{winner.prize}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </section>
        </main>
        </div>
    );
}