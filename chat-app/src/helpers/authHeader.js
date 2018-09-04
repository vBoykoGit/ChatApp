export const authHeader = () => {
    let user = JSON.parse(localStorage.getItem('user'));

    return (user && user._id) ? {
        'Authorization': 'Bearer ' + user._id
    } : {}
}