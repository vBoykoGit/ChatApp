import fetch from 'isomorphic-fetch'
import { apiURL } from '../helpers/config';

const parseToJson = response => {
    const json = response.json()
    console.log(json)
    return json
}

const logError = error => console.error("Catch", error)

const checkStatus = response => {
    if (response.status >= 400) {
        throw new Error(`Bad request response from server with status: ${response.status}`);
    }
    return response
}

const checkErrors = response => response

export const fetchThenDispatch = (dispatch, path, method, body, headers) =>
    fetch(`${apiURL}${path}`, {
        method,
        body,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        }
    }).then(checkStatus)
        .then(parseToJson)
        .then(checkErrors)
        .catch(logError)