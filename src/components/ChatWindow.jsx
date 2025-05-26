import React, { useState } from "react";
import "./ChatWindow.css";

const ChatWindow = ({ selectedChat }) => {
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle sending message
      setMessage("");
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h2>{selectedChat.name}</h2>
      </div>
      <div className="messages">
        {/* Messages will be rendered here */}
      </div>
      <form className="message-input" onSubmit={handleSend}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;
