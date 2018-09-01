import React from "react";
import {
  connect
} from "react-redux"
import { withRouter } from 'react-router'
import { ChatInfo } from "../ChatInfo";
import { history } from '../../history/history';
import { getMessages } from '../../store/actions/chatActions';

const Chats = ({ channels = [], onClick }) => {
  console.log(channels);
  return (
    <div className="chats">
      {channels.map(channel =>
        <ChatInfo key={channel._id} title={channel.title === null || channel.title === '' || channel.title === undefined ? channel.name : channel.title} onClick={() => onClick(channel._id)} />)}
    </div>)
}
const mapStateToProps = ({
  search,
  chat
}) => {
  const channels = (search.isSearching) ? search.foundChannels : chat.channels
  return {
    channels
  }
}

const mapDispatchToProps = dispatch => ({
  onClick(id) {
    history.push(`/channel/${id}`)
    dispatch(getMessages(id))
  }
})

const connectedChats = withRouter(connect(mapStateToProps, mapDispatchToProps)(Chats))

export { connectedChats as Chats }