import React, { Component } from "react";
import { ChatSettings } from "./containers/ChatSettings";
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
