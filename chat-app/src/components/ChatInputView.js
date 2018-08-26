import React from "react";

const ChatInputView = ({ onSend = f => f }) => {
  let _messageText;
  const onSubmit = form => {
    form.preventDefault();
    onSend(_messageText.value);
    _messageText.value = "";
    _messageText.focus();
  };
  return (
    <form className="chatInputView" onSubmit={onSubmit}>
      <input
        ref={input => (_messageText = input)}
        type="text"
        className="form-control"
        placeholder="Type a message..."
      />
      <input type="submit" className="btn btn-light" value="Send" />
    </form>
  );
};

export default ChatInputView;
