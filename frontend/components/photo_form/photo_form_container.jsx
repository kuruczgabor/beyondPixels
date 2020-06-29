import { connect } from 'react-redux';
import React from 'react';

import { createPhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const mapStateToProps = state => {
    debugger
    return {
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        uploadPhoto: photo => dispatch(createPhoto(photo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm)