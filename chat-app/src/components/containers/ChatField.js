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
} from "../../store/actions/chatActions";

const ChatField = ({ channel = {}, onNewMessage = f => f }) =>
  <div className="content">
    <ChatHeader chatName={channel.name} />
    <ChatMessages />
    <ChatInputView onSend={messageText => {
      onNewMessage(messageText)
    }} />
  </div>

const mapStateToProps = ({
  chat,
  search,
  messages
}, { match }) => {
  return {
    chat,
    search,
    match,
    messages
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    messages,
    chat,
    search,
    match
  } = stateProps;
  const {
    dispatch
  } = dispatchProps;
  const onMessage = (messageText, chatID) => {
    dispatch(sendMessage(messageText, chatID));
  };
  const [channel] = (search.isSearching) ? search.foundChannels.filter(item => item._id === match.params.id) : chat.channels.filter(item => item._id === match.params.id)

  return {
    channel,
    messages,
    onNewMessage: (messageText) => {
      onMessage(messageText, ownProps.match.params.id);
    }
  };
};

const connectedChatField = withRouter(connect(mapStateToProps, null, mergeProps)(ChatField));

export { connectedChatField as ChatField }