import React from 'react';
import PhotoIndexItem from '../photo_index/photo_index_item';


class HomeFeed extends React.Component {

    componentDidMount() {
        // debugger
        this.props.fetchPhotos();
    }

    render() {
        // debugger
        if (!this.props.photos) return null;

        const photos = this.props.photos.map(photo => {
            return <PhotoIndexItem key={photo.id} photo={photo} />
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