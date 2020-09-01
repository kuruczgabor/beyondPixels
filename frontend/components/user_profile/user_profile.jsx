import React from 'react';
import PhotoIndexContainer from '../photo_index/photo_index_container';
import PhotoIndexItem from '../photo_index/photo_index_item';

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchPhotos();
    }

    render () {
        // debugger
        const { user } = this.props;
        // const userId = user.id
        if (!user) return null;
        // debugger
        // const userPhotos = this.props.

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