import { 
    RECEIVE_PHOTOS,
    RECEIVE_PHOTO 
} from '../actions/photo_actions';

const photosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // debugger
    switch(action.type) {
        case RECEIVE_PHOTOS:
            return action.photos;
        case RECEIVE_PHOTO:
             const newPhoto = { [action.photo.id]: action.photo };
             return Object.assign({}, oldState, newPhoto)
        default:
            return oldState;
    }
};

export default photosReducer;