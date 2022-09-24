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
            <a href="#home">Inicio</a>
          </li>
          <li onClick={() => scrollToSection(about)} className={styles.item}>
            <a href="#about">sobre mí</a>
          </li>
          <li onClick={() => scrollToSection(projects)} className={styles.item}>
            <a href="#projects">Proyectos</a>
          </li>
          <li onClick={() => scrollToSection(skills)} className={styles.item}>
            <a href="#skilld">Habilidades</a>
          </li>
          <li onClick={() => scrollToSection(contact)} className={styles.item}>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
