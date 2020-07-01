import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';


export const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
});

export const receivePhoto = photo => {
    // debugger
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
    // debugger
    return APIUtil.createPhoto(photo).then(
        photo => dispatch(receivePhoto(photo))
    )
};

export const deletePhoto = photoId => dispatch => {
    return APIUtil.deletePhoto(photoId).then(
        () => dispatch(removePhoto(photoId))
    )
};

export const updatePhoto = photo => dispatch => {
    debugger
    return APIUtil.updatePhoto(photo).then(
        photo => dispatch(receivePhoto(photo))
    )
};