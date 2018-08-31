import React from "react";

export const ChatScrollViewCell = ({ message = {} }) =>
  <div className="chatScrollViewCell">
    <div>{message.body}</div>
    <div className="messageInfo">
      <img
        src={require("/Users/admin/Chat/chat-app/src/resources/avatar.png")}
        width="40"
        height="40"
      />
      <p>{new Intl.DateTimeFormat("en-GB", { hour: "numeric", minute: "numeric" }).format(new Date(message.created))}</p>
    </div>
  </div>
