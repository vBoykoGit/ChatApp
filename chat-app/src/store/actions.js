import C from "./constants";
import {
  fetchThenDispatch
} from './fetcher.js'


const parseSendMessage = response => {
  return {
    type: C.SendMessage,
    timestamp: new Date().toString(),
    id: response.userId,
    chatId: response.toChatId,
    message: response.message,
    fromUser: response.fromUser
  }
}

export const sendMessage = (message, toChatId, fromUser) => dispatch =>
  fetchThenDispatch(
    dispatch,
    '/api/colors',
    'POST',
    JSON.stringify({
      title: "title",
      color: "color"
    }, parseSendMessage)
  )

// export const sendMessage = (message, toChatId, fromUser) => ({
//   type: C.SendMessage,
//   timestamp: new Date().toString(),
//   id: v1(),
//   chatId: toChatId,
//   message,
//   fromUser
// });