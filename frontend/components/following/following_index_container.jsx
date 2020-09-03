import { connect } from 'react-redux';
import FollowingIndex from './following_index';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        createFollowing: following => dispatch(createFollowing(following)),
        deleteFollowing: followingId => dispatch(deleteFollowing(followingId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowingIndex);