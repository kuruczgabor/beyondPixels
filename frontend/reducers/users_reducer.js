import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';


const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // let nextState = merge({}, oldState)
    let nextState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USER:
            return merge({}, action.data.users, nextState);
            // const newUser = { [action.user.id]: action.user };
            // return Object.assign({}, oldState, newUser);
        default:
            return oldState;
    }
};

export default usersReducer;