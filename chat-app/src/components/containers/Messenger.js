import {
  connect,
  connectAdvanced
} from "react-redux";
import {
  sendMessage
} from "/Users/admin/Chat/chat-app/src/store/socketActions.js";
import ChatField from "../ChatField";
import {
  message
} from '../../store/reducers';

const mapStateToProps = ({
  messages,
  socket
}) => ({
  messages,
  socket
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  console.log('propsFromState', stateProps);
  console.log('propsFromDispatch', dispatchProps);
  console.log('ownProps', ownProps);
  const {
    messages,
    socket,
    user
  } = stateProps;
  const {
    dispatch
  } = dispatchProps;
  const onMessage = (messageText, chatID, user, socket) => {
    dispatch(sendMessage(messageText, chatID, user, socket));
  };
  return {
    messages,
    socket,
    onNewMessage: (messageText) => {
      onMessage(messageText, "", user.userInfo, socket);
    }
  };
};

const Messenger = connect(mapStateToProps, null, mergeProps)(ChatField);

export default Messenger;