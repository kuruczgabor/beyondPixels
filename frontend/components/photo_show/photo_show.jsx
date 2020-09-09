import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {

    componentDidMount() {
        const that = this
        this.props.fetchPhoto(this.props.match.params.photoId)
            .then(res => {
                const authorId = res.photo.author_id
                this.props.fetchUser(authorId)
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.postId !== this.props.match.params.postId) {
            this.props.fetchPost(this.props.match.params.postId)
        }
    }

    render() {
        if (!this.props.photo) return null;

        const { title, description, photoUrl, created_at } = this.props.photo;
        const createdAt = created_at.slice(0, 10).split('-')
        const formattedCreatedAt = createdAt[1] + '/' + createdAt[2] + '/' + createdAt[0]
        const photoAuthor = this.props.users[this.props.photo.author_id] ? this.props.users[this.props.photo.author_id].username : null
        const photoAuthorId = this.props.users[this.props.photo.author_id] ? this.props.users[this.props.photo.author_id].id : null
        const editPhotoButton = this.props.users[this.props.photo.author_id] && this.props.users[this.props.photo.author_id].id === this.props.currentUserId ? (
            <a className="photo-show-edit-button" href={`/#/photos/${this.props.photo.id}/edit`}>Edit Photo</a>
        ) : null

        return (
            <div>
                <div className="photo-show-env">
                    <img className="photo-show-photo" src={photoUrl} />
                </div>
                <div className="photo-show-details-env">
                    <ul className="photo-show-icons">
                        <li><i className="fas fa-camera"></i></li>
                        <li><i className="fas fa-user"></i></li>
                        <li><i className="fas fa-calendar-day"></i></li>
                    </ul>
                    <ul className="photo-show-text">
                        <li className="photo-show-text-info">
                            <div className="photo-show-text-title">{title}</div>
                            <div className="photo-show-text-description">{description}</div>
                        </li>
                        <li className="photo-show-author"><Link to={`/users/${photoAuthorId}`}>{photoAuthor}</Link></li>
                        <li className="photo-show-date">{formattedCreatedAt}</li>
                    </ul>
                    {editPhotoButton}
                </div>
            </div>
        )
    }
}

export default PhotoShow;