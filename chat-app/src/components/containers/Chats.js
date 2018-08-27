import React from "react";
import {
  connect
} from "react-redux"
import { withRouter } from 'react-router'

const Chats = ({ isSearching, foundChannels, channels, history }) =>
  <div className="chats">
    {(isSearching) ? foundChannels.map(channel =>
      <p key={channel._id} onClick={() => {
        history.push(`/channel/${channel._id}`)
      }
      }> {channel.name} </p>
    ) : channels.map(channel =>
      <p key={channel._id} onClick={() => {
        history.push(`/channel/${channel._id}`)
      }
      }> {channel.title.length ? channel.title : "test"} </p>)}
  </div>

const mapStateToProps = ({
  search,
  chat
}, { history }) => (
    {
      isSearching: search.isSearching,
      foundChannels: search.foundChannels,
      channels: chat.channels,
      history
    }
  )

const connectedChats = withRouter(connect(mapStateToProps)(Chats))

export { connectedChats as Chats }