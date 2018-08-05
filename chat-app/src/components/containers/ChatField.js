import React from "react";
import ChatHeader from "../ChatHeader"
import ChatMessages from "../ChatMessages"
import ChatInputView from "../ChatInputView"
import {
  connect
} from "react-redux";
import { withRouter } from 'react-router'
import {
  sendMessage
} from "../../store/actions/socketActions";

const ChatField = ({ channel = {}, onNewMessage = f => f }) => {
  return (
    <div className="content">
      <ChatHeader />
      <ChatMessages />
      <ChatInputView onSend={messageText => {
        onNewMessage(messageText)
      }} />
    </div>
  );
};

const mapStateToProps = ({
  chat
}, { match }) => ({
  channel: chat.channels.filter(item => item.id === match.params.id)
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    messages
  } = stateProps;
  const {
    dispatch
  } = dispatchProps;
  const onMessage = (messageText, chatID) => {
    dispatch(sendMessage(messageText, chatID));
  };
  return {
    messages,
    onNewMessage: (messageText) => {
      onMessage(messageText, ownProps.match.params.id);
    }
  };
};

const connectedChatField = withRouter(connect(mapStateToProps, null, mergeProps)(ChatField));

export { connectedChatField as ChatField }