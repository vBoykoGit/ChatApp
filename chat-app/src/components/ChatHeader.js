import React from "react";

const avatar = require("/Users/admin/Chat/chat-app/src/resources/avatar.png");

const ChatHeader = ({ chatName = '' }) =>
  <div className="chatHeader">
    <div className="avatar">
      <img src={avatar} alt = '' width="40" height="40" />
    </div>
    <div>{`${chatName}`}</div>
  </div>

export default ChatHeader