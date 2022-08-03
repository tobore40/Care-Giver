import React from "react";
import "./Footer.css";
import img1 from "../assets/fb.png";
import img2 from "../assets/inst.png";
import img3 from "../assets/whats.png";
import img4 from "../assets/Linkedin.png";

function Footer() {
  return (
    <div className="bottom">
      <section className="footer">
        <div className="social">
          <a href="/">
            <img src={img1} alt="" />
          </a>
          <a href="/">
            <img src={img2} alt="" />
          </a>
          <a href="/">
            <img src={img3} alt="" />
          </a>
          <a href="/">
            <img src={img4} alt="" />
          </a>
        </div>
        <ul className="list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <p className="copyright">
          Copyright &copy;2022 - Smooth Care - All Rights Reserved
        </p>
      </section>
    </div>
  );
}

export default Footer;
