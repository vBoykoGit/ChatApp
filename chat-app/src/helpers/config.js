export const production = false; // set it to true when deploy to the server

const domain = production ? 'prod' : '127.0.0.1:3001';
export const websocketURL = `ws://${domain}`
export const apiURL = `http://${domain}`