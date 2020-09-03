import React from 'react';
import PhotoIndexContainer from '../photo_index/photo_index_container';
import PhotoIndexItem from '../photo_index/photo_index_item';
import FollowingIndexContainer from '../following/following_index_container';

class UserProfile extends React.Component {

    constructor(props) {
        super(props);

        this.handleFollow = this.handleFollow.bind(this)
    }

    componentDidMount() {
        // debugger
        this.props.fetchUser(this.props.userId)
        this.props.fetchPhotos();
        this.props.fetchFollowings();
    }

    handleFollow(e) {
        e.preventDefault();
        const following = { 
            following: {
                follower_id: this.props.currentUserId,
                followee_id: this.props.userId
            }
        }
        this.props.createFollowing(following)
    }

    render () {
        const { user } = this.props;
        if (!user) return null;

        const photos = this.props.photos.map(photo => {
            if (photo.author_id === this.props.user.id) {
                return <PhotoIndexItem key={photo.id} photo={photo} />
            }
        })

        let followButton = null;
        let followerNumber = 0;
        let followeeNumber = 0;
        let followers = {};
        let followees = {};

        let isAlreadyFollowing = false;
        let currentFollowingId;
        let that = this;

        if (!this.props.followings) return null

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

        // debugger

        if (this.props.followings && this.props.currentUserId !== this.props.userId) {
            if (isAlreadyFollowing === false) {
                followButton = <button onClick={this.handleFollow}>FOLLOW</button>
            } else {
                followButton = <button onClick={() => this.props.deleteFollowing(currentFollowingId)}>UNFOLLOW</button>
            }
        }
        
        return (
            <div className="user-profile-env">

                <div className="user-profile-info">
                    {user.username}
                </div> 

                <div>
                    {followButton}
                </div>

                <ul>
                    <li>{followerNumber} Followers</li>
                    <li>{followeeNumber} Following</li>
                </ul>

                <div>
                    Followers:
                    <FollowingIndexContainer followers={followers} />
                </div>

                <div>
                    Followees:
                    <FollowingIndexContainer followees={followees} />
                </div>

                <div className="home-env">
                    <div className="home-env-inner">
                        <div className="home-page-photos">
                            <ul className="home-photos-list">
                                {photos}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default UserProfile;