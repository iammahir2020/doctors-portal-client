import React from "react";
import { NavLink } from "react-router-dom";
import footerBG from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <div
      style={{
        background: `url(${footerBG})`,
      }}
    >
      <footer class="footer p-10 text-accent">
        <div>
          <span class="footer-title">Services</span>
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
        <div>
          <span class="footer-title">Oral Health</span>
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
        <div>
          <span class="footer-title">Our Address</span>
          <p>New York - 10100100 Hudson</p>
        </div>
      </footer>
      <p className="text-accent font-medium text-center py-5">
        Copyright 2022 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
