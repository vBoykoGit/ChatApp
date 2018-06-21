import React, { Component } from "react";
import classNames from "classnames";

export default class ChatScrollViewCell extends Component {
  render() {
    return (
      <div className="chatScrollViewCell">
        <div>Testttttt Testttttt Testttttt Testttttt</div>
        <div className="messageInfo">
          <img
            src={require("/Users/admin/Chat/chat-app/src/resources/avatar.png")}
            width="40"
            height="40"
          />
          <p>12:12</p>
        </div>
      </div>
    );
  }
}