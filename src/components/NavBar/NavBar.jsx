import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#about">Acerca de mi</a>
          </li>
          <li>
            <a href="#proyects">Proyectos</a>
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
