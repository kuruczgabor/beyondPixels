import { 
    RECEIVE_PHOTOS,
    RECEIVE_PHOTO,
    REMOVE_PHOTO 
} from '../actions/photo_actions';

const photosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    // debugger
    switch(action.type) {
        case RECEIVE_PHOTOS:
            return action.photos;
        case RECEIVE_PHOTO:
            const newPhoto = { [action.photo.id]: action.photo };
            return Object.assign({}, oldState, newPhoto)
        case REMOVE_PHOTO:
            delete nextState[action.postId]
            return nextState
        default:
            return oldState;
    }
};

export default photosReducer;