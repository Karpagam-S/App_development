import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserLogin.css'; // Ensure this CSS file is present
import './UserRegister.css'; // Ensure this CSS file is present

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Create navigate function

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here

        // Redirect to home page after successful login
        navigate('/');
    };

    return (
        <div className="login-container">
            <header className="login-header">
                <b><h1>User Login</h1></b>
            </header>
            <main className="login-main">
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">Login</button>
                    <div className="login-options">
                        <a href="/user-register" className="link">Create account?</a>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default UserLogin;
