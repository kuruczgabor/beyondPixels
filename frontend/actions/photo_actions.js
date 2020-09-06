import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';
export const RECEIVE_RESET_PHOTO_ERRORS = 'RECEIVE_RESET_PHOTO_ERRORS';


export const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
});

export const receivePhoto = photo => {
    return {
        type: RECEIVE_PHOTO,
        photo
    }
};

export const removePhoto = photoId => {
    return {
        type: REMOVE_PHOTO,
        photoId
    }
}

export const receivePhotoErrors = errors => {
    return {
        type: RECEIVE_PHOTO_ERRORS,
        errors
    }
}

export const resetPhotoErrors = () => ({
    type: RECEIVE_RESET_PHOTO_ERRORS
})


export const fetchPhotos = () => dispatch => (
    APIUtil.fetchPhotos().then(
        photos => dispatch(receivePhotos(photos))
    )
);

export const fetchPhoto = photoId => dispatch => (
    APIUtil.fetchPhoto(photoId).then(
        photo => dispatch(receivePhoto(photo))
    )
);

export const createPhoto = photo => dispatch => {
    return APIUtil.createPhoto(photo).then(
        photo => dispatch(receivePhoto(photo)),
        err => dispatch(receivePhotoErrors(err.responseJSON))
    )
};

export const deletePhoto = photoId => dispatch => {
    return APIUtil.deletePhoto(photoId).then(
        () => dispatch(removePhoto(photoId)),
        err => dispatch(receivePhotoErrors(err.responseJSON))
    )
};

export const updatePhoto = photo => dispatch => {
    return APIUtil.updatePhoto(photo).then(
        photo => dispatch(receivePhoto(photo)),
        err => dispatch(receivePhotoErrors(err.responseJSON))
    )
};