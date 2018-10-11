import React from "react";
import { SearchBar } from "./SearchBar";
import { Chats } from "./Chats.js";
import {
  connect
} from "react-redux"
import { searchChannels } from '../../store/actions/searchActions';
import { withRouter } from 'react-router'

const Navigation = ({ onChange }) =>
  <div className="navigation">
    <SearchBar onChange={onChange} />
    <Chats />
  </div>

const mapDispatchToProps = dispatch =>
  ({
    onChange(query) {
      dispatch(searchChannels(query))
    }
  })

const connectedNavigation = withRouter(connect(null, mapDispatchToProps)(Navigation))

export { connectedNavigation as Navigation }