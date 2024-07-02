import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";

import { data } from "./utils";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./styles.scss";
import { MdCastForEducation } from "react-icons/md";
import { SiReactiveresume } from "react-icons/si";

const Resume = ({toggleIcon}) => {
  return (
    <section id="resume" className={`resume ${toggleIcon ? 'activeresume' : ''}`}>
      <PageHeaderContent
        headerText="My Resume"
        icon={<SiReactiveresume size={35}/>}
      />
      <div className="timeline">
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.map((item, i) => {
              return (
                <VerticalTimelineElement
                  key={i}
                  className="timeline__education__vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "white",
                    border: "1.5px solid white",
                  }}
                  icon={<MdCastForEducation />}
                  iconStyle={{
                    background: "black",
                    color: "var(--yellow-theme-main-color)",
                  }}
                >
                  <div className="vertical__timeline-element-title-wrapper">
                    <h1>{item.duration}</h1>
                    <h2>{item.title}</h2>
                    <p>{item.org}</p>
                    <p>{item.discription}</p>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
