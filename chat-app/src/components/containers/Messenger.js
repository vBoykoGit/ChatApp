import { connect } from "react-redux";
import { sendMessage } from "/Users/admin/Chat/chat-app/src/store/actions.js";
import ChatField from "../ChatField";

const Messenger = connect(
  ({ messages }) => ({
    messages
  }),
  dispatch => ({
    onNewMessage(messageText, toChatId, fromUser) {
      console.log(messageText);
      //dispatch(sendMessage(messageText, toChatId, fromUser));
    }
  })
)(ChatField);

export default Messenger;
