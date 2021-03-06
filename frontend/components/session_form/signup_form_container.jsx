import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, resetErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign up',
        navLink: <Link to="/login">Log in</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        demo: (user) => dispatch(login(user)),
        resetErrors: () => dispatch(resetErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
