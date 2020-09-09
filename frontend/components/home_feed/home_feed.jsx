import React from 'react';
import PhotoIndexItem from '../photo_index/photo_index_item';

class HomeFeed extends React.Component {

    componentDidMount() {
        this.props.fetchPhotos();
        this.props.fetchFollowings();
    }

    render() {
        if (!this.props.photos) return null;

        let followedAuthorIds = [];
        const that = this;

        if (this.props.followings.followings) {
            Object.values(this.props.followings.followings).forEach(following => {
                if (following.follower_id === that.props.currentUserId) {
                    followedAuthorIds.push(following.followee_id) 
                }
            })
        }

        const photos = this.props.photos.map(photo => {
            if (followedAuthorIds.includes(photo.author_id)) {
                return <PhotoIndexItem key={photo.id} photo={photo} />
            }
        })

        return (
            <>
                <div className="home-env">
                    <h2>Home Feed</h2>
                    <p>See photos from people you follow.</p>
                    <div className="home-env-inner">
                        <div className="home-page-photos">
                            <ul className="home-photos-list">
                                {photos}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default HomeFeed;