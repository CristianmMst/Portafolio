import styles from "./Projects.module.scss";
import appSalud from "../../assets/appSalud.svg";
import dogsApp from "../../assets/dogsApp.png";
import { Fade } from "react-awesome-reveal";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element name="projects" className={styles.projects}>
      <Fade direction="up" duration={2000}>
        <div className={styles.tittle}>
          <div>
            <h1>Proyectos</h1>
            <div className={styles.subline}></div>
          </div>
        </div>
      </Fade>
      <div className={styles.containerCard}>
        <div className={styles.card}>
          <div className={styles.cardItem}>
            <Fade direction="left" duration={2000}>
              <h1>Más Salud</h1>
              <p>
                App para la gestión de Historias Clinica que incluya además de
                búsquedas, filtros y ordenamientos, 3 tipos de usuario: User
                paciente, User medico - User admin Integración pasarela (Mercado
                Pago), auth0, notificaciones por email, administracion de
                usuários, dashboard, Metodología SCRUM, Tecnologías: Lenguaje:
                JavaScript, PostgreSQL - Sequelize - Node Js - Express - React -
                Redux. Estilos: CSS, Boostrap
              </p>
            </Fade>
            <div style={{ marginTop: "2rem" }}>
              <a
                style={{ marginRight: "10px" }}
                href="https://app-clinica.vercel.app"
                target="_blank"
                className={styles.btn}
              >
                ver pagina
              </a>
              <a
                href="https://github.com/Ivan18Gauna/app-clinica"
                target="_blank"
                className={styles.btn}
              >
                ver Codigo
              </a>
            </div>
          </div>
          <Fade direction="right" duration={2000}>
            <img src={appSalud} alt="appSalud" />
          </Fade>
        </div>
        <div className={styles.card}>
          <div className={styles.cardItem}>
            <Fade direction="left" duration={2000}>
              <h1>Dogs-App</h1>
              <p>
                Diseñar y desarrollar una App de perros que incluía: búsquedas,
                filtrados, ordenamientos y creación.Desarrollar la app usando
                para el Front React, Redux, CSS puro y Back desarrollado en
                Node.js con Express. Base de datos en PostgreSQL y Sequelize.
                Deploy realizado con Heroku y Vercel.
              </p>
            </Fade>
            <div style={{ marginTop: "2rem" }}>
              <a
                style={{ marginRight: "10px" }}
                href="https://client-dogs.vercel.app"
                target="_blank"
                className={styles.btn}
              >
                ver pagina
              </a>
              <a
                href="https://github.com/CristianmMst/PI-Dogs"
                target="_blank"
                className={styles.btn}
              >
                ver Codigo
              </a>
            </div>
          </div>
          <Fade direction="right" duration={2000}>
            <img src={dogsApp} alt="dogsApp" />
          </Fade>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
