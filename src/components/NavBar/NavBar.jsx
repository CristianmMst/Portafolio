import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li className={styles.item}>
            <a href="#about">sobre mí</a>
          </li>
          <li className={styles.item}>
            <a href="#projects">Proyectos</a>
          </li>
          <li className={styles.item}>
            <a href="#skills">Habilidades</a>
          </li>
          <li className={styles.item}>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
