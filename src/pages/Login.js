import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [storeName, setStoreName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    const validStoreName = 'Store A';
    const validPassword = 'password123';

    if (storeName === validStoreName && password === validPassword) {
     
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/invoice-list');
    } else {
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login to Invoice Portal</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Store Name:</label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
