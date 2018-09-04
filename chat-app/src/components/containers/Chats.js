import React from "react";
import {
  connect
} from "react-redux"
import { withRouter } from 'react-router'
import { ChatInfo } from "../ChatInfo";
import { NavLink } from 'react-router-dom'

const Chats = ({ channels = [] }) =>
  <div className="chats">
    {channels.map(channel =>
      <NavLink exact to={`/channel/${channel._id}`} className="chatInfo" activeClassName="activeStyle"><ChatInfo key={channel._id} title={channel.title === null || channel.title === '' || channel.title === undefined ? channel.name : channel.title} /></NavLink>)}
  </div>

const mapStateToProps = ({
  search,
  chat
}) => {
  const channels = (search.isSearching) ? search.foundChannels : chat.channels
  return {
    channels
  }
}

const connectedChats = withRouter(connect(mapStateToProps, null)(Chats))

export { connectedChats as Chats }