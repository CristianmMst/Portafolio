import styles from "./About.module.scss";
import foto from "../../assets/Foto.jpg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div id="about" className={`${styles.about} about`}>
      <Fade top>
        <div className={styles.tittle}>
          <div>
            <h1>Sobre mí</h1>
            <div className={styles.subline}></div>
          </div>
        </div>
      </Fade>
      <div className={styles.paragraph}>
        <Fade left delay={500}>
          <img src={foto} alt="CristianMora" />
        </Fade>
        <Fade right delay={500}>
          <p>
            Mi campo de interés es la construcción de nuevas tecnologías y
            productos web y también en áreas relacionadas con Deep Learning y
            Natural Launguage Processing. Cuando es posible, también aplico mi
            pasión por el desarrollo de productos con Node.js y Librerías y
            Frameworks modernos de Javascript como React.js y Next.js.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default About;
