/* IMPORTACIONES */
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

/* COMPONENTE */
const LoginPage = () => {
  /* CONSTANTES */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // HANDLE LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    // PETICIÓN A LA API
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // STORE AUTHENTICAION DATA (TOKEN, USERT OBJECT) In Context or Local Storage
        if (useContext(AuthContext)) {
          useContext(AuthContext).setAuthState(data); // Assuming AuthContext usage
        } else {
          localStorage.setItem('authToken', data.token); // Example using local storage
        }
        // REDIRECT TO => PROTECTED ROUTE
        navigate('/dashboard');
      } else {
        /* HANDLE FAILEN LOGIN ATTEMPS */
        // DISPLAY ERROR MESSAGES
        console.error('Login failed:', await response.text());
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  // ADAPTAR A MI APLICACIONES
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
