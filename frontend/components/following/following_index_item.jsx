import React from 'react';
import { Link } from 'react-router-dom';

class FollowingIndexItem extends React.Component {

    constructor(props) {
        super(props)

        // this.handleFollow = this.handleFollow.bind(this)
    }

    // handleFollow(e) {
    //     e.preventDefault();
    //     debugger
    //     const following = {

    //     }
    //     this.props.createFollowing(following)
    // }

    render () {
        const userName = this.props.followingUser.userName

        // let followButton;
        let followButton = <button onClick={() => this.props.createFollowing({ following: { follower_id: that.props.currentUserId, followee_id: that.props.followingUser.userId } })}>FOLLOW</button>
        const that = this

        Object.values(this.props.followings).forEach(following => {

            // debugger
            if (following.follower_id === that.props.currentUserId && following.followee_id === that.props.followingUser.userId) {
                // debugger
                followButton = <button onClick={() => this.props.deleteFollowing(following.id)}>UNFOLLOW</button>
            } 
            
            // else if () {
            //     followButton = <button onClick={() => this.props.createFollowing({ following: { follower_id: that.props.currentUserId, followee_id: that.props.followingUser.userId}})}>FOLLOW</button>
            // }

            if (that.props.followingUser.userId === this.props.currentUserId) followButton = null
            if (!that.props.currentUserId) followButton = null

        })
        // debugger

        return (
            <li>
                <div>
                    <Link to={`/users/${this.props.followingUser.userId}`}>
                        {userName}
                    </Link>
                    {followButton}
                </div>
            </li >
        )
    }
    
}

export default FollowingIndexItem;