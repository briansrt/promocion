import './styles/Form.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateUser = async (event)=>{
    event.preventDefault();
    try {
        const response = await fetch('https://horoscopo-back.vercel.app/v1/credenciales/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        
        if (response.ok) {
            const data = await response.json();
            console.log('Data:', data);
            if (data.status === 'Bienvenido') {
                if (data.role === 'user') {
                    callback('user');
                    goTo('/userHome');
                } else if (data.role === 'admin') {
                    callback('admin');
                    goTo('/adminHome');
                }
            } else if (data.status === 'ErrorCredenciales') {
                alert('Usuario y/o contraseña incorrectos');
            }
        } else {
            alert('Error al conectar a la base de datos');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al conectar con el servidor');
    }
};

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2>Iniciar sesión</h2>
        <form className="login-form" onSubmit={validateUser}>
          <div className="form-group">
            <label htmlFor="email-address">Correo electrónico</label>        
            <input type="email" autoComplete="email" required placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" autoComplete="current-password" required placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Ingresar
          </button>
        </form>
        <div className="signup-link">
          <Link to="/Signup">¿No tienes una cuenta? Regístrate</Link>
        </div>
      </div>
    </div>
  );
}