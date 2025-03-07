

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';  // Importing the relevant CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // Mock API call for authentication (you can replace it with your actual API)
      const response = await axios.post('/api/login', { email, password });
      
      if (response.data.success) {
        // On successful login, store the user session or token
        localStorage.setItem('user', JSON.stringify(response.data.user));  // Store user details in localStorage
        history.push('/dashboard');  // Redirect to dashboard or home page
      } else {
        setError('Invalid email or password');  // Set error message if authentication fails
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <p className="register-link">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}

export default Login;
