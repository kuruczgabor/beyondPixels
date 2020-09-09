import React from 'react'
import { Link } from 'react-router-dom'


const PhotoIndexItem = props => {
    return (
        <li>
            <Link className="post-index-item" to={`/photos/${props.photo.id}`}>
                <img className="post-index-photo" src={props.photo.photoUrl} />
            </Link>
            <h5 className="post-index-title">{props.photo.title}</h5>
        </li>
    )

}

export default PhotoIndexItem;