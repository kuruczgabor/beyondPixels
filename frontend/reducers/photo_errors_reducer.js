import {
    RECEIVE_PHOTO_ERRORS,
    RECEIVE_RESET_PHOTO_ERRORS
} from '../actions/photo_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PHOTO_ERRORS:
            debugger
            return action.errors;
        case RECEIVE_RESET_PHOTO_ERRORS:
            return [];
        default:
            return state;
    }
}