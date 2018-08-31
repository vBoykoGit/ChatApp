import React from "react";
import "../css/chat.css";
const avatar = require("/Users/admin/Chat/chat-app/src/resources/avatar.png");

const ChatHeader = ({ chatName = '' }) =>
  <div className="chatHeader">
    <div className="">
      <img src={avatar} width="40" height="40" />
    </div>
    <div className="">{`${chatName}`}</div>
    <div className="chatHeaderAction">
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  </div>

export default ChatHeader