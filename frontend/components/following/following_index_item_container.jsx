import { connect } from 'react-redux';
import FollowingIndexItem from './following_index_item';
import { createFollowing, deleteFollowing, fetchFollowings } from '../../actions/following_actions';
// import { fetchFollowings } from '../../util/following_api_util';

const mapStateToProps = state => {
    // debugger
    return {
        currentUserId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        fetchFollowings: () => dispatch(fetchFollowings()),
        createFollowing: following => dispatch(createFollowing(following)),
        deleteFollowing: followingId => dispatch(deleteFollowing(followingId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowingIndexItem);