import React from "react";

export const ChatInfo = ({ title = 'Channel title', onClick = f => f }) =>
    <div onClick={onClick}>
        <p> {title} </p>
    </div>