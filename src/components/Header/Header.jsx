import styles from "./Header.module.scss";
import arrowDown from "../../assets/arrowDown.svg";
import { Element } from "react-scroll/modules";

const Header = () => {
  return (
    <Element name="home" className={styles.home}>
      <div>
        <h1>Mora Cristian</h1>
        <h2>Full-Stack developer</h2>
      </div>
      <button className={styles.btn} type="button">
        <a href="#about">
          <img src={arrowDown} alt="arrowDown" />
        </a>
      </button>
    </Element>
  );
};

export default Header;
