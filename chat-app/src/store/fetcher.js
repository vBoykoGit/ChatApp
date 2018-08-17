import fetch from 'isomorphic-fetch'

const parseToJson = response => {
    const json = response.json()
    console.log(json)
    return json
}

const logError = error => console.error(error)

export const fetchThenDispatch = (url, method, body, headers) =>
    fetch(url, {
        method,
        body,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        }
    })
        .then(parseToJson)
        .catch(logError)