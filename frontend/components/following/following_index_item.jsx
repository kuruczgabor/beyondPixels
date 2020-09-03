import React from 'react';
import { Link } from 'react-router-dom';

const FollowingIndexItem = props => {
    // debugger

    // if (!this.props) return null

    const userName = props.followingUser.userName

    return (
        <li>
            <div>
                <Link to={`/users/${props.followingUser.userId}`}>
                    {userName}                
                </Link>
            </div>
        </li>
    )
}

export default FollowingIndexItem;