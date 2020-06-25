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
        <nav className="signed-in-header">
            <ul>
                <li>Hello, {currentUser.username}!</li>
                <button onClick={logout}><li>Log Out</li></button>
            </ul>
        </nav>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default AuthHeader;



