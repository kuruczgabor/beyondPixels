import { connect } from 'react-redux';
import React from 'react';

import { createPhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';
import { deletePhoto } from '../../util/photo_api_util';
import { resetPhotoErrors } from '../../actions/photo_actions'

const mapStateToProps = state => {
    // debugger
    return {
        currentUserId: state.session.id,
        formType: 'Upload',
        photo: {
            title: '',
            description: '',
            photoFile: null,
            photoUrl: null
        },
        errors: state.errors.photos
    };
};

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        uploadPhoto: photo => dispatch(createPhoto(photo)),
        resetPhotoErrors: () => dispatch(resetPhotoErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm)