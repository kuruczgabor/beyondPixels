export const fetchFollowings = () => {
    return (
        $.ajax({
            url: 'api/followings'
        })
    )
}

export const createFollowing = (formData) => {
    debugger
    return $.ajax({
        url: 'api/followings',
        method: 'POST',
        data: formData,
        // contentType: false,
        // processData: false
    })
}