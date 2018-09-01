export const token = () => {
    const user = localStorage.getItem('user')
    const parsedUser = user !== 'undefined' ? JSON.parse(user) : {}
    return parsedUser._id ? parsedUser._id : ""
}