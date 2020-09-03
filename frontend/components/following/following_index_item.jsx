import React from 'react';
import { Link } from 'react-router-dom';

const FollowingIndexItem = props => {
    // debugger

    // if (!this.props) return null

    const userName = props.followingUser.userName
    // debugger

    return (
        <li>
            <div>
                {userName}
            </div>
        </li>
    )
}

export default FollowingIndexItem;