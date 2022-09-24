import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

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
          <li onClick={() => scrollToSection(home)} className={styles.item}>
            <NavLink to={""}>Inicio</NavLink>
          </li>
          <li onClick={() => scrollToSection(about)} className={styles.item}>
            <NavLink to={""}>sobre mí</NavLink>
          </li>
          <li onClick={() => scrollToSection(projects)} className={styles.item}>
            <NavLink to={""}>Proyectos</NavLink>
          </li>
          <li onClick={() => scrollToSection(skills)} className={styles.item}>
            <NavLink to={""}>Habilidades</NavLink>
          </li>
          <li onClick={() => scrollToSection(contact)} className={styles.item}>
            <NavLink to={""}>Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
