import React from "react";
import MyNavbar from "./MyNavbar";
import './aboutus.css';

function AboutUS() {
  return (
    <>
      <MyNavbar />
      <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>We are a team of passionate developers dedicated to creating high-quality software solutions.</p>
      </div>
      <div className="about-us-content">
        <h2>Our Mission</h2>
        <p>Our mission is to provide our clients with the best possible solutions to their business needs, through the use of cutting-edge technology and innovative thinking.</p>
        <h2>Our Team</h2>
        <p>Our team is made up of experienced developers, designers, and project managers, all with a shared passion for creating software that makes a difference.</p>
      </div>
    </div>
    </>
  );
}

export default AboutUS;
