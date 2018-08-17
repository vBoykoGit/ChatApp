export const token = () => {
    let user = JSON.parse(localStorage.getItem('user'));

    return user._id ? user._id : ""
}