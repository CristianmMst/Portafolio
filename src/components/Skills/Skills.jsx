import styles from "./Skills.module.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { FaSass, FaReact, FaNodeJs } from "react-icons/fa";
import { DiCss3Full, DiNpm } from "react-icons/di";
import { SiJavascript, SiRedux, SiPostgresql } from "react-icons/si";
import { Fade } from "react-awesome-reveal";
import { Element } from "react-scroll";

const Skills = () => {
  const skills = [
    { name: "hmtl", icon: <AiFillHtml5 className={styles.icon} /> },
    { name: "Css", icon: <DiCss3Full className={styles.icon} /> },
    { name: "JavaScript", icon: <SiJavascript className={styles.icon} /> },
    { name: "sass", icon: <FaSass className={styles.icon} /> },
    { name: "react", icon: <FaReact className={styles.icon} /> },
    { name: "Redux", icon: <SiRedux className={styles.icon} /> },
    { name: "nodeJS", icon: <FaNodeJs className={styles.icon} /> },
    { name: "SQL", icon: <SiPostgresql className={styles.icon} /> },
    { name: "npm", icon: <DiNpm className={styles.icon} /> },
  ];
  return (
    <Element name="skills" className={styles.skills}>
      <Fade direction="up" duration={2000}>
        <div className={styles.tittle}>
          <div>
            <h1>Mis Habilidades</h1>
            <div className={styles.subline}></div>
          </div>
        </div>
      </Fade>
      <div className={styles.iconsContainer}>
        {skills.map((i, index) => {
          const num = index + 1;
          return (
            <Fade
              direction={num % 2 === 1 ? "up" : "left"}
              duration={2000 + index * 100}
              delay={500 + index * 100}
              key={index}
            >
              <div key={index} className={styles.icons}>
                {i.icon}
                <p>{i.name}</p>
              </div>
            </Fade>
          );
        })}
      </div>
    </Element>
  );
};

export default Skills;
