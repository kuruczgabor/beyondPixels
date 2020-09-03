import {
    RECEIVE_FOLLOWINGS,
    RECEIVE_FOLLOWING,
    REMOVE_FOLLOWING
} from '../actions/following_actions';

const followingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_FOLLOWINGS:
            return action.followings
        case RECEIVE_FOLLOWING:
            nextState.followings[action.following.id] = action.following
            return nextState
        case REMOVE_FOLLOWING:
            delete nextState.followings[action.followingId]
            return nextState
        default:
            return oldState;
    }
};

export default followingsReducer;