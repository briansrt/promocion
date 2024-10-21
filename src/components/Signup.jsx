import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Signup.css';

export default function Signup({ role }) {
  const [formData, setFormData] = useState({
    email: '', password: '', name: '', phone: '',
    birthdate: '', idNumber: '', city: '', role: role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ejemplo de petición fetch (puedes modificar la URL y el método según lo necesites)
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2>Crear una cuenta {role === 'admin' ? 'de Administrador' : 'de Usuario'}</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" autoComplete="email" required placeholder="Correo electrónico" value={formData.email} onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" autoComplete="new-password" required placeholder="Contraseña" value={formData.password} onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" autoComplete="name" required placeholder="Nombre" value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Celular</label>
            <input type="tel" autoComplete="tel" required placeholder="Celular" value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">Fecha de nacimiento</label>
            <input type="date" required value={formData.birthdate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="idNumber">Cédula</label>
            <input type="text" required placeholder="Cédula" value={formData.idNumber} onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Ciudad</label>
            <input type="text" required placeholder="Ciudad" value={formData.city} onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-button">
            Registrarse
          </button>
        </form>
        <div className="login-link">
          <Link to="/Form">¿Ya tienes una cuenta? Inicia sesión</Link>
        </div>
      </div>
    </div>
  );
}