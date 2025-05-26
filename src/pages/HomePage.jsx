import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import "./Homepage.css";

const HomePage = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  return (
    <div className="chat-container">
      <Sidebar selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
      {selectedChat ? (
        <ChatWindow selectedChat={selectedChat} />
      ) : (
        <div className="welcome-screen">
          <h1>Welcome to Pingora</h1>
          <p>Select a chat to start messaging</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
