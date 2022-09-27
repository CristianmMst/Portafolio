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
            Busco formar parte de una empresa que me permita aplicar todos mis
            conocimientos, asi como mi capacidad de planificación, organización
            y dirección del funcionamiento de una empresa en compañias afines.
            que me brinde la oportunidad de crecer en el área laboral, personal
            e intelectual.
          </p>
        </Fade>
      </div>
    </Element>
  );
};

export default About;
