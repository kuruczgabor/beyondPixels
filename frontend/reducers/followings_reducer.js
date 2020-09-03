import {
    RECEIVE_FOLLOWINGS,
    RECEIVE_FOLLOWING
} from '../actions/following_actions';

const followingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_FOLLOWINGS:
            return action.followings
        case RECEIVE_FOLLOWING:
            debugger
            const newFollowing = { [action.following.id]: action.following}
            return Object.assign({}, oldState, newFollowing)
        default:
            return oldState;
    }
};

export default followingsReducer;