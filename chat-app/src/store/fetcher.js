import fetch from 'isomorphic-fetch'
import { apiURL } from '../helpers/config';

const parseToJson = response => {
    const json = response.json()
    console.log(json)
    return json
}

const logError = error => console.error("Catch", error)

export const fetchThenDispatch = (dispatch, path, method, body, headers) =>
    fetch(`${apiURL}${path}`, {
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