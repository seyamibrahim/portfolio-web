import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
const Home = ({toggleIcon}) => {
  const navigate = useNavigate();

  const handleNavigatetoContact = () => {
    navigate("/contact");
  };

  return (
    <>
    
       <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Seyam Ibrahim
          <br />
          Full Stack Developer
        </h1>
      </div>
      <Animate play duration={1.5} delay={1} 
      start={{
        transform : "translateY(550px)"
      }} 
      end={{
        transform: "translatex(0px)"
      }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigatetoContact} className="btn">
            Hire Me
          </button>
        </div>
      </Animate>
    </section>

    
     
    </>
   
   
  );
};

export default Home;
