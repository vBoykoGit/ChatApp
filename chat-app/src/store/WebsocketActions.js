
const action = (url = 'wss://localhost:3001') => ({
    type: 'WEBSOCKET:CONNECT',
    payload: { url }
  })