import { connect } from 'react-redux';
import React from 'react';

import { createPhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';
import { deletePhoto, updatePhoto, fetchPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    debugger
    return {
        currentUserId: state.session.id,
        formType: 'Edit',
        photo: state.entities.photos[ownProps.match.params.photoId]
    };
};

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        deletePhoto: photoId => dispatch(deletePhoto(photoId)),
        updatePhoto: photo => dispatch(updatePhoto(photo)),
        fetchPhoto: photoId => dispatch(fetchPhoto(photoId))
    };
};

class EditPhotoForm extends React.Component {

    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.photoId);
    }

    render() {
        if (!this.props.photo) {
            return null
        }
        return (
            <PhotoForm
                currentUserId={this.props.currentUserId}
                formType={this.props.formType}
                photo={this.props.photo}
                deletePhoto={this.props.deletePhoto}
                updatePhoto={this.props.updatePhoto}
            />  
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EditPhotoForm)