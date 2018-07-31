import React, { Component } from "../../../../Library/Caches/typescript/2.9/node_modules/@types/react/../../Library/Caches/typescript/2.9/node_modules/@types/react";
import PropTypes from "../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types./Library/Caches/typescript/2.9/node_modules/@types/prop-types";
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
