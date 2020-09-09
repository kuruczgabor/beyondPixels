import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, resetErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Log in',
        navLink: <Link to="/signup">Sign up</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        demo: (user) => dispatch(login(user)),
        resetErrors: () => dispatch(resetErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
