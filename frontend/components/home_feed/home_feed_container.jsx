import { connect } from 'react-redux';

import { fetchPhotos } from '../../actions/photo_actions';
import HomeFeed from './home_feed';



const mapStateToProps = state => {
    debugger
    return {
        photos: Object.values(state.entities.photos),
    };
};

const mapDispatchToProps = dispatch => {
    debugger
    return ({
        fetchPhotos: () => dispatch(fetchPhotos()),
    });
};



export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed);