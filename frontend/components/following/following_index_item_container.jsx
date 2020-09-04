import { connect } from 'react-redux';
import FollowingIndexItem from './following_index_item';
import { createFollowing, deleteFollowing } from '../../actions/following_actions';

const mapStateToProps = state => {
    // debugger
    return {
        currentUserId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        createFollowing: following => dispatch(createFollowing(following)),
        deleteFollowing: followingId => dispatch(deleteFollowing(followingId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowingIndexItem);