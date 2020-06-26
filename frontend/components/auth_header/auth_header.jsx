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
        <div id="profilepointer" onClick={triggerDropdown}>
            <div >
                <i className="fas fa-user-alt fa-lg"></i>
            </div>
            <ul id="profiledropdown">
                <li><Link to={`/api/users/user.id`} className="profileLink">Profile</Link></li>
                <li><Link to={`/api/users/`} className="profileLink">Galleries</Link></li>
                <li><Link to={`/api/users/`} className="profileLink">Liked photos</Link></li>
                <br />
                <li onClick={logout}>Logout</li>
            </ul>
        </div>
    )

    const triggerDropdown = () => {
        $('#profiledropdown').toggleClass('trigger')
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

        // const revealDropdown = () => {
    //     $('#profile-dropdown').addClass('reveal');
    //     $(document.body).removeClass('reveal')
    // }

    // const removeDropdown = () => {

    // }


    // ==================



{/* <nav className="signed-in-header">
    <ul>

        <Link to="/"><li id="profile-dropdown-trigger" className="fas fa-user" ></li>

            <ul id="profile-dropdown" className="profile-dropdown hidden">
                <li>Profile</li>
                <button onClick={logout}><li>Log Out</li></button>
            </ul>
        </Link>



        <Link to="/" id="header-upload-button"><li><i className="fas fa-arrow-up"></i> Upload</li></Link>
    </ul>
</nav> */}


// ===================

// const signedInHeader = () => (

//     <nav className="signed-in-header">

//         <Link id="profile-dropdown-trigger" to="/" className="fas fa-user">

//             <ul id="profile-dropdown" className="profile-dropdown">
//                 <li>Hello</li>
//             </ul>

//         </Link>

//         <Link to="/"> Upload</Link>

//     </nav>

// );

// const triggerDropdown = () => {
//     $('#profile-dropdown').toggleClass('reveal')
// }

// // const revealDropdown = () => {
// //     $(document.body)
// //     $('#profile-dropdown').addClass('hidden');
// //     // $('#profile-dropdown-trigger').off('click', revealDropdown);
// //     $(document).on('click', hideDropdown);
// // };

// // const hideDropdown = () => {
// //     $('#profile-dropdown').removeClass('hidden');
// //     // $('#profile-dropdown-trigger').on('click', revealDropdown);
// //     $(document).off('click', hideDropdown);
// // };

// // $(() => $('#profile-dropdown-trigger').on('click', revealDropdown));

// return currentUser ? signedInHeader() : sessionLinks();
// };

// export default AuthHeader;