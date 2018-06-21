import React, { Component } from "react";
import "../css/chat.css";

export default class ChatSettings extends Component {
  render() {
    var avatar = require("/Users/admin/Chat/chat-app/src/resources/avatar.png");
    return (
      <div className="chatSettings">
        <div className="row">
          <div className="col-auto">
            <button type="button" className="btn btn-primary">
              Primary
            </button>
          </div>
        </div>
      </div>
    );
  }
}