import { connect } from 'react-redux';

import { fetchPhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';

const mapStateToProps = (state, ownProps) => {
    return {
        photo: state.entities.photos[ownProps.match.params.photoId]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPhoto: photoId => dispatch(fetchPhoto(photoId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);  