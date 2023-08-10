import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 15px",
        fontFamily: "cursive",
      }}
    >
      <a target="_blank" style={{textDecoration: "none", color: "black", fontFamily: "cursive"}} href="https://resume.com">Resume</a>
      <a target="_blank" style={{textDecoration: "none", color: "black", fontFamily: "cursive"}} href="https://calendly.com">Calendly</a>
    </div>
  );
};

export default Footer;
