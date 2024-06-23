import React, { useState } from "react";
import './MobileNav.css'
import { AiOutlineMenuFold } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-scroll';
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcTimeline } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";

import { FcContacts } from "react-icons/fc";

import Fade from 'react-reveal/Fade';
const MobileNav = () => {
    const [open, setOpen] = useState(false);

  //handle open
  const handleOpen = () => {
    setOpen(!open);
  };

  // handle menu clicks
  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
    <div className="mobile-nav">
        <div className="mobile-nav-header">
        {open ? (
            <AiOutlineMenuFold
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
            ) : (
            <GiHamburgerMenu size ={30} className="mobile-nav-icon" onClick={handleOpen} />
            )}
            <span className="mobile-nav-title">MY PORTFOLIO APP</span>
        </div>
        {open && (
        <div className="mobile-nav-menu">
        
  <Fade left>
  <div className="nav-items">
    <div className="nav-item">
      <div className="nav-link">
      <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
      <FcHome />
      Home
      </Link>
      </div>
      <div className="nav-link">
        <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={100}
        onClick={handleMenuClick}
      >
      <FcAbout />
      About
      </Link>
      </div>
      <div className="nav-link">
        <Link
        to="education"
        spy={true}
        smooth={true}
        offset={-100}
        duration={100}
        onClick={handleMenuClick}
      >
      <FcReadingEbook />
      Education
      </Link>
      </div>
      <div className="nav-link">
        <Link
         to="tech-stack"
         spy={true}
         smooth={true}
         offset={-100}
         duration={100}
         onClick={handleMenuClick}
       >
      <FcTimeline />
      Tech Stack
      </Link>
      </div>
      
      <div className="nav-link">
        <Link
        to="projects"
        spy={true}
        smooth={true}
        offset={-100}
        duration={100}
        onClick={handleMenuClick}
      >
      <FcVideoProjector />
      Projects
      </Link>
      </div>
      <div className="nav-link">
        <Link
        to="work"
        spy={true}
        smooth={true}
        offset={-100}
        duration={100}
        onClick={handleMenuClick}
      >
      <FcPortraitMode />
      Work Experience
      </Link>
      </div>
      <div className="nav-link">
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={100}
        onClick={handleMenuClick}
      >
      <FcContacts />
      Contact
      </Link>
      </div>
    </div>
  </div>
  </Fade>
        </div>
        )}
    </div>
    </>
  );
};

export default MobileNav