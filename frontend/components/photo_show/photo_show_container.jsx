import { connect } from 'react-redux';

import { fetchPhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        photo: state.entities.photos[ownProps.match.params.photoId],
        photoAuthor: state.entities.users['1']
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
        fetchUser: userId => dispatch(fetchUser(userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);  