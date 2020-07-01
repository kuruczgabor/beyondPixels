import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';

const mapStateToProps = state => {
    // debugger
    return {
        photos: Object.values(state.entities.photos)
    }

};

const mapDispatchToProps = dispatch => {

    return {
        fetchPhotos: () => dispatch(fetchPhotos())
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex); 