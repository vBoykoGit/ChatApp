import React, { Component } from "react";
import ChatSettings from "./ChatSettings.js";
import Chats from "./Chats.js";

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <ChatSettings />
        <Chats />
      </div>
    );
  }
}
