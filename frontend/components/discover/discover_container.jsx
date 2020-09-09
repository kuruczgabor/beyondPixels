import { connect } from 'react-redux';

import { fetchPhotos } from '../../actions/photo_actions';
import Discover from './discover';



const mapStateToProps = state => {
    return {
        photos: Object.values(state.entities.photos),
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchPhotos: () => dispatch(fetchPhotos()),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);