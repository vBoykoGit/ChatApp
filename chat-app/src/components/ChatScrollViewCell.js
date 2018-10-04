import React from "react";

export const ChatScrollViewCell = ({ message = {} }) => {
  const { created, body, user } = message
  return (
    <div className='chatField__chatScrollViewCell'>
      <img
        src={require("/Users/admin/Chat/chat-app/src/resources/avatar.png")}
        alt=''
        width="40"
        height="40"
      />
      <div className='chatField__messageInfo'>
        <div className='name' >{user.name}</div>
        <div className='time'>{new Intl.DateTimeFormat("en-GB", { hour: "numeric", minute: "numeric" }).format(new Date(created))}</div>
        <div className='message' >{body}</div>
      </div>
    </div>
  )
}