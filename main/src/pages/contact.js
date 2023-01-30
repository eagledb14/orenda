import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Contact = () => {
  return (
    <div class="content">
      <div>Icon</div>
      <div id="item">
        <div id="highlight"></div>
        <span>Orenda-box</span>
        <div id="text"></div>
      </div>
      <br></br>
      <div class="color"></div>
      <br></br>
      <div class="info">Contact us</div>
      <br></br>
      <div class="color"></div>
      <br></br>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default Contact;
