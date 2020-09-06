import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import AuthHeader from './auth_header';

const mapStateToProps = ({ session, entities: { users } }) => {
    // debugger
    return {
        currentUser: users[session.id],
        currentUserId: session.id
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthHeader);
