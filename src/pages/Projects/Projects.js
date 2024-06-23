import React from "react";
import Bounce from "react-reveal/Bounce";
import Rubberband from "react-reveal/RubberBand";
import "./Projects.css";
// import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <Rubberband>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>

        <hr />
        <p className="pb-3 text-center">
        <h4>👉 Here are My top6 recent projects with live links and source code</h4>
        </p>
        </Rubberband>
        {/* card design */}
        <div className="row" id="ads">
          <Bounce>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="Project1.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Portfolio Website
                    </h5>
                  </div>
                  {/* <Link className="ad-btn" to="https://github.com/Hitesh060201/Hitesh-Portfolio-c">
                    View
                  </Link> */}
                  <a
                    className="ad-btn"
                    href="https://my-portfolio-using-mern.onrender.com/" >
                    View
                    </a>
                    
                     {/* // href="https://github.com/Hitesh060201/Hitesh-Portfolio-c"
                  // > */}
                  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Android App</span>
                  <img
                    src="Project2.jpg"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">XML</span>
                  <span className="card-detail-badge">Kotlin</span>

                  <span className="card-detail-badge">Android</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Food Delivery App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Hitesh060201/FoodRunner"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="Project3.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>

                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Connect Four Game</h5>
                  </div>
                  <a className="ad-btn" href="https://hitesh060201.github.io/connect-four-game/">
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="Project4.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                  
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      E-Commerce UI
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://hitesh060201.github.io/E-commerce-Ui/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">BlockChain</span>
                  <img
                    src="Project5.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge ">React</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Solidity</span>
                  <span className="card-detail-badge">Ethereum</span>
                  
                  
                  
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      PDS Using BlockChain
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Hitesh060201/PADDY-PROCUREMENT-SYSTEMs"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* travel and tour */}
            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="Project6.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge ">React</span>
                  <span className="card-detail-badge">SCSS</span>
                  
                  
                  
                  
                  
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      TRAVEL AND TOUR UI
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Hitesh060201/TRAVEL-AND-TOUR-WEBSITE-USING-REACT"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            </Bounce>
        </div>
        
      </div>
    </>
  );
};

export default Projects;
