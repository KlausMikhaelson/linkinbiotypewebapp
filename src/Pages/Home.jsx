import React from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../assets/profile2.jpeg";
import "./Home.css"

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "77vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="bg-blue-500"
      >
        <img src={Profile} style={{height: "120px", borderRadius: "20px"}}/>
        <h1 style={{ fontFamily: "cursive" }}>Klaus</h1>
        <p
          style={{
            alignItems: "center",
            display: "flex",
            fontFamily: "cursive",
          }}
        >
          Dev <a style={{textDecoration: "none", fontStyle: "normal", color: "black"}} target="_blank" href="https://push.org">@PushProtocol(previously EPNS)</a>
        </p>
        <p
          style={{
            alignItems: "center",
            display: "flex",
            fontFamily: "cursive",
          }}
        >
          15+ Hackathon Winner
        </p>
        <p
          style={{
            alignItems: "center",
            display: "flex",
            fontFamily: "cursive",
          }}
        >
          Upcoming Freshman<a style={{textDecoration: "none", fontStyle: "normal", color: "black"}} target="_blank" href="https://uregina.ca">@UofRegina</a>
        </p>
        <p
          style={{
            alignItems: "center",
            display: "flex",
            fontFamily: "cursive",
          }}
        >
          Generalist | Builder
        </p>
      </div>
    </div>
  );
};

export default Home;
