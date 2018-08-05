import React from "react";
import { ChatSettings } from "./containers/ChatSettings";
import { Chats } from "./Chats.js";
import {
  connect
} from "react-redux"
import { searchChannels } from '../store/actions/searchActions';

const Navigation = ({ onChange }) => {
  return (
    <div className="navigation">
      <ChatSettings onChange={onChange} />
      <Chats />
    </div>
  );
}

const mapDispatchToProps = dispatch =>
  ({
    onChange(query) {
      dispatch(searchChannels(query))
    }
  })

const connectedNavigation = connect(null, mapDispatchToProps)(Navigation);

export { connectedNavigation as Navigation }