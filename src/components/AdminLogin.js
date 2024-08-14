import React, { useState } from 'react';
import './AdminLogin.css'; // Ensure this CSS file is present

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="login-container">
            <header className="login-header">
                <h1>Welcome to the Owner Portal</h1>
            </header>
            <main className="login-main">
                <form className="login-form" onSubmit={handleSubmit}>
                    <p className="login-info">
                        If you haven't logged in with a password before, create your password now
                    </p>
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
                        <a href="#" className="link">Create a password</a> | 
                        <a href="#" className="link"> Forgot your password?</a>
                    </div>
                </form>
            </main>
            <footer className="login-footer">
                <p>HCM Property Management</p>
                <p>27 Mauchly, Suite 206</p>
                <p>Irvine, CA 92618</p>
                <p>(949) 734-7309</p>
               
            </footer>
        </div>
    );
};

export default AdminLogin;
