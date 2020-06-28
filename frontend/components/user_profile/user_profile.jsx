import React from 'react';

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
                
            </div>
        )
    }

}

export default UserProfile;