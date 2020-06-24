import React from 'react';
import { Link } from 'react-router-dom';

const AuthHeader = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="auth-header">
            <ul>   
                <Link to="/"><li>Demo</li></Link>
                <Link to="/login"><li>Log in</li></Link>
                <Link to="/signup" id="header-signup-button"><li>Sign up</li></Link>
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
