import styles from "./NavBar.module.scss";
import { useRef } from "react";

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
            Inicio
          </li>
          <li onClick={() => scrollToSection(about)} className={styles.item}>
            sobre mí
          </li>
          <li onClick={() => scrollToSection(projects)} className={styles.item}>
            Proyectos
          </li>
          <li onClick={() => scrollToSection(skills)} className={styles.item}>
            Habilidades
          </li>
          <li onClick={() => scrollToSection(contact)} className={styles.item}>
            Contacto
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
