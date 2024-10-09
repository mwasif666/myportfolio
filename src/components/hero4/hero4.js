import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import ProgressTracker from "../ProgressTracker/ProgressTracker";

const hero4 = () => {
  return (
    <section className="hero-section" id="top">
      <Link to="/" className="logo">
        <img src={Logo} alt="" />
      </Link>
      <ul className="socal-icon s2">
        <li>
          <Link to="#">
            <i className="ti-facebook"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="ti-twitter-alt"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="ti-linkedin"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="ti-instagram"></i>
          </Link>
        </li>
      </ul>

      <div className="hero-wrap">
        <div className="section-top-content">
          <h2 className="poort-text poort-in-right">Introduction</h2>
          <h3 className="poort-text poort-in-right">
            Say Hi from Muhammad Wasif, Designer and Developer
          </h3>
          <p>
            I am an innovative front-end developer with 2 year of experience,
            skilled in converting PSD designs to HTML, CSS, and WordPress. I
            specialize in Bootstrap, JavaScript, and React JS/Next Js, focusing
            on creating user-friendly and visually appealing websites.
          </p>
        </div>
        <div className="line-shape"></div>
        <ProgressTracker />
      </div>
    </section>
  );
};

export default hero4;
