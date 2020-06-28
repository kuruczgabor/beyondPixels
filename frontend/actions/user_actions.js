import * as ApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";



export const receiveUser = data => ({
    type: RECEIVE_USER,
    data
});



export const fetchUser = userId => dispatch => (
    ApiUtil.fetchUser(userId).then(
        data => dispatch(receiveUser(data))
    )
);

