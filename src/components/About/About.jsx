import styles from "./About.module.scss";
import foto from "../../assets/Foto.jpg";
import { Fade } from "react-awesome-reveal";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about" className={styles.about}>
      <Fade direction="up" duration={2000}>
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
            Hola soy Cristian, desarrollador web full-stack autonomo. Con
            experiencia diseño y desarrollo de aplicaciones web.
          </p>
        </Fade>
      </div>
    </Element>
  );
};

export default About;
