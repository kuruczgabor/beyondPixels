import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav>
            <Link to="/login">Log in</Link>
            <br/>
            <Link to="/signup">Sign up</Link>
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

export default Greeting;
