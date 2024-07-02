import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";

import { skillsData } from "../home/utils";
import { Line } from "rc-progress";
import "./styles.scss";
import { Animate } from "react-simple-animate";
import { GiSkills } from "react-icons/gi";
const Skills = ({toggleIcon}) => {
  return (
    <section id="skills" className={`skills ${toggleIcon ? 'activeskills' : ''}`}>
      <PageHeaderContent
        headerText="My Skills"
        icon={<GiSkills size={35} />}
      />

      <div className="skills__content__wrapper">
        {skillsData.map((item, i) => {
          return (
            <Animate
              play
              duration={.8}
              delay={0}
              start={{
                transform: "translatex(-200px)",
              }}
              end={{
                transform: "translatex(0px)",
              }}
            >
              <div key={i} className="skills__content__wrapper__inner-content">
                <h1>{item.skillName}</h1>
                <Line
                  percent={item.percentage}
                  strokeColor="var(--yellow-theme-main-color)"
                  strokeWidth="1"
                  trailWidth="2"
                  strokeLinecap="square"
                ></Line>
              </div>
            </Animate>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
