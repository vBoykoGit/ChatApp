import React, { Component } from "react";
import {
  connect
} from "react-redux"
import { searchChannels } from '../store/actions/searchActions';

const Chats = ({ isSearching, foundChannels, channels }) =>
  <div className="chats">
    {(isSearching) ? foundChannels.map(user =>
      <h1> {user.name} </h1>
    ) : channels.map(channel =>
      <h1> {channel.name} </h1>
    )}
  </div>

const mapStateToProps = ({
  search,
  chat
}) => {
  console.log('seeeeearrrrch', search)

  return {
    isSearching: search.isSearching,
    foundChannels: search.foundChannels,
    channels: chat.channels
  }
}

const mapDispatchToProps = dispatch =>
  ({
    onChange(query) {
      dispatch(searchChannels(query))
    }
  })

const connectedChats = connect(mapStateToProps, mapDispatchToProps)(Chats)

export { connectedChats as Chats }