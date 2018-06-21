import React, { Component } from "react";
import ChatScrollViewCell from "./ChatScrollViewCell.js";

export default class ChatMessages extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="chatMessages">
        <ChatScrollViewCell />
        <ChatScrollViewCell />
        <ChatScrollViewCell />
        <ChatScrollViewCell />
        <ChatScrollViewCell />
        <ChatScrollViewCell />
        <ChatScrollViewCell />
        <ChatScrollViewCell />
        <ChatScrollViewCell />
        <ChatScrollViewCell />
        <ChatScrollViewCell />
        <ChatScrollViewCell />
        <ChatScrollViewCell />
        <ChatScrollViewCell />
        <ChatScrollViewCell />
        <ChatScrollViewCell />
        <ChatScrollViewCell />
      </div>
    );
  }
}
