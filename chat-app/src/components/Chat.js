import React, { Component } from "react";
import "../css/chat.css";
import { Navigation } from "./containers/Navigation"
import { ChatField } from './containers/ChatField';
import {
  connect
} from "react-redux"
import { withRouter } from 'react-router'
import { fetchUserInfoIfNeeded } from '../store/actions/userActions';
import { getChannels } from '../store/actions/chatActions';

class Chat extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(fetchUserInfoIfNeeded())
    dispatch(getChannels())
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
        <ChatField />
      </div>
    );
  }
}

const mapStateToProps = ({
  search,
  chat
}) => ({
  isSearching: search.isSearching,
  foundChannels: search.foundChannels,
  channels: chat.channels
})

const connectedChat = withRouter(connect(mapStateToProps, null)(Chat))
export { connectedChat as Chat }