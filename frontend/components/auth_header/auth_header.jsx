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
    const signedInHeader = () => (
        <nav className="signed-in-header">
                <ul>
                    <Link to="/"><li><i className="fas fa-user"></i></li></Link>
                    {/* <li>Hello, {currentUser.username}!</li> */}
                    {/* <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                    <button onClick={logout}><li>Log Out</li></button>
                    <Link to="/" id="header-upload-button"><li><i class="fas fa-arrow-up"></i> Upload</li></Link>
                </ul>
        </nav>
    );

    return currentUser ? signedInHeader() : sessionLinks();
};

export default AuthHeader;


