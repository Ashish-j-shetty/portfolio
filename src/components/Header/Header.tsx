import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { NavHashLink, HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="flex justify-between fixed top-0 left-0 w-full z-50 items-center py-7 px-10 bg-customblack backdrop-blur ">
      <Router>
        <HashLink smooth to="#home">
          <span>A</span>
          <span>Shetty</span>
        </HashLink>

        <nav className="flex items-center gap-7">
          <NavHashLink smooth to="#home" className="header-link">
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" className="header-link">
            About
          </NavHashLink>
          <NavHashLink smooth to="#portfolio" className="header-link">
            Portfolio
          </NavHashLink>
          <NavHashLink smooth to="#contact" className="header-link">
            Contact
          </NavHashLink>
          <a href="">
            <button className="header-link py-2 px-2 border-0 cursor-pointer">
              Resume
            </button>
          </a>
        </nav>
      </Router>
    </div>
  );
}
