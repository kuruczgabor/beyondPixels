import React, { isValidElement } from 'react';
import { Link } from 'react-router-dom';

class AuthHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

        const trigger = document.getElementById('profile-dropdown-trigger');
        const dropdown = document.getElementById('profile-dropdown');

        // // if (dropdown) {
        // //     document.addEventListener("click", function () {
        // //         debugger
        // //         dropdown.classList.remove('reveal')
        // //     }, false);
        // // }

        // if (trigger) {
        //     trigger.addEventListener("click", function (e) {
        //         dropdown.classList.add('reveal')

        //         document.addEventListener("click", function () {
        //             dropdown.classList.remove('reveal')
        //         }, false);
        //         e.stopPropagation();
        //     }, false);
        // }

        if (trigger) {
            trigger.addEventListener('click', () => {
                dropdown.classList.toggle('reveal')
            })
        }

        window.addEventListener('click', (e) => {
            // debugger
            if (!e.target.matches('#profile-dropdown-trigger-icon')) {
                let dropdown = document.getElementById('profile-dropdown');
                if (dropdown.classList.contains('reveal')) {
                    dropdown.classList.remove('reveal')
                }
            }
        })

    }

    componentDidUpdate(prevProps) {

        const dropdown = document.getElementById('profile-dropdown')
        if (dropdown) {
            dropdown.classList.remove('reveal')
        }

    }

    render() {

        const sessionLinks = !this.props.currentUser ? (
            <nav className="auth-header">
                <ul>
                    <Link to="/login"><li>Log in</li></Link>
                    <Link to="/signup" id="header-signup-button"><li>Sign up</li></Link>
                </ul>
            </nav>
        ) : null

        const signedInHeader = this.props.currentUser && this.props.logout ? (

            <nav className="signed-in-header" >

                <div id="profile-dropdown-trigger">

                    <div >
                        <i id="profile-dropdown-trigger-icon" className="fas fa-user"></i>
                    </div>
                    <ul id="profile-dropdown">
                        <Link to={`/users/${this.props.currentUser.id}`}><li>Profile</li></Link>
                        <button onClick={() => this.props.logout()} className="header-logout-button" ><li>Log Out</li></button>
                    </ul>
                </div>

                <Link to="/photos/new" id="header-upload-button"><li><i className="fas fa-arrow-up"></i>  Upload</li></Link>

            </nav>
        ) : null

        return (
            <div>
                {signedInHeader}
                {sessionLinks}
            </div>
        )

    }

};

export default AuthHeader;
