import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    demoLogin(e) {
        e.preventDefault();
        const user = { username: "demouser", password: "password" }
        this.props.demo(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    }

    sessionFormTopChooser() {
        if (this.props.formType === "Sign up") {
            return (
                <p className="session-form-top">Join beyondPixels</p>
            ) 
        } else {
            return (
                <p className="session-form-top">Log in to beyondPixels</p>
            )
        }
    }

    sessionFormBottomChooser() {
        if (this.props.formType === "Sign up") {
            return (
                <div className="session-form-bottom">Already have an account?  
                    <p className="session-form-bottom-link">{this.props.navLink}</p>
                </div>
            ) 
        } else {
            return (
                <div className="session-form-bottom">Don't have an account?  
                    <p className="session-form-bottom-link">{this.props.navLink}</p>
                </div>
            )
        }
    }

    errorPopUp() {
        if (this && this.props.formType === "Log in" && this.props.errors.length > 0) {
            return (
                <div className='error-popup'>
                    {this.renderErrors()}
                </div>
            )
        } else {
            return null
        }
    }

    errorUnderUserNameInput() {
        if (this.props.formType ===  "Sign up") {
            return (this.props.errors.map((error, i) => (
                error.includes('Username') ? error : ''
            )))
        }
    }

    errorUnderPasswordInput() {
        if (this.props.formType === "Sign up") {
            return (this.props.errors.map((error, i) => (
                error.includes('Password') ? error : ''
            )))
        }
    }

    componentDidMount() {
        this.props.resetErrors();
    }
    
    render() {

        return (

            <div className="session-env">

                <div>
                    {this.errorPopUp()}
                </div>

                <div className="session-form-container">

                    {this.sessionFormTopChooser()}

                    <form onSubmit={this.handleSubmit} className="session-form">

                        <label>Username
                        <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </label>
                        
                        <div id="username-session-error">
                            {this.errorUnderUserNameInput()}
                        </div>

                        <label>Password
                        <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>

                        <div id="password-session-error">
                            {this.errorUnderPasswordInput()}
                        </div>

                        <input type="submit" value={this.props.formType} onClick={this.errorPopUp} />

                        <input type="submit" value="Demo Login" onClick={this.demoLogin} />

                    </form>

                    {this.sessionFormBottomChooser()}

                </div>

            </div>

        );
    }

};

export default SessionForm;



