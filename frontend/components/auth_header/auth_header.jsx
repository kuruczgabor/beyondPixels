import React, { isValidElement } from 'react';
import { Link } from 'react-router-dom';

class AuthHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

        // debugger

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

        if (dropdown && dropdown.classList.value !== "eventlistener-added") {
            if (trigger) {
                trigger.addEventListener('click', () => {
                    dropdown.classList.toggle('reveal')
                    dropdown.classList.add('eventlistener-added')
                })
            }

            window.addEventListener('click', (e) => {
                // debugger
                if (!e.target.matches('#profile-dropdown-trigger-icon')) {
                    let dropdown = document.getElementById('profile-dropdown');
                    if (dropdown && dropdown.classList.contains('reveal')) {
                        dropdown.classList.remove('reveal')
                    }
                }
            })
        }



    }

    componentDidUpdate(prevProps) {

        // debugger

        // // console.log('hello')
        const trigger = document.getElementById('profile-dropdown-trigger');
        const dropdown = document.getElementById('profile-dropdown')

        // // if (dropdown) {
        // //     dropdown.classList.remove('reveal')
        // // }
        // debugger

        if (dropdown && dropdown.classList.value !== "eventlistener-added") {
            if (trigger) {
                trigger.addEventListener('click', () => {
                    dropdown.classList.toggle('reveal')
                    dropdown.classList.add('eventlistener-added')
                })
            }

            window.addEventListener('click', (e) => {
                // debugger
                if (!e.target.matches('#profile-dropdown-trigger-icon')) {
                    let dropdown = document.getElementById('profile-dropdown');
                    if (dropdown && dropdown.classList.contains('reveal')) {
                        dropdown.classList.remove('reveal')
                    }
                }
            })
        }

    }

    // logOut() {
    //     debugger
    //     this.props.logout()
    // }

    render() {

        const sessionLinks = !this.props.currentUserId ? (
            <nav className="auth-header">
                <ul>
                    <Link to="/login"><li>Log in</li></Link>
                    <Link to="/signup" id="header-signup-button"><li>Sign up</li></Link>
                </ul>
            </nav>
        ) : null

        const signedInHeader = this.props.currentUserId ? (

            <nav className="signed-in-header" >

                <div id="profile-dropdown-trigger">

                    <div >
                        <i id="profile-dropdown-trigger-icon" className="fas fa-user"></i>
                    </div>
                    <ul id="profile-dropdown">
                        <Link to={`/users/${this.props.currentUserId}`}><li>Profile</li></Link>
                        {/* <button onClick={() => this.props.logout()} className="header-logout-button" ><li>Log Out</li></button> */}
                        <Link to={'/'} onClick={() => this.props.logout()} className="header-logout-button" ><li>Log out</li></Link>

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
