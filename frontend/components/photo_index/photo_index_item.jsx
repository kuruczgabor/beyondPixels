import React from 'react'
import { Link } from 'react-router-dom'


const PhotoIndexItem = props => {
    // debugger
    return (
        <li>
            <Link to={`/photos/${props.photo.id}`}>
                <img className="post-index-item" src={props.photo.photoUrl} />
            </Link>
        </li>
    )

}

export default PhotoIndexItem;