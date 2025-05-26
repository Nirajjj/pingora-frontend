import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";
import { AuthContext } from "../context/authContext";

const Header = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="header">
      <div className="left">
        <h1 className="app-name">Pingora</h1>
      </div>

      {isAuthenticated && (
        <div className="right">
          <div className="profile-container" onClick={handleDropdown}>
            <img
              src={user?.profileImage || "/default-avatar.png"}
              alt="Profile"
              className="profile-img"
            />
            {dropdownOpen && (
              <ul className="dropdown">
                <li>
                  <ThemeToggle />
                </li>
                <li>
                  <button className="create-group">Create Group</button>
                </li>

                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
