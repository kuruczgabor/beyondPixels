import React from 'react'


const PhotoIndexItem = props => {
    // debugger
    return (
        <li>
            <img className="post-index-item" src={props.photo.photoUrl} />
        </li>
    )

}

export default PhotoIndexItem;