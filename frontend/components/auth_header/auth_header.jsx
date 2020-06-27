import React, { isValidElement } from 'react';
import { Link } from 'react-router-dom';
// import ProfileDropdown from './profile_dropdown'

const AuthHeader = ({ currentUser, logout }) => {

    const sessionLinks = () => (
        <nav className="auth-header">
            <ul>   
                {/* <Link to="/"><li>Demo</li></Link> */}
                <Link to="/login"><li>Log in</li></Link>
                <Link to="/signup" id="header-signup-button"><li>Sign up</li></Link>
            </ul>
        </nav>
    );

    const signedInHeader = () => (

        <nav className="signed-in-header" >

            <div id="profile-dropdown-trigger" onClick={revealDropdown}>
                <div >
                    <i className="fas fa-user"></i>
                </div>
                <ul id="profile-dropdown">
                    <li>FakeLink1</li>
                    <li>FakeLink2</li>
                    <li>FakeLink3</li>
                    <button onClick={logout} className="header-logout-button" ><li>Log Out</li></button>
                </ul>
            </div>

            <Link to="/" id="header-upload-button"><li><i className="fas fa-arrow-up"></i>  Upload</li></Link>

        </nav>
    )

    // const revealDropdown = () => {
    //     $('#profile-dropdown').toggleClass('reveal')
    // }

    const revealDropdown = () => {
        $(document.body)
        $('#profile-dropdown').addClass('reveal');
        $('#profile-dropdown-trigger').off('click', revealDropdown);
        $(document).on('click', hideDropdown);
    };

    const hideDropdown = () => {
        $('#profile-dropdown').removeClass('reveal');
        $('#profile-dropdown-trigger').on('click', revealDropdown);
        $(document).off('click', hideDropdown);
    };

    return currentUser ? signedInHeader() : sessionLinks();

};

export default AuthHeader;
