import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Made with ❤️ by Pingora Team</p>
      <p>&copy; {new Date().getFullYear()} Pingora. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
