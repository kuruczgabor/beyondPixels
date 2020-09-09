import { connect } from 'react-redux';

import { fetchPhotos } from '../../actions/photo_actions';
import { fetchFollowings } from '../../actions/following_actions';
import HomeFeed from './home_feed';

const mapStateToProps = state => {
    return {
        photos: Object.values(state.entities.photos),
        followings: state.entities.followings,
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchPhotos: () => dispatch(fetchPhotos()),
        fetchFollowings: () => dispatch(fetchFollowings())
    });
};



export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed);