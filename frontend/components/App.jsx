import React from "react";
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import GreetingContainer from './auth_header/auth_header_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import UserProfileContainer from './user_profile/user_profile_container';
import UploadPhotoFormContainer from './photo_form/upload_photo_form_container';
import EditPhotoFormContainer from './photo_form/edit_photo_form_container';
import PhotoShowContainer from './photo_show/photo_show_container';
import PhotoIndexContainer from './photo_index/photo_index_container';
import HomeFeedContainer from './home_feed/home_feed_container';
import Splash from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import photo_index_container from "./photo_index/photo_index_container";

const App = () => (
    <div>
        <Modal />
        <header className="header" >
            <Link to="/"><h1>beyondPixels</h1></Link>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/" component={Splash} />
            {/* <Route path="/users/:userId" component={UserProfileContainer} /> */}

            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/users/:userId" component={UserProfileContainer} />
            <Route exact path="/home" component={HomeFeedContainer} />
            <Route exact path="/photos/new" component={UploadPhotoFormContainer} />
            <Route exact path="/photos/:photoId/edit" component={EditPhotoFormContainer} />
            <Route exact path="/photos/:photoId" component={PhotoShowContainer} />

            <Redirect to='/'/>
        </Switch>
    </div>
);

export default App;