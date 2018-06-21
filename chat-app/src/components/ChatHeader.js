import React, { Component } from "react";
import "../css/chat.css";

export default class ChatHeader extends Component {
  render() {
    var avatar = require("/Users/admin/Chat/chat-app/src/resources/avatar.png");
    return (
      <div className="chatHeader">
        <div className="">
          <img src={avatar} width="40" height="40" />
        </div>
        <div className="">Chat name</div>
        <div className="chatHeaderAction">
          <button type="button" className="btn btn-primary">
            Primary
          </button>
        </div>
      </div>
    );
  }
}
