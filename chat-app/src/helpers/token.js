export const token = () => {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    return user._id ? user._id : ""
}