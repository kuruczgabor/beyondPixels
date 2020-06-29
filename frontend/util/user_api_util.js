export const fetchUser = userId => (
    $.ajax({
        method: 'get',
        url: `/api/users/${userId}`
    })
)