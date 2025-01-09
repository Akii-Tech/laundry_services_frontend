import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../assets/Login.CSS'; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Hook to handle redirection

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setError('Please fill in both fields');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      // Send POST request to the login API
      const response = await axios.post('http://localhost:8082/login', {
        username,
        password
      });

      // Handle successful login (response contains user data and token)
      if (response.status === 200) {
        const { role, token } = response.data;

        // Store the token in localStorage (or sessionStorage for session-based login)
        localStorage.setItem('token', token);

        // Redirect based on role
        if (role && role[0].role === 'ADMIN') {
          navigate('/admin-dashboard'); // Redirect to admin dashboard
        } else if(role && role[0].role === 'USER'){
          navigate('/user-dashboard'); // Redirect to user dashboard
        }else{
          navigate('/laundry-list') // Redirect to enduser dashbord
        }
      }
    } catch (err) {
      // Handle errors (e.g., invalid credentials)
      setError('Invalid credentials or something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        <p className="register-link">
      Don't have an account? <a href="/register">Register here</a>
    </p>
      </form>
      
    </div>
  );
};

export default Login;
