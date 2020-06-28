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
                    
                </div>

            </div>
        )
    }

}

export default Splash;