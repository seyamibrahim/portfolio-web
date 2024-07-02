import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import mycv from '../../mycv/seyam_resume.pdf'




const Home = ({toggleIcon}) => {


  const navigate = useNavigate();

  const handleNavigatetoContact = () => {
    navigate("/contact");
  };


  return (
    <>
    <section id="home" className={`home ${toggleIcon ? 'activehome' : ''}`}>
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Seyam Ibrahim
          <br />
          Full Stack Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigatetoContact} className="btn">
            Hire Me
          </button>

          <a href={mycv} target="_blank"
                  rel="noreferrer">
            <button className="btn btn2">My CV</button>
          </a>
        </div>
      </Animate>
    </section>
    </>
  );
};

export default Home;
