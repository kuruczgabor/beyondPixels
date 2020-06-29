import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';



export const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
});

export const receivePhoto = photo => {
    debugger
    return {
        type: RECEIVE_PHOTO,
        photo
    }
};



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
    debugger
    return APIUtil.createPhoto(photo).then(
            photo => dispatch(receivePhoto(photo))
        )
};