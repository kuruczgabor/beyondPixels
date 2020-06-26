import React from 'react';
import { Link } from 'react-router-dom';
// import ProfileDropdown from './profile_dropdown'

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




                <Link to="/"><li id="profile-pointer" className="fas fa-user" onClick={revealDropdown}></li>
                    <ul id="profile-dropdown" >
                        <li className="profile-dropdown-item">Hello</li>
                        <button onClick={logout}><li className="profile-dropdown-item">Log Out</li></button>
                    </ul>
                </Link>




                <Link to="/" id="header-upload-button"><li><i className="fas fa-arrow-up"></i> Upload</li></Link>
            </ul>
        </nav>
    );

    const revealDropdown = () => {
        $('#profile-dropdown').toggleClass('reveal')
    }

    return currentUser ? signedInHeader() : sessionLinks();
};

export default AuthHeader;


// const AuthHeader = ({ currentUser, logout }) => {

//     const sessionLinks = () => (
//         <nav className="auth-header">
//             <ul>
//                 <Link to="/"><li>Demo</li></Link>
//                 <Link to="/login"><li>Log in</li></Link>
//                 <Link to="/signup" id="header-signup-button"><li>Sign up</li></Link>
//             </ul>
//         </nav>
//     );

//     const signedInHeader = () => (
//         <nav className="signed-in-header">
//             {/* <ProfileDropdown/> */}
//             <ul>
//                 <Link to="/"><li id="profile-dropdown" className="fas fa-user profile-dropdown hidden"></li></Link>
//                 {/* <li>Hello, {currentUser.username}!</li> */}
//                 {/* <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
//                 <button onClick={logout}><li>Log Out</li></button>
//                 <Link to="/" id="header-upload-button"><li><i className="fas fa-arrow-up"></i> Upload</li></Link>
//             </ul>
//         </nav>
//     );

//     return currentUser ? signedInHeader() : sessionLinks();
// };

{/* <li className="fas fa-user"></li>
    <div className="fas fa-user" onClick={revealDropdown}>
        <i ></i>
    </div>
    <ul id="profile-dropdown">
        {/* <li>Hello, {currentUser.username}!</li> */}
        {/* <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    //     <button onClick={logout}><li>Log Out</li></button>
    // </ul>
    // <Link to="/" id="header-upload-button"><li><i className="fas fa-arrow-up"></i> Upload</li></Link> */}
