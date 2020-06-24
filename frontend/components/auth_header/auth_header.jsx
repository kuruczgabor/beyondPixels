import React from 'react';
import { Link } from 'react-router-dom';

const AuthHeader = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="auth-header">
            <ul>   
                <li><Link to="/">Demo</Link></li>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
            </ul>
        </nav>
    );
    const personalGreeting = () => (
        <div>
            <h2>Hello, {currentUser.username}!</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default AuthHeader;
