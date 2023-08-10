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
      <a target="_blank" style={{textDecoration: "none", color: "black", fontFamily: "cursive"}} href="https://drive.google.com/file/d/1weKlmHTq5_7qo6S2qLtKuho1PgcClAxD/view?usp=sharing">Resume</a>
      <a target="_blank" style={{textDecoration: "none", color: "black", fontFamily: "cursive"}} href="https://calendly.com/klausss/30min">Calendly</a>
    </div>
  );
};

export default Footer;
