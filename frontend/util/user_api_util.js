export const fetchUser = UserId => (
    $.ajax({
        method: 'get',
        url: `/api/users/${userId}`
    })
)