// UserLogin.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserAuth';
import './UserAuth.css';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch all users from the backend
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;

      // Debugging information
      console.log('Fetched users:', users);

      // Find a user with matching email and password
      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        login(user); // Update context with user data
        alert('Login successful!');
        navigate('/user-home'); // Navigate to user home page
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      alert('An error occurred during login');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin} className="auth-form">
        <h2>User Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/user-signup">Create account</a></p>
      </form>
    </div>
  );
};

export default UserLogin;
