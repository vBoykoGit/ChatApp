import C from "./constants.js";

export const message = (state = {}, action = { type: null }) => {
  switch (action.type) {
    case C.SendMessage:
      return {
        id: action.id,
        timestamp: action.timestamp,
        message: action.message,
        chatId: action.chatId,
        fromUser: action.fromUser
      };
    default:
      return state;
  }
};

export const messages = (state = [], action = { type: null }) => {
  switch (action.type) {
    case C.SendMessage:
      return [...state, message({}, action)];
    default:
      return state;
  }
};
