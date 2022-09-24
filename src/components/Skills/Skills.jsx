import styles from "./Skills.module.scss";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faSass,
  faNodeJs,
  faHtml5,
  faCss3,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = ({ skill }) => {
  const skills = [
    { name: "hmtl", icon: faHtml5 },
    { name: "Css", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "sass", icon: faSass },
    { name: "react", icon: faReact },
    { name: "nodeJS", icon: faNodeJs },
    { name: "SQL", icon: faDatabase },
    { name: "npm", icon: faNpm },
  ];
  return (
    <section ref={skill} className={styles.skills}>
      <Fade direction="down" duration={2000}>
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
                <FontAwesomeIcon className={styles.icon} icon={i.icon} />
                <p>{i.name}</p>
              </div>
            </Fade>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
