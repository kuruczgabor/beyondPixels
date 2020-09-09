import React from 'react';
import PhotoIndexContainer from '../photo_index/photo_index_container';
import PhotoIndexItem from '../photo_index/photo_index_item';
import FollowingIndexContainer from '../following/following_index_container';

class UserProfile extends React.Component {

    constructor(props) {
        super(props);

        this.handleFollow = this.handleFollow.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
            this.props.fetchUser(this.props.userId)
        }
    }

    componentDidMount() {
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
        const userName = this.props.user ? this.props.user.username : null

        let numberOfPhotos = 0;

        const photos = this.props.photos.map(photo => {
            if (this.props.user && photo.author_id === this.props.user.id) {
                numberOfPhotos ++;
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
        
        if (this.props.followings && this.props.currentUserId !== this.props.userId) {
            if (isAlreadyFollowing === false) {
                followButton = <button onClick={this.handleFollow}>Follow</button>
            } else {
                followButton = <button onClick={() => this.props.deleteFollowing(currentFollowingId)}>Unfollow</button>
            }
        } 
        
        if (!this.props.currentUserId) followButton = null
        
        return (
            <div className="user-profile-env">

                <div className="user-profile-info">
                    <h2>{userName}</h2>
                    {followButton}
                    <ul>
                        <li>{followerNumber} {this.props.followersListButton}</li>
                        <li>{followeeNumber} {this.props.followeesListButton}</li>
                        <li>{numberOfPhotos} Photos</li>
                    </ul>
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