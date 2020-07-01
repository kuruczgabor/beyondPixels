import React from 'react'


const PhotoIndexItem = props => {
    debugger
    return (
        <li>
            <img className="post-index-item" height="100px" width="100px" src={props.photo.photoUrl} />
        </li>
    )

}

export default PhotoIndexItem;