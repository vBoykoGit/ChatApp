import React, { Component } from "react";
import "../css/chat.css";
import Navigation from "./Navigation.js";
import Messenger from "./containers/Messenger.js";
import "bootstrap/dist/css/bootstrap.css";

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
    return (
      <div className="chatApp" style={style}>
        <Navigation />
        <Messenger />
      </div>
    );
  }
}
