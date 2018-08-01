import {
  connect,
  connectAdvanced
} from "react-redux";
import {
  sendMessage
} from "../../store/actions/socketActions";
import ChatField from "../ChatField";
import {
  message
} from '../../store/reducers';

const mapStateToProps = ({
  messages
}) => ({
  messages
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  console.log('propsFromState', stateProps);
  console.log('propsFromDispatch', dispatchProps);
  console.log('ownProps', ownProps);
  const {
    messages,
    user
  } = stateProps;
  const {
    dispatch
  } = dispatchProps;
  const onMessage = (messageText, chatID, user) => {
    dispatch(sendMessage(messageText, chatID, user));
  };
  return {
    messages,
    onNewMessage: (messageText) => {
      onMessage(messageText, "", user.userInfo);
    }
  };
};

const Messenger = connect(mapStateToProps, null, mergeProps)(ChatField);

export default Messenger;