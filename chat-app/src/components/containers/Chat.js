import React, { Component } from "react";
import { Navigation } from "./Navigation"
import { ChatField } from './ChatField';
import { connect } from "react-redux"
import { withRouter } from 'react-router'
import { fetchUserInfoIfNeeded } from '../../store/actions/userActions';
import { getChannels, getMessages } from '../../store/actions/chatActions';

class Chat extends Component {
  constructor(props) {
    super(props);
    const { dispatch, match } = this.props;
    dispatch(fetchUserInfoIfNeeded())
    dispatch(getChannels())
    if (match.params.id) {
      dispatch(getMessages(match.params.id))
    }
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

  componentDidUpdate(prevProps) {
    const { dispatch, match } = this.props;
    const currentId = match.params.id
    if (currentId !== prevProps.match.params.id) {
      dispatch(getMessages(currentId))
    }
  }

  onResize = () => {
    this.setState({
      height: window.innerHeight
    });
    console.log(window.innerHeight);
  }

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
}, { match }) => ({
  isSearching: search.isSearching,
  foundChannels: search.foundChannels,
  channels: chat.channels,
  match
})

const connectedChat = withRouter(connect(mapStateToProps, null)(Chat))
export { connectedChat as Chat }