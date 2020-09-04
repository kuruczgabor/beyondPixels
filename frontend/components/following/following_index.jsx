import React from 'react';
import FollowingIndexItemContainer from './following_index_item_container';

class FollowingIndex extends React.Component {

    render() {
        // const followers = this.props.followers ? this.props.followers : null
        // const followees = this.props.followees ? this.props.followees : null

        let followingUsers;
        if (this.props.followers) followingUsers = this.props.followers;
        if (this.props.followees) followingUsers = this.props.followees;

        const followings = this.props.followings ? this.props.followings : null
        
        return (
            <ul>
                {
                    Object.entries(followingUsers).map(followingUser => {
                        // debugger
                        return (
                            <FollowingIndexItemContainer
                                followingUser={followingUser[1]}
                                key={followingUser[1].followingId}
                                followings={followings}
                            />
                        )
                    })
                }
            </ul>
        )
    }

}

export default FollowingIndex;