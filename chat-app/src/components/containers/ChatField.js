import React from "react";
import ChatHeader from "../ChatHeader"
import { ChatMessages } from "../ChatMessages"
import ChatInputView from "../ChatInputView"
import { connect } from "react-redux";
import { withRouter } from 'react-router'
import { handleMessageFromChannel } from "../../store/actions/chatActions";

const ChatField = ({ channel = {}, onNewMessage = f => f }) =>
  <div className="chatField">
    <ChatHeader chatName={channel.title} />
    <ChatMessages messages={channel.messages} />
    <ChatInputView onSend={messageText => {
      onNewMessage(messageText)
    }} />
  </div>

const mapStateToProps = ({
  chat,
  search }, { match }) => {
  return {
    chat,
    search,
    match
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    chat,
    search,
    match
  } = stateProps;
  const {
    dispatch
  } = dispatchProps;
  const foundChannels = search.foundChannels ? search.foundChannels : []
  const channelId = match.params.id
  let [channel] = chat.channels.filter(item => item._id === channelId)
  if (!channel && search.isSearching) {
    [channel] = foundChannels.filter(item => item._id === channelId)
  }
  const onMessage = (messageText, channel) => {
    dispatch(handleMessageFromChannel(messageText, channel));
  };
  return {
    channel,
    onNewMessage: (messageText) => {
      onMessage(messageText, channel);
    }
  };
};

const connectedChatField = withRouter(connect(mapStateToProps, null, mergeProps)(ChatField));

export { connectedChatField as ChatField }