import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

import Rubberband from "react-reveal/RubberBand"
const Education = () => {
  return (
    <>
    
      <div className=" education" id="education">
        <Rubberband>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        </Rubberband>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "Yellow", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  red" }}
            date="2020 - 2024"
            iconStyle={{ background: "hsl(101, 100%, 35%)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech In CSE</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Parala Maharaja Engineering College,Berhempur
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "Yellow", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  red" }}
            date="2017 - 2019"
            iconStyle={{ background: "hsl(101, 100%, 35%)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">12th</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kendriya Vidyalaya Berhampur
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "Yellow", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  red" }}
            date="2016 - 2017"
            iconStyle={{ background: "hsl(101, 100%, 35%)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">10th</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kendriya Vidyalaya Bhanjanagar
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      
    </>
  );
};

export default Education;
