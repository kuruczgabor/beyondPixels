import React from 'react';
import PhotoIndexItem from '../photo_index/photo_index_item';

class Discover extends React.Component {

    componentDidMount() {
        this.props.fetchPhotos();
    }

    shufflePhotos(photos) {
        let currentIndex = photos.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = photos[currentIndex];
            photos[currentIndex] = photos[randomIndex];
            photos[randomIndex] = temporaryValue;
        }

        return photos;
    }

    render() {
        if (!this.props.photos) return null;

        const shuffledPhotos = this.shufflePhotos(this.props.photos)

        const photos = shuffledPhotos.map(photo => {
            return <PhotoIndexItem key={photo.id} photo={photo} />
        })

        return (
            <div className="home-env">
                <h2>Discover</h2>
                <p>Explore the highest quality of photography.</p>
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

export default Discover;