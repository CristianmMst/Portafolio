import styles from "./About.module.scss";
import foto from "../../assets/Foto.jpg";
import { Fade } from "react-awesome-reveal";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about" className={styles.about}>
      <Fade direction="up" duration={3000}>
        <div className={styles.tittle}>
          <div>
            <h1>Sobre mí</h1>
            <div className={styles.subline}></div>
          </div>
        </div>
      </Fade>
      <div className={styles.paragraph}>
        <Fade direction="left" duration={2000}>
          <img className={styles.img} src={foto} alt="CristianMora" />
        </Fade>
        <Fade direction="right" duration={2000}>
          <p className={styles.paragraphAbout}>
            Mi campo de interés es la construcción de nuevas tecnologías y
            productos web y también en áreas relacionadas con Deep Learning y
            Natural Launguage Processing. Cuando es posible, también aplico mi
            pasión por el desarrollo de productos con Node.js y Librerías y
            Frameworks modernos de Javascript como React.js y Next.js.
          </p>
        </Fade>
      </div>
    </Element>
  );
};

export default About;
