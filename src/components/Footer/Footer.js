import React from "react";
import EmailBox from "../EmailBox/EmailBox";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Get Funded Today</span>
          <EmailBox />

          <hr />
          <div className="f-menu">
            <span>Home</span>
            <span>What we do</span>
            <span>How it works</span>
            <span>Who we Invest in</span>
            <span>Testimonials</span>
          </div>

          <hr />
          <span className="text">Made By Meet Hansalia</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
