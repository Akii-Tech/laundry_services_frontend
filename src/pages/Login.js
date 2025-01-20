import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../assets/Login.CSS'; // Import the CSS file
import LoginService from '../services/LoginService';

const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Hook to handle redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userName.trim() === '' || password.trim() === '') {
      setError('Please fill in both fields');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const data = await LoginService.login(userName, password);

      // Extract details from the response
      const { userId,role, token } = data;

      // Store the token
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      if (role?.length) {
        const userRole = role[0].role;
        switch (userRole) {
          case 'ROLE_ADMIN':
            navigate('/admin-dashboard');
            break;
          case 'ROLE_USER':
            navigate('/user-dashboard');
            break;
          default:
            navigate('/laundry-list');
            break;
        }
      } else {
        setError('No valid role found for the user.');
      }
    } catch (errMessage) {
      setError(errMessage);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={userName} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required/>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={isLoading}> {isLoading ? 'Logging in...' : 'Login'} </button>
        <p className="register-link">
      Don't have an account? <a href="/register">Register here</a>
    </p>
      </form>      
    </div>
  );
};

export default Login;
