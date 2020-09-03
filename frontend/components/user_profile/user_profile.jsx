import React from 'react';
import PhotoIndexContainer from '../photo_index/photo_index_container';
import PhotoIndexItem from '../photo_index/photo_index_item';

class UserProfile extends React.Component {

    constructor(props) {
        super(props);

        this.handleFollow = this.handleFollow.bind(this)
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

        if (!this.props.followings) return null

        Object.entries(this.props.followings).forEach(following => {
            if (following[1]["follower_id"] === this.props.currentUserId && following[1]["followee_id"] === this.props.userId) {
                isAlreadyFollowing = true
                currentFollowingId = parseInt(following[0])
            }
            // if (following[1]["follower_id"] === this.props.userId) followeeNumber++
            // if (following[1]["followee_id"] === this.props.userId) followerNumber++

            if (following[1]["follower_id"] === this.props.userId) {
                followeeNumber++
                followees[following[0]] = following[1]['followee_username']
            }

            if (following[1]["followee_id"] === this.props.userId) {
                followerNumber++
                followers[following[0]] = following[1]['follower_username']
            }
        })

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