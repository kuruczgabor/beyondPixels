import React from 'react';
import { Link } from 'react-router-dom';

class FollowingIndexItem extends React.Component {

    constructor(props) {
        super(props)

        // this.handleFollow = this.handleFollow.bind(this)
    }

    componentDidUpdate(prevProps) {

        // if (this.props !== prevProps) {
        //     this.props.fetchFollowings()
        // }
        // debugger
        // if (this.props.followings !== prevProps.followings) {
        //     this.props.fetchFollowings()
        // }

        // this.props.fetchFollowings()
        // if (prevProps.followings) {
        //     Object.values(prevProps.followings).forEach(following => {
        //         if (!following.follower_username) {
        //             this.props.fetchFollowings()
        //         }
        //     })
        // }
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
        let followButton = <button onClick={() => this.props.createFollowing({ following: { follower_id: that.props.currentUserId, followee_id: that.props.followingUser.userId } }).then(() => this.props.fetchFollowings())}>Follow</button>
        const that = this

        Object.values(this.props.followings).forEach(following => {

            // debugger
            if (following.follower_id === that.props.currentUserId && following.followee_id === that.props.followingUser.userId) {
                // debugger
                // followButton = <button onClick={() => this.props.deleteFollowing(following.id)}>Unfollow</button>
                // debugger
                followButton = <button onClick={() => this.props.deleteFollowing(following.id).then( () => this.props.fetchFollowings())}>Unfollow</button>

            } 
            
            // else if () {
            //     followButton = <button onClick={() => this.props.createFollowing({ following: { follower_id: that.props.currentUserId, followee_id: that.props.followingUser.userId}})}>FOLLOW</button>
            // }

            if (that.props.followingUser.userId === this.props.currentUserId) followButton = null
            if (!that.props.currentUserId) followButton = null

        })
        // debugger

        return (
            <li className="following-modal-item">
                <Link onClick={() => this.props.closeModal()} className="following-modal-item-username" to={`/users/${this.props.followingUser.userId}`}>{userName}</Link>
                {followButton}
            </li >
        )
    }
    
}

export default FollowingIndexItem;