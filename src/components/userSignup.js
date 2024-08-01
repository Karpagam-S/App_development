// UserSignup.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserAuth';
import './UserAuth.css';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(UserContext); // Import and use UserContext if needed

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/users', {
        email,
        password,
        phone,
      });

      if (response.status === 201) {
        alert('Account created successfully!');
        // Optional: Automatically log in the user after successful signup
        // login(response.data); // Uncomment if the response contains user data
        navigate('/user-login');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Failed to create account');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSignup} className="auth-form">
        <h2>User Signup</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Create Account</button>
        <p>Already have an account? <a href="/user-login">Login</a></p>
      </form>
    </div>
  );
};

export default UserSignup;
