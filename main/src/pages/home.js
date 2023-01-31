import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
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
      <div class="intro">
        Bringing cloud computing to your workspace. Get all the positives of
        having cheap computers without sacrificing the key programs that make
        your offic run.
      </div>
      <br></br>
      <div class="box-image">
        <img src={require("../images/box2.png")} alt="Orenda-box" />
      </div>
      <br></br>
      <div>
        <p>more information</p>
        <ul>
          <li>one time purchase</li>
          <li>monthly subscription</li>
          <li>free updates</li>
          <li>free repairs</li>
        </ul>
      </div>
      <br></br>
      <div class="color"></div>
      <br></br>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
};

export default Home;
