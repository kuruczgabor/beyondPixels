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
        // debugger
        const following = { 
            following: {
                follower_id: this.props.currentUserId,
                followee_id: this.props.userId
            }
        }
        // debugger
        this.props.createFollowing(following)
    }

    // handleUnfollow(e) {
    //     debugger
    //     e.preventDefault();
    //     this.props.deleteFollowing(e)
    // }

    render () {
        const { user } = this.props;
        if (!user) return null;

        const photos = this.props.photos.map(photo => {
            if (photo.author_id === this.props.user.id) {
                return <PhotoIndexItem key={photo.id} photo={photo} />
            }
        })

        // const followButton = this.props.currentUserId !== this.props.userId ? 
        // <>hello</> : <>hi</>

        let followButton;
        // debugger
        if (this.props.currentUserId === this.props.userId) {
            followButton = null
        } else if (this.props.followings) {
            // debugger
            let isAlreadyFollowing = false
            let currentFollowingId;
            let that = this
            // Object.values(this.props.followings).forEach(following => {
            //     if (following["follower_id"] === that.props.currentUserId && following["followee_id"] === that.props.userId) {
            //         isAlreadyFollowing = true
            //     }
            // })
            Object.entries(this.props.followings).forEach(following => {
                // debugger
                if (following[1]["follower_id"] === that.props.currentUserId && following[1]["followee_id"] === that.props.userId) {
                    isAlreadyFollowing = true
                    currentFollowingId = parseInt(following[0])
                }
            })

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

                {/* <button onClick={this.handleFollow}>FOLLOW</button> */}
                {followButton}

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