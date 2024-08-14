import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserRegister.css';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate(); // Create navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)

    // Redirect to the login page after successful registration
    navigate('/user/login');
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <h2>Create An Account!</h2>
      </div>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        <p>
          Already have an account? <a href="/user/login">Login</a>
        </p>
        <button type="submit" className="register-btn">Register Now</button>
      </form>
    </div>
  );
};

export default Register;
