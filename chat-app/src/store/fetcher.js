import fetch from 'isomorphic-fetch'

const parseToJson = response => {
    console.log(response)
    return response.json()
}

const logError = error => console.error(error)

export const fetchThenDispatch = (dispatch, url, method, body, parseResponse) =>
    fetch(url, {
        method,
        body,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(parseToJson)
    .then(parseResponse)
    .then(dispatch)
    .catch(logError)