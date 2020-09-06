export const fetchFollowings = () => {
    return (
        $.ajax({
            url: 'api/followings'
        })
    )
}

export const createFollowing = (formData) => {
    return $.ajax({
        url: 'api/followings',
        method: 'POST',
        data: formData,
        // contentType: false,
        // processData: false
    })
}

export const deleteFollowing = (followingId) => {
    return $.ajax({
        url: `api/followings/${followingId}`,
        method: 'DELETE'
    })
}