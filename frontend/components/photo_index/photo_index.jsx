import React from 'react';
import PostIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPhotos
    }

    render () {
        const { photos } = this.props;
        debugger

        return (
            <div>
                <ul>
                    {
                        photos.map(photo => (
                            <PostIndexItem
                            photo={photo}
                            key={photo.id}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }

}

export default PhotoIndex;