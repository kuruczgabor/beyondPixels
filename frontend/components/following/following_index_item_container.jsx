import { connect } from 'react-redux';
import FollowingIndexItem from './following_index_item';
import { createFollowing, deleteFollowing, fetchFollowings } from '../../actions/following_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        currentUserId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFollowings: () => dispatch(fetchFollowings()),
        createFollowing: following => dispatch(createFollowing(following)),
        deleteFollowing: followingId => dispatch(deleteFollowing(followingId)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowingIndexItem);