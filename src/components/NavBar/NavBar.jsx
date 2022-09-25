import styles from "./NavBar.module.scss";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const NavBar = ({
  home,
  about,
  projects,
  skills,
  contact,
  scrollToSection,
}) => {
  return (
    <>
      <nav>
        <ul>
          <li className={styles.item}>
            <Link to="home">Inicio</Link>
          </li>
          <li className={styles.item}>
            <Link to="about">Sobre mí</Link>
          </li>
          <li className={styles.item}>
            <Link to="projects">Proyectos</Link>
          </li>
          <li className={styles.item}>
            <Link to="skills">Habilidades</Link>
          </li>
          <li className={styles.item}>
            <Link to="contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
