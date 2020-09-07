# beyondPixels
[beyondPixels](https://beyondpixels.herokuapp.com/), a 500px clone, is a web application that allows amateur and professional photographers to share their world through their own lenses.

<p align="center">
  <img height="400" src="/app/assets/images/home_feed.png">
</p>

# Technologies
* React
* Redux
* JavaScript
* HTML
* CSS
* Ruby on Rails
* JBuilder
* PostgreSQL
* Heroku
* Amazon Web Services

# Features
* Splash Page
   * Welcome page for logged out users
* Home Feed
   * Displays photos from the followed users
* Discovery
   * Displays photos from all users
* Profile Page
   * Displays user's information and photos
* Sessions
   * Users can sign up, log in, log out 
* Photos
   * Users can upload, edit, delete photos
* Followings
   * Users can follow and unfollow other users

# Solutions

### Dynamic Photo Grid

The size of the photos and the photo grid dynamically changes based on the window size.

##### Rendering Home Page:
```javaScript
return (
    <div className="home-env">
        <h2>Home Feed</h2>
        <p>See photos from people you follow.</p>
        <div className="home-env-inner">
            <div className="home-page-photos">
                <ul className="home-photos-list">
                    {photos}
                </ul>
            </div>
        </div>
    </div>
)
```

##### Styling Photo Grid:

```CSS
.home-env {
    margin-top: 100px;
    list-style-type: none;
    position: relative;
}

.home-env-inner {
    display: block;
    position: relative;
}

.home-page-photos {
    display: flex;
    flex-flow: row wrap;
    width: calc(0.90 * 100vw);
    padding-top: 20px;
    margin-left: 5vw;
}

.home-photos-list {
    column-count: 3;
    column-gap: 1em;
}
```

### Simple Uploading and Editing of Photos

I use the same PhotoForm when uploading or editing photos with some modifications based on the formType.

<p align="center">
  <img height="300" src="/app/assets/images/upload.gif">
</p>


##### Rendering PhotoForm:
```javaScript
render() {
        
        ...

        return (
            <div className="photo-form-main">

                {this.renderErrors()}
                {this.titleChooser()}

                <div className="photo-form-env">

                    {this.fileChooser()}
                    <input 
                        className="photo-file-selector" 
                        id="select-file" 
                        name="file" 
                        type="file" 
                        onChange={this.handleFile.bind(this)} 
                    />
                    
                    <form className="photo-form" onSubmit={this.handleSubmit}>

                        <div className="photo-form-preview-env">
                            <div className="photo-form-preview">{preview}</div>
                        </div>

                        <div className="photo-form-input">

                            <p>Photo Details</p>

                            <label>Title*
                                <input 
                                    id="photo_upload_title_input" 
                                    type="text" value={this.state.title} 
                                    onChange={this.update('title')} required
                                />
                            </label>

                            <label>Description
                                <input 
                                    type="text" 
                                    value={this.state.description} 
                                    onChange={this.update('description')} 
                                />
                            </label>

                                {this.submitButton()}
                                {this.deleteButton()}
                        </div>
                    </form>
                </div>
            </div>
        )
```

### Handling Errors

Upon failure, the errors are ready to show up and notify the user.

<p align="center">
  <img height="50" src="/app/assets/images/error.gif">
</p>

##### Handling Errors:
```javaScript
    renderErrors() {
        return this.props.errors.length > 0 ? (
            <div className="error-popup">
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>{error}</li>
                    ))}
                </ul>
            </div>
        ) : null
    }
```


### Dynamic Followings

Users can dynamically follow and unfollow other users without refreshing the page.

<p align="center">
  <img height="300" src="/app/assets/images/follow.gif">
</p>

##### FollowingIndexItem Class:
```javaScript
class FollowingIndexItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        const that = this
        const userName = this.props.followingUser.userName
        let followButton = (
            <button onClick={() => 
                this.props.createFollowing({
                    following: {
                        follower_id: that.props.currentUserId,
                        followee_id: that.props.followingUser.userId
                    }
                }).then(() => this.props.fetchFollowings())}>
                Follow
            </button>
        )
        
        Object.values(this.props.followings).forEach(following => {
            if (following.follower_id === that.props.currentUserId && 
                following.followee_id === that.props.followingUser.userId) {
                followButton = (
                    <button onClick={() => 
                        this.props.deleteFollowing(following.id)
                        .then(() => this.props.fetchFollowings())}>
                        Unfollow
                    </button>
                    )
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
```
    
# Upcoming features:

* Likes
    - Users can like and unlike photos
* Comments
    - Users can comment photos
* Tags
    - Users can add tags to photos
* Notifications
    - Users get notified of likes, follows, and comments 
