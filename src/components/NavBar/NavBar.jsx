import "./NavBar.scss";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="item">
          <Link
            activeClass="active"
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
