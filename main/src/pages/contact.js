import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import { Link } from "react-router-dom";
import "./home.css";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Orenda-box Team",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_x79k5b6", "template_w0fbo2g", toSend, "wNZAD4KmRKy2oTh3J")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

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
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="from name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="to_name"
          placeholder="to name"
          value={toSend.to_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <br></br>
      <div class="color"></div>
      <br></br>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default Contact;
