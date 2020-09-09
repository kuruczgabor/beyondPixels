import React from 'react';
import { Link } from 'react-router-dom';

class FollowingIndexItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        const userName = this.props.followingUser.userName

        let followButton = (
        <button onClick={() => this.props.createFollowing({ 
            following: { follower_id: that.props.currentUserId, 
                         followee_id: that.props.followingUser.userId }})
            .then(() => this.props.fetchFollowings())}
        >
            Follow
        </button>)
        const that = this

        Object.values(this.props.followings).forEach(following => {
            if (following.follower_id === that.props.currentUserId && 
                following.followee_id === that.props.followingUser.userId) {
                followButton = (
                <button onClick={() => this.props.deleteFollowing(following.id)
                    .then( () => this.props.fetchFollowings())}>
                    Unfollow
                </button>)
            } 

            if (that.props.followingUser.userId === this.props.currentUserId) followButton = null
            if (!that.props.currentUserId) followButton = null

        })

        return (
            <li className="following-modal-item">
                <Link 
                    onClick={() => this.props.closeModal()} 
                    className="following-modal-item-username" 
                    to={`/users/${this.props.followingUser.userId}`}>
                        {userName}
                </Link>
                {followButton}
            </li >
        )
    }
    
}

export default FollowingIndexItem;