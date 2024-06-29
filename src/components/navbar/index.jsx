import React from "react";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";
const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Me",
    to: "/about",
  },
  {
    label: "Skills",
    to: "/skills",
  },
  {
    label: "Resume",
    to: "/resume",
  },
  {
    label: "Projects",
    to: "/portfolio",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const Navbar = ({ handleToggleIcon, toggleIcon }) => {
  // const [toggleIcon, setToggleIcon] = useState(false);
  // const handleToggleIcon =()=>{
  //   setToggleIcon(!toggleIcon);
  // }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30}></FaReact>
            {/* Seyam Ibrahim */}
          </Link>
        </div>

        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => {
            return (
              <li key={key} className="navbar__container__menu__item">
                <Link
                  className="navbar__container__menu__item__links"
                  to={item.to}
                  onClick={handleToggleIcon}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={25} /> : <FaBars size={25} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
