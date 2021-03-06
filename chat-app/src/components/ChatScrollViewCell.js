import React from "react";
import classNames from 'classnames';

export const ChatScrollViewCell = ({ message = {} }) =>
  <div className={classNames('chatField__chatScrollViewCell', { 'reverse': message.me })}>
    <div className='chatField__messageInfo'>
      <img
        src={require("/Users/admin/Chat/chat-app/src/resources/avatar.png")}
        alt=''
        width="40"
        height="40"
      />
      <p>{new Intl.DateTimeFormat("en-GB", { hour: "numeric", minute: "numeric" }).format(new Date(message.created))}</p>
    </div>
    <div>{message.body}</div>
  </div>
