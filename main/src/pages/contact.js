import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Contact = () => {
  return (
    <div class="content">
      <img
        src={require("../images/drawing-transparent.png")}
        alt="Orenda-box icon"
      />
      <div id="item">
        <div id="highlight"></div>
        <span>Orenda-box</span>
        <div id="text"></div>
      </div>
      <br></br>
      <div class="color"></div>
      <br></br>
      <div class="intro">Contact us</div>
      <br></br>
      <div class="color"></div>
      <br></br>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default Contact;
