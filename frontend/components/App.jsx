import React from "react";
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import GreetingContainer from './auth_header/auth_header_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import UserProfileContainer from './user_profile/user_profile_container';
import UploadPhotoFormContainer from './photo_form/upload_photo_form_container';
import EditPhotoFormContainer from './photo_form/edit_photo_form_container';
// import PhotoAuthorShowContainer from './photo_show/photo_author_show_container';
import PhotoShowContainer from './photo_show/photo_show_container';
import PhotoIndexContainer from './photo_index/photo_index_container';
import HomeFeedContainer from './home_feed/home_feed_container';
import DiscoverContainer from './discover/discover_container';
import Splash from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import photo_index_container from "./photo_index/photo_index_container";

const App = () => (
    <div>
        <Modal />
        <header className="header" >
            <Link to="/home"><h1>beyondPixels</h1></Link>
            <Link to="/discover">Discover</Link>
            <GreetingContainer />
        </header>
        <Switch>
            
            {/* <Route path="/users/:userId" component={UserProfileContainer} /> */}

            <AuthRoute exact path="/discover" component={DiscoverContainer} />
            
            <AuthRoute exact path="/users/:userId" component={UserProfileContainer} />
            <ProtectedRoute exact path="/home" component={HomeFeedContainer} />
            <ProtectedRoute exact path="/photos/new" component={UploadPhotoFormContainer} />
            <ProtectedRoute exact path="/photos/:photoId/edit" component={EditPhotoFormContainer} />
            <AuthRoute exact path="/photos/:photoId" component={PhotoShowContainer} />
            
            <AuthRoute exact path="/" component={Splash} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />

            <Redirect to='/'/>
            <Route path='/' component={Splash} />
        </Switch>
    </div>
);

export default App;