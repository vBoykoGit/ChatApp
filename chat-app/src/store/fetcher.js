import fetch from 'isomorphic-fetch'

const parseToJson = response => {
    const json = response.json()
    console.log(json)
    return json
}

const logError = error => console.error("Catch", error)

export const fetchThenDispatch = (dispatch, url, method, body, headers) =>
    fetch(url, {
        method,
        body,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        }
    }).then(response => {
        if (response.status >= 400) {
            throw new Error("Bad request response from server");
        }
        return response
    })
        .then(parseToJson)
        .catch(logError)