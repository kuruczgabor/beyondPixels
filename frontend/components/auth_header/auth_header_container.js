import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import AuthHeader from './auth_header';

const mapStateToProps = ( state, ownProps ) => {
    return {
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthHeader);
