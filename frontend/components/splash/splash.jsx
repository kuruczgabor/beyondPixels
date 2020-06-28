import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Splash extends Component {

    render() {
        return (

            <div>
                <div className="splash-main">
                    <div className="splash-welcome-message"> 
                        Share your world through your own lenses
                        <br/>
                        <Link to="/signup" id="splash-signup-button">Sign up</Link>
                    </div>
                    <p id="splash-background-author">Photo by Gabor Kurucz</p>
                </div>

                <div className="splash-content">
                    <p className="splash-content-title">What makes us different</p>
                    <ul className="splash-content-list">
                        <li>
                            <p className="splash-icon" id="splash-icon-1"></p>
                            <br/>
                            Grow as a photographer
                            <p>Share your photos to the community, and receive invaluable and insightful feedback.</p>
                        </li>
                        <li>
                            <p className="splash-icon" id="splash-icon-2"></p>
                            <br/>
                            Build your career
                            <p>Display your services, showcase workshops, and create galleries to highlight your work.</p>
                        </li>
                        <li>
                            <p className="splash-icon" id="splash-icon-3"></p>
                            <br/>
                            Make connections
                            <p>Meet friends, mentors, collaborative partners, and potential clients.</p>
                        </li>

                    </ul>
                </div>

            </div>
        )
    }

}

export default Splash;

