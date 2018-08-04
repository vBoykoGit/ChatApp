import React, { Component } from "react";
import "../css/chat.css";
import Navigation from "./Navigation"
import { ChatField } from './containers/ChatField';
import { withRouter } from 'react-router'
import {
  connect
} from "react-redux";

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: window.innerHeight
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    this.setState({
      height: window.innerHeight
    });
    console.log(window.innerHeight);
  };
  render() {
    const { height } = this.state;
    const style = {
      height: height
    };
    const {match} = this.props
    console.log('afdafdfafafffaf', match);

    return (
      <div className="chatApp" style={style}>
        <Navigation />
        <ChatField />
      </div>
    );
  }
}

const connectedChat = withRouter(connect(null, null)(Chat));

export { connectedChat as Chat }