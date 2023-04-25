import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div>
    <div className="header_container">
      <div className="header_left">
        <img
          onClick={() => navigate(`/`)}
          width="140px"
          src="https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/logo%20perception%201.png?alt=media&token=b194c3f9-c8b3-40b7-8ea5-87b8fc2a2659"
          alt="logo"
        />
      </div>
      <div className="header_right">
        <span onClick={() => navigate(`/`)} className="list">
          Home
        </span>
        <span onClick={() => navigate(`/contactUs`)} className="list">
          Contact Us
        </span>
        <button onClick={() => navigate(`/login`)}>Get Started</button>
      </div>
    </div>
    </div>
  );
}

export default Header;
