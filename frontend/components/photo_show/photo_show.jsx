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
                    <ul className="photo-show-icons">
                        <li><i className="fas fa-camera"></i></li>
                        <li><i className="fas fa-user"></i></li>
                        <li><i className="fas fa-calendar-day"></i></li>

                        {/* <p className="photo-show-title" >{title}</p>
                        <p className="photo-show-description">{description}</p>
                        <i className="fas fa-camera"></i> 
                        <i className="fas fa-user"></i>
                        <i class="fas fa-calendar-day"></i>
                        {photoAuthor}
                        {formattedCreatedAt} */}
                    </ul>
                    <ul className="photo-show-text">
                        <li className="photo-show-text-info">
                            <div className="photo-show-text-title">{title}</div>
                            <div className="photo-show-text-description">{description}</div>
                        </li>
                        <li className="photo-show-author">{photoAuthor}</li>
                        <li className="photo-show-date">{formattedCreatedAt}</li>
                    </ul>
                </div>
            </div>


        )
    }
}

export default PhotoShow;