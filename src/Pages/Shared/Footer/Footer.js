import React from "react";
import { NavLink } from "react-router-dom";
import footerBG from "../../../assets/images/footer1.png";

const Footer = () => {
  return (
    <div
      style={{
        background: `url(${footerBG})`,
        backgroundSize: "cover",
      }}
    >
      <footer className="footer p-10 text-accent max-w-7xl mx-auto">
        <div className="md:mx-auto">
          <span className="footer-title">Services</span>
          <NavLink to="/" className="link link-hover">
            Emergency Checkup
          </NavLink>
          <NavLink to="/" className="link link-hover">
            Monthly Checkup
          </NavLink>
          <NavLink to="/" className="link link-hover">
            Weekly Checkup
          </NavLink>
          <NavLink to="/" className="link link-hover">
            Deep Checkup
          </NavLink>
        </div>
        <div className="md:mx-auto">
          <span className="footer-title">Oral Health</span>
          <NavLink to="/" className="link link-hover">
            Flouride Treatment
          </NavLink>
          <NavLink to="/" className="link link-hover">
            Cavity Filling
          </NavLink>
          <NavLink to="/" className="link link-hover">
            Teath Whitening
          </NavLink>
        </div>
        <div className="md:mx-auto">
          <span className="footer-title">Our Address</span>
          <p>New York - 10100100 Hudson</p>
        </div>
      </footer>
      <div className="footer-center py-4">
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
