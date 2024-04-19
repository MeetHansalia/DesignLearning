"use client";
import React, { useState } from "react";
import "./Navbar.css";

import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { transform } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="n-wrapper">
      {/*desktop version*/}
      <div className="container">
        <div className="n-container">
          {/*left side*/}
          <div className="n-logo">
            <span>Meet</span>
          </div>
          <div className="n-right">
            <div className="n-menu">
              <span>What we do</span>
              <span>How it works</span>
              <span>Who are we investing in </span>
              <span>Testimonials</span>
            </div>
            <div className="fund-button">Get funded</div>
          </div>
        </div>
      </div>
      {/*mobile devices version*/}
      <div className="nm-container">
        {/* logo */}
        <span>Meet</span>

        {/*menu icon */}
        {!mobileMenuOpen ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpen(false)} />
        )}
        
        {/* mobile menu*/}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpen && "translateX(0%)" }}
        >
          <span>What we do</span>
          <span>How it works</span>
          <span>Who are we investing in </span>
          <span>Testimonials</span>
          <div className="m-funded-button">Get Funded</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
