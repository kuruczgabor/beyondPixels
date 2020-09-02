import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom'

class Splash extends Component {

    render() {
        return (

            <div>
                <div className="splash-main">
                    <div className="splash-welcome-message"> 
                        Share your world 
                        <br/>
                        through your own lenses
                        <p>Get inspired by incredible photos from diverse styles and genres around the world. We’re not guided by trends — simply great photography.</p>
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

                <div className="splash-join-community">
                    <h2>Join our photography community today</h2>
                    <p>
                        We want fresh, creative talent like you. Join our global network of 
                        like-minded creators to be inspired by incredible photos daily, and get rewarded for your talents.
                    </p>
                    <Link to="/signup" id="splash-join-signup-button">Sign up</Link>
                </div>

                <footer className="splash-footer">
                    <div className="splash-developer">
                        © 2020 beyondPixels
                    </div>
                    <ul>
                        <li><a href="https://github.com/kuruczgabor">GitHub</a></li>
                        <li><a href="https://www.gaborkurucz.com/">Portfolio</a></li>
                        <li><a href="https://www.linkedin.com/in/kurucz-gabor/">LinkedIn</a></li>
                        <li><a href="https://angel.co/u/gaborkurucz">AngelList</a></li>
                    </ul>
                </footer>

            </div>
        )
    }

}

export default Splash;

