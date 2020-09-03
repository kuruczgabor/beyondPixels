import * as APIUtil from '../util/following_api_util';

export const RECEIVE_FOLLOWINGS = 'RECEIVE_FOLLOWINGS';
export const RECEIVE_FOLLOWING = 'RECEIVE_FOLLOWING';

export const receiveFollowings = followings => ({
    type: RECEIVE_FOLLOWINGS,
    followings
});

export const receiveFollowing = following => ({
    type: RECEIVE_FOLLOWING,
    following
});

export const fetchFollowings = () => dispatch => (
    APIUtil.fetchFollowings().then(
        followings => dispatch(receiveFollowings(followings))
    )
);

export const createFollowing = (following) => dispatch => (
    APIUtil.createFollowing(following).then(
        following => dispatch(receiveFollowing(following))
    )
);