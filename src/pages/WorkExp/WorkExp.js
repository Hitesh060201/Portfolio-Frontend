import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
import Rubberband from "react-reveal/RubberBand"
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <Rubberband>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          </Rubberband>
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "Yellow", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023 - present"
              iconStyle={{ background: "hsl(101, 100%, 35%)", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Using MERN
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "Yellow", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2022 - 2023"
              iconStyle={{ background: "hsl(101, 100%, 35%)", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Android App  Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Using Kotlin,XML,Android studio
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "Yellow", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2020 - 2021"
              iconStyle={{ background: "hsl(101, 100%, 35%)", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Using HTML,CSS,JavaScript
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
