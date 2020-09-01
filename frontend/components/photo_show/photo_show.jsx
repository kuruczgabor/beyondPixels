import React from 'react';

class PhotoShow extends React.Component {

    componentDidMount() {

        this.props.fetchPhoto(this.props.match.params.photoId)
            .then(res => {
                const authorId = res.photo.author_id
                this.props.fetchUser(authorId)
            }
            )
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.postId !== this.props.match.params.postId) {
            this.props.fetchPost(this.props.match.params.postId)
        }
    }

    render() {
        if (!this.props.photo) return null;
        const { title, description, photoUrl, created_at } = this.props.photo;

        const createdAt = this.props.photo.created_at.slice(0, 10).split('-')
        const formattedCreatedAt = createdAt[1] + '/' + createdAt[2] + '/' + createdAt[0]

        const photoAuthor = this.props.photoAuthor ? this.props.photoAuthor.username : null
        return (
            <div>
                <div className="photo-show-env">
                    <img className="photo-show-photo" src={photoUrl} />
                </div>
                <div className="photo-show-details-env">
                    <div className="photo-show-details">
                        <p className="photo-show-title" >{title}</p>
                        <p className="photo-show-description">{description}</p> 
                        {photoAuthor}
                        {formattedCreatedAt}
                    </div>
                </div>
            </div>


        )
    }
}

export default PhotoShow;