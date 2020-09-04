import React from 'react';
import FollowingIndexItemContainer from './following_index_item_container';

class FollowingIndex extends React.Component {

    componentDidUpdate(prevProps) {

        // debugger
        // if (this.props.followings !== prevProps.followings) {
        //     this.props.fetchFollowings()
        // }
        
        // this.props.fetchFollowings()
        // if (prevProps.followings) {
        //     Object.values(prevProps.followings).forEach(following => {
        //         if (!following.follower_username) {
        //             this.props.fetchFollowings()
        //         }
        //     })
        // }
    }

    render() {

        let followButton = null;
        let followerNumber = 0;
        let followeeNumber = 0;
        let followers = {};
        let followees = {};

        let isAlreadyFollowing = false;
        let currentFollowingId;
        let that = this;

        // if (!this.props.followings) return null
        if (this.props.followings) {
            Object.entries(this.props.followings).forEach((following) => {
                // debugger
                if (following[1]["follower_id"] === this.props.currentUserId && following[1]["followee_id"] === this.props.userId) {
                    isAlreadyFollowing = true
                    currentFollowingId = parseInt(following[0])
                }
                // if (following[1]["follower_id"] === this.props.userId) followeeNumber++
                // if (following[1]["followee_id"] === this.props.userId) followerNumber++
                // debugger
                if (following[1]["follower_id"] === that.props.userId) {
                    // debugger
                    followeeNumber++
                    // followees[following[1]["followee_id"]] = following[1]
                    followees[following[0]] = {
                        followingId: following[1].id,
                        userId: following[1].followee_id,
                        userName: following[1].followee_username
                    }
                }

                if (following[1]["followee_id"] === that.props.userId) {
                    // debugger
                    followerNumber++
                    // followers[following[1]["follower_id"]] = following[1]
                    followers[following[0]] = {
                        followingId: following[1].id,
                        userId: following[1].follower_id,
                        userName: following[1].follower_username
                    }
                }
            })
        }


        // const followers = this.props.followers ? this.props.followers : null
        // const followees = this.props.followees ? this.props.followees : null

        let followingUsers = null;
        if (this.props.indexType === "followers") followingUsers = followers;
        if (this.props.indexType === "followees") followingUsers = followees;
        // if (followees) followingUsers = this.props.followees;

        const followings = this.props.followings ? this.props.followings : null
        // debugger
        // if (followingUsers === null) return null
        
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