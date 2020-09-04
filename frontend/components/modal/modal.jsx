import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import PhotoIndexContainer from '../photo_index/photo_index_container';
import FollowingIndexContainer from '../following/following_index_container';

function Modal({ modal, closeModal, userId }) {
    if (!modal) {
        return null;
    }
    let component;

    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'followers':
            component = <FollowingIndexContainer indexType='followers' userId={userId} />;
            break;
        case 'followees':
            component = <FollowingIndexContainer indexType='followees' userId={userId} />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        modal: state.ui.modal,
        userId: parseInt(ownProps.location.pathname.split('/')[ownProps.location.pathname.split('/').length - 1])
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));