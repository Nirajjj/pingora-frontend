import React, { useContext } from "react";
import "./Sidebar.css";
import { AuthContext } from "../context/authContext";

const Sidebar = ({ selectedChat, setSelectedChat }) => {
  const { chat } = useContext(AuthContext);

  // const modifiedChats = chat.map((chat)=>{
  //   return {
  //     _id: chat._id,
  //     name: chat.isGroupChat ? chat.name : chat.users[1].name,

  //   }
  // })
  // const chats = [
  //   { id: 1, name: "Alice", lastMessage: "Hello there!" },
  //   { id: 2, name: "Bob", lastMessage: "How are you?" },
  //   // Add more chats as needed
  // ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <input type="text" placeholder="Search chats..." />
      </div>
      <div className="chat-list">
        {chat.map((chat) => (
          <div
            key={chat._id}
            className={`chat-item ${
              selectedChat?._id === chat._id ? "active" : ""
            }`}
            onClick={() => setSelectedChat(chat)}
          >
            <div className="chat-item-name">
              {chat.isGroupChat === true ? chat.name : chat.users[1].name}
            </div>
            <div className="chat-item-message">{chat.lastMessage || ""}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
