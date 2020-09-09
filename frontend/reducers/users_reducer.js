import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { currentUser: action.currentUser });
        case RECEIVE_USER:
            const newUser = { [action.user.id]: action.user };
            return Object.assign({}, oldState, newUser);
        default:
            return oldState;
    }
};

export default usersReducer;