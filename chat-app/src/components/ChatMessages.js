import React from "react";
import { ChatScrollViewCell } from "./ChatScrollViewCell.js";
import InfiniteScroll from 'react-infinite-scroller'

export const ChatMessages = ({ messages = [] }) =>
  <div className="chatMessages">
    <InfiniteScroll
      pageStart={0}
      loadMore={f => f}
      hasMore={false}
      loader={<div className="loader">Loading ...</div>}>
      {Object.entries(messages).map(([key, value]) => <ChatScrollViewCell key={key} message={value} />)}
    </InfiniteScroll>
  </div>