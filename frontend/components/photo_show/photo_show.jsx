import React from 'react';

class PhotoShow extends React.Component {

    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.photoId)
    }

    render() {

        if (!this.props.photo) return null;
        const { title, description, photoUrl } = this.props.photo;

        // debugger

        return (
            <div>
                <div className="photo-show-env">
                    <img className="photo-show-photo" src={photoUrl} />
                </div>
                <div className="photo-show-details-env">
                    <div className="photo-show-details">
                        <p className="photo-show-title" >{title}</p>
                        <p className="photo-show-description">{description}</p> 

                    </div>
                </div>
            </div>


        )
    }
}

export default PhotoShow;