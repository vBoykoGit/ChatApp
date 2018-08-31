import React from "react";
import ChatHeader from "../ChatHeader"
import { ChatMessages } from "../ChatMessages"
import ChatInputView from "../ChatInputView"
import {
  connect
} from "react-redux";
import { withRouter } from 'react-router'
import {
  handleMessageFromChannel
} from "../../store/actions/chatActions";

const ChatField = ({ channel = {}, onNewMessage = f => f }) => {
  console.log(channel);
  
  return (<div className="content">
    <ChatHeader chatName={channel.title} />
    <ChatMessages messages={channel.messages} />
    <ChatInputView onSend={messageText => {
      onNewMessage(messageText)
    }} />
  </div>)
}
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
  const [channel] = (search.isSearching) ? search.foundChannels.filter(item => item._id === match.params.id) : chat.channels.filter(item => item._id === match.params.id)
  const onMessage = (messageText, channel) => {
    dispatch(handleMessageFromChannel(messageText, channel));
  };
  return {
    channel,
    messages,
    onNewMessage: (messageText) => {
      onMessage(messageText, channel);
    }
  };
};

const connectedChatField = withRouter(connect(mapStateToProps, null, mergeProps)(ChatField));

export { connectedChatField as ChatField }