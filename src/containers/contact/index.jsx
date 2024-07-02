import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";

import { RiContactsFill } from "react-icons/ri";
import { Animate } from "react-simple-animate";
import "./styles.scss";


const Contact = ({toggleIcon}) => {
  return (
    <section id="contact" className={`contact ${toggleIcon ? 'activecontact' : ''}`}>
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={35} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlWrapper">
              <div className="nameWrapper">
                <input required type="text" name="name" className="inputName" />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div className="emailWrapper">
                <input
                  required
                  type="text"
                  name="email"
                  className="inputEmail"
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div className="descriptionWrapper">
                <textarea
                  required
                  type="text"
                  name="description"
                  className="inputDescription"
                  rows={'5'}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
