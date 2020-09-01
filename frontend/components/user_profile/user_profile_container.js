import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';
import { fetchPhotos } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        user: state.entities.users[ownProps.match.params.userId],
        photos: Object.values(state.entities.photos)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchPhotos: () => dispatch(fetchPhotos()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile); 