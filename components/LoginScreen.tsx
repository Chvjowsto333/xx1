/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface LoginScreenProps {
    onLogin: () => void;
}

const LoginScreen = ({ onLogin }: LoginScreenProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            onLogin();
        } else {
            setError('Invalid credentials');
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1>Flash UI</h1>
                    <div className="login-badge">Enterprise Dashboard</div>
                </div>
                <p className="login-subtitle">Sign in to access your workspace</p>
                
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    {error && <div className="login-error">{error}</div>}
                    
                    <button type="submit" className="login-button">
                        Enter Dashboard
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;