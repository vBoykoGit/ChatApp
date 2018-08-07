import React from "react";
import {
  connect
} from "react-redux"
import { searchChannels } from '../../store/actions/searchActions';
import { withRouter } from 'react-router'

const Chats = ({ isSearching, foundChannels, channels, history }) =>
  <div className="chats">
    {(isSearching) ? foundChannels.map(channel =>
      <p onClick={() => {
        history.push(`/channel/${channel._id}`)
      }
      }> {channel.name} </p>
    ) : channels.map(channel =>
      <p> {channel.name} </p>
    )}
  </div>

const mapStateToProps = ({
  search,
  chat
}, { history, location }) => (
    {
      isSearching: search.isSearching,
      foundChannels: search.foundChannels,
      channels: chat.channels,
      location,
      history
    }
  )

const mapDispatchToProps = dispatch =>
  ({
    onChange(query) {
      dispatch(searchChannels(query))
    }
  })

const connectedChats = withRouter(connect(mapStateToProps, mapDispatchToProps)(Chats))

export { connectedChats as Chats }