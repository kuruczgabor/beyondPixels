import React from 'react';
import PhotoIndexContainer from '../photo_index/photo_index_container'

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { user } = this.props;
        if (!user) return null;

        return (
            <div className="user-profile-env">
                <div className="user-profile-info">
                    {user.username}
                </div> 
                {/* <PhotoIndexContainer/> */}
            </div>
        )
    }

}

export default UserProfile;