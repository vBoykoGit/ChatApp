import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatHeader from "./ChatHeader.js";
import ChatMessages from "./ChatMessages.js";
import ChatInputView from "./ChatInputView.js";

const ChatField = ({ messages = [], onNewMessage = f => f }) => {
  return (
    <div className="content">
      <ChatHeader />
      <ChatMessages />
      <ChatInputView onNewMessage={messageText => onNewMessage(messageText, 1, {name: 'Vasya'})} />
    </div>
  );
};

export default ChatField;
