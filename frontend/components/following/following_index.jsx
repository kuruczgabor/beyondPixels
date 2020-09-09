import React from 'react';
import FollowingIndexItemContainer from './following_index_item_container';

class FollowingIndex extends React.Component {

    render() {

        let followButton = null;
        let followerNumber = 0;
        let followeeNumber = 0;
        let followers = {};
        let followees = {};

        let isAlreadyFollowing = false;
        let currentFollowingId;
        let that = this;

        if (this.props.followings) {
            Object.entries(this.props.followings).forEach((following) => {
                if (following[1]["follower_id"] === this.props.currentUserId && 
                    following[1]["followee_id"] === this.props.userId) {
                    isAlreadyFollowing = true
                    currentFollowingId = parseInt(following[0])
                }
                if (following[1]["follower_id"] === that.props.userId) {
                    followeeNumber++
                    followees[following[0]] = {
                        followingId: following[1].id,
                        userId: following[1].followee_id,
                        userName: following[1].followee_username
                    }
                }

                if (following[1]["followee_id"] === that.props.userId) {
                    followerNumber++
                    followers[following[0]] = {
                        followingId: following[1].id,
                        userId: following[1].follower_id,
                        userName: following[1].follower_username
                    }
                }
            })
        }

        let followingUsers = null;
        if (this.props.indexType === "followers") followingUsers = followers;
        if (this.props.indexType === "followees") followingUsers = followees;

        const followings = this.props.followings ? this.props.followings : null
                
        return (
            <div className="following-modal">
                <h2>{this.props.indexType === "followers" ? "Followers" : "Following"}</h2>
                <ul className="following-modal-list">
                    {
                        Object.entries(followingUsers).map(followingUser => {
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
            </div>

        )
    }

}

export default FollowingIndex;