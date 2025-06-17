import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Paras Sachdeva. All rights reserved.</p>
    </footer>
  );
};

export default Footer;