import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";

import imageOne from "../../images/image1.png";
import imageTwo from "../../images/image2.png";
import imageThree from "../../images/image3.png";
import imageFour from "../../images/image4.png";
import imageFive from "../../images/image5.png";
import imageSix from "../../images/image6.png";
import { GoProjectSymlink } from "react-icons/go";
import "./styles.scss";
import { Link } from "react-router-dom";

const portfolioData = [
  {
    id: 3,
    name: "Crest App",
    image: imageOne,
    link: "https://crest-project.vercel.app/",
  },
  {
    id: 2,
    name: "Dance Academy",
    image: imageSix,
    link: "https://github.com/seyamibrahim/Dance-Academy",
  },
  {
    id: 2,
    name: "Todo App",
    image: imageTwo,
    link: "https://github.com/seyamibrahim/todo-list",
  },
  {
    id: 3,
    name: "Bootstrap",
    image: imageThree,
    link: "https://github.com/seyamibrahim/iCoder-Bootstrap",
  },
  {
    id: 3,
    name: "About Me",
    image: imageFour,
    link: "",
  },
  {
    id: 2,
    name: "iCoder App",
    image: imageFive,
    link: "",
  },
];
const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
];
const Portfolio = ({toggleIcon}) => {
  const [filteredValue, setFilteredValue] = useState(1);

  const [hoveredValue, setHoveredValue] = useState(null);
  const hanldeHover = (index) => {
    setHoveredValue(index);
  };
  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };
  console.log("...........................");
  console.log(filteredValue);
  console.log("/////////////////////////////////");

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);
  return (
    <section id="portfolio" className={`portfolio ${toggleIcon ? 'activeportfolio' : ''}`}>
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<GoProjectSymlink size={30} />}
      />
      <div className="porfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => {
            return (
              <li
                onClick={() => handleFilter(item.filterId)}
                key={item.filterId}
                className={item.filterId === filteredValue ? "active" : ""}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={`cardItem ${item.name}`}
                onMouseEnter={() => hanldeHover(index)}
                onMouseLeave={() => hanldeHover(null)}
                className="portfolio__content__cards__item"
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a href="/">
                    <img src={item.image} alt="dummy data" />
                  </a>
                </div>
                <div className="overlay">
                  {index === hoveredValue && (
                    <div>
                      <p>{item.name}</p>

                      <Link to={item.link}>
                        <button>Visit</button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
