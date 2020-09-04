import React from 'react';
import PhotoIndexItem from '../photo_index/photo_index_item';


class HomeFeed extends React.Component {

    componentDidMount() {
        // debugger
        this.props.fetchPhotos();
        this.props.fetchFollowings();
    }

    render() {
        // debugger
        if (!this.props.photos) return null;

        
        // debugger

        let followedAuthorIds = [];
        const that = this;

        if (this.props.followings.followings) {
            Object.values(this.props.followings.followings).forEach(following => {
                // debugger
                if (following.follower_id === that.props.currentUserId) {
                    followedAuthorIds.push(following.followee_id) 
                }
            })
        }


        // debugger
        const photos = this.props.photos.map(photo => {
            // debugger
            if (followedAuthorIds.includes(photo.author_id)) {
                return <PhotoIndexItem key={photo.id} photo={photo} />
            }
        })

        // debugger
        return (
            <div className="home-env">
                <div className="home-env-inner">
                    <div className="home-page-photos">
                        <ul className="home-photos-list">
                            {photos}
                        </ul>
                    </div>
                </div>


            </div>
        )
    }


}

export default HomeFeed;