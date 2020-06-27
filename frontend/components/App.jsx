import React from "react";
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import GreetingContainer from './auth_header/auth_header_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal'

const App = () => (
    <div>
        <Modal />
        <header className="header" >
            <Link to="/"><h1>beyondPixels</h1></Link>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />

            <Redirect to='/'/>
        </Switch>
    </div>
);

export default App;