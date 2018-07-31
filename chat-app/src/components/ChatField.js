import React from "react";
import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import ChatInputView from "./ChatInputView"

const ChatField = ({ messages = [], onNewMessage = f => f }) => {
  return (
    <div className="content">
      <ChatHeader />
      <ChatMessages />
      <ChatInputView onSend={messageText => {
        onNewMessage(messageText)}} />
    </div>
  );
};

export default ChatField;
