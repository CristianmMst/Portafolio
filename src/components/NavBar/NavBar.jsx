import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#about">sobre mí</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
