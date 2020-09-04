import { connect } from 'react-redux';
import FollowingIndex from './following_index';
import {createFollowing, deleteFollowing} from '../../actions/following_actions';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        createFollowing: following => dispatch(createFollowing(following)),
        deleteFollowing: followingId => dispatch(deleteFollowing(followingId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowingIndex);