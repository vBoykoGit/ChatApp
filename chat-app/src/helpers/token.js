import _ from "lodash";

export const token = () => {
    const user = localStorage.getItem('user')
    const parsedUser = user !== 'undefined' ? JSON.parse(user) : {}
    const token = _.get(parsedUser, '_id')
    return token ? token : ""
}

export const hasToken = () => {
    const user = localStorage.getItem('user')
    const parsedUser = user !== 'undefined' ? JSON.parse(user) : {}
    return (parsedUser && parsedUser._id !== '')
}