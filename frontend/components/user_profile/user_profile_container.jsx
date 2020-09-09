import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';
import { fetchPhotos } from '../../actions/photo_actions';
import { fetchFollowings, createFollowing, deleteFollowing } from '../../actions/following_actions';
import { openModal, closeModal} from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        userId: parseInt(ownProps.match.params.userId),
        user: state.entities.users[ownProps.match.params.userId],
        photos: Object.values(state.entities.photos),
        followings: state.entities.followings.followings
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchPhotos: () => dispatch(fetchPhotos()),
        fetchFollowings: () => dispatch(fetchFollowings()),
        createFollowing: following => dispatch(createFollowing(following)),
        deleteFollowing: followingId => dispatch(deleteFollowing(followingId)),
        followersListButton: (
            <button onClick={() => dispatch(openModal('followers'))}>
                Followers
            </button>
        ),
        followeesListButton: (
            <button onClick={() => dispatch(openModal('followees'))}>
                Following
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile); 