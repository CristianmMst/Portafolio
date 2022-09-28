import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="navbar">
      <div className="menu-mobile" onClick={handleClick}>
        {active ? (
          <FaTimes style={{ fontSize: "45px", padding: "10px" }} />
        ) : (
          <FaBars style={{ fontSize: "45px", padding: "10px" }} />
        )}
      </div>
      <ul className={`nav ${active ? "menu-mobile_active" : ""}`}>
        <li className="item">
          <Link
            activeClass="active"
            onClick={handleClick}
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Inicio
          </Link>
        </li>
        <li className="item">
          <Link
            activeClass="active"
            onClick={handleClick}
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Sobre mí
          </Link>
        </li>
        <li className="item">
          <Link
            activeClass="active"
            onClick={handleClick}
            to="projects"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Proyectos
          </Link>
        </li>
        <li className="item">
          <Link
            activeClass="active"
            onClick={handleClick}
            to="skills"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Habilidades
          </Link>
        </li>
        <li className="item">
          <Link
            activeClass="active"
            onClick={handleClick}
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
