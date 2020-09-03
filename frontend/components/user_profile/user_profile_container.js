import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';
import { fetchPhotos } from '../../actions/photo_actions';
import { fetchFollowings, createFollowing } from '../../actions/following_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
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
        createFollowing: following => dispatch(createFollowing(following))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile); 