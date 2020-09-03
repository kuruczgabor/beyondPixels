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
            follower_id: this.props.currentUserId, 
            followee_id: this.props.userId,
        }
        debugger
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

        return (
            <div className="user-profile-env">

                <div className="user-profile-info">
                    {user.username}
                </div> 

                <button onClick={this.handleFollow}>FOLLOW</button>

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