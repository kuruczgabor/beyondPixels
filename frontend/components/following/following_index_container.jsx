import React from 'react';
import { connect } from 'react-redux';
import FollowingIndex from './following_index';
import { createFollowing, deleteFollowing, fetchFollowings} from '../../actions/following_actions';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        userId: ownProps.userId,
        user: state.entities.users[ownProps.userId],
        followings: state.entities.followings.followings,
        indexType: ownProps.indexType
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFollowings: () => dispatch(fetchFollowings()),
        createFollowing: following => dispatch(createFollowing(following)),
        deleteFollowing: followingId => dispatch(deleteFollowing(followingId)),
        followersModal: (
            <button onClick={() => dispatch(openModal('followers'))}>
                FOLLOWERS
            </button>
        ),
        followeesModal: (
            <button onClick={() => dispatch(openModal('followees'))}>
                FOLLOWEES
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowingIndex);