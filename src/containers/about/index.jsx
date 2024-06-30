import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { FaReact,FaDatabase } from "react-icons/fa";

import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import "./styles.scss";
const About = () => {
  const personalDetails = [
    {
      label: "Name :",
      value: "Seyam Ibrahim",
    },
    {
      label: "Age :",
      value: "21",
    },
    {
      label: "Address :",
      value: "India",
    },
    {
      label: "Email :",
      value: "seyamibrahim88@gmail.com",
    },
    {
      label: "Contact No. :",
      value: "+91 7055653997",
    },
  ];

  const jobSummary =
    "Experienced Full-Stack Developer with a proven track record of designing and implementing high-quality web applications. Proficient in front-end technologies such as HTML, CSS, JavaScript, and frameworks like React. Skilled in back-end development with expertise in Node.js and Java, as well as database management using SQL and NoSQL databases like MySQL and MongoDB. Adept at collaborating with cross-functional teams to deliver robust, scalable, and user-friendly solutions. Strong problem-solving skills and a commitment to continuous learning and professional development.";
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={25} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translatex(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translatex(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInfo">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => {
                return (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translatex(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
          <div className="about__content__servicesWrapper__innerContent">

            <div>
              <FaDatabase size={50} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <SiExpress size={50} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaReact size={50} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <IoLogoNodejs size={50} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
