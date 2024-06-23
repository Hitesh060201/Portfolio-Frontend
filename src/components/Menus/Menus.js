import React from 'react'
import './Menus.css';
import { Link } from 'react-scroll';
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcTimeline } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";

import { FcContacts } from "react-icons/fc";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const Menus = ({isSidebarOpen}) => {
  return (
    <>
    {isSidebarOpen ?(
      <>
      <Zoom>
     <div className="navbar-profile-pic">
     <img src='Profile.jpg' alt='profile pic'></img>
  </div>
  </Zoom>
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
      >
      <FcContacts />
      Contact
      </Link>
      </div>
    </div>
  </div>
  </Fade>
  </>
    ):
    (
      <>
      <Fade top>
      <div className="nav-items">
    <div className="nav-item">
      <div className="nav-link">
      <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
      <FcHome  title='Home'/>
      </Link>
      </div>
      <div className="nav-link">
      <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
      <FcAbout title='About'/>
     </Link>
      </div>
      <div className="nav-link">
      <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
      <FcReadingEbook  title='Education'/>
      </Link>
      </div>
      <div className="nav-link">
      <Link
         to="tech-stack"
         spy={true}
         smooth={true}
         offset={-100}
         duration={100}
       >
      <FcTimeline  title='Tech Stack'/>

      </Link>
      
      
      </div>
      <div className="nav-link">
      <Link
         to="projects"
         spy={true}
         smooth={true}
         offset={-100}
         duration={100}
       >
      <FcVideoProjector  title='Projects'/>
      </Link>
      </div>
      <div className="nav-link">
      <Link
         to="work"
         spy={true}
         smooth={true}
         offset={-100}
         duration={100}
       >
      <FcPortraitMode title='Work Experience' />
      </Link>
      
      </div>
      <div className="nav-link">
      <Link
         to="contact"
         spy={true}
         smooth={true}
         offset={-100}
         duration={100}
       >
      <FcContacts title='Contact'/>
      </Link>
      </div>
    </div>
  </div>
  </Fade>
      </>
    )}
     
    </>
  )
}

export default Menus