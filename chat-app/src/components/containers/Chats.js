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
      <NavLink key={channel._id} exact to={`/channel/${channel._id}`} className="chats__chatInfo" activeClassName="chats__chatInfo_activeStyle">
        <ChatInfo title={channel.title === null || channel.title === '' || channel.title === undefined ? channel.name : channel.title} />
      </NavLink>)}
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