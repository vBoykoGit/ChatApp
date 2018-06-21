import C from "./constants";
import { v1 } from "uuid";

export const sendMessage = (message, toChatId, fromUser) => ({
  type: C.SendMessage,
  timestamp: new Date().toString(),
  id: v1(),
  chatId: toChatId,
  message,
  fromUser
});

// export const sendMessage = (message, toChatId, fromUser) => ({
//   type: C.SendMessage,
//   timestamp: new Date().toString(),
//   id: v1(),
//   chatId: toChatId,
//   message,
//   fromUser
// });
