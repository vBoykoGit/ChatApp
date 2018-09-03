import React from "react";

export const ChatInfo = ({ title = 'Channel title', onClick = f => f }) =>
    <div className="chatInfo" onClick={onClick}>
        <p> {title} </p>
    </div>