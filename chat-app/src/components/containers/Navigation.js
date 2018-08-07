import React from "react";
import { ChatSettings } from "./ChatSettings";
import { Chats } from "./Chats.js";
import {
  connect
} from "react-redux"
import { searchChannels } from '../../store/actions/searchActions';
import { withRouter } from 'react-router'

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

const connectedNavigation = withRouter(connect(null, mapDispatchToProps)(Navigation))

export { connectedNavigation as Navigation }