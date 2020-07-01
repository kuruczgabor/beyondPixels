import { connect } from 'react-redux';
import React from 'react';

import { createPhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';
import { deletePhoto } from '../../util/photo_api_util';

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
        }
    };
};

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        uploadPhoto: photo => dispatch(createPhoto(photo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm)