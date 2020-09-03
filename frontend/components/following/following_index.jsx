import React from 'react';
import FollowingIndexItem from './following_index_item';

class FollowingIndex extends React.Component {

    render() {
        // const followers = this.props.followers ? this.props.followers : null
        // const followees = this.props.followees ? this.props.followees : null

        let followingUsers;
        if (this.props.followers) followingUsers = this.props.followers;
        if (this.props.followees) followingUsers = this.props.followees;

        // debugger
        
        return (
            <ul>
                {
                    Object.entries(followingUsers).map(followingUser => {
                        // debugger
                        return (
                            <FollowingIndexItem
                                followingUser={followingUser[1]}
                                key={followingUser[1].followingId}
                            />
                        )
                    })
                }
            </ul>
        )
    }

}

export default FollowingIndex;