import styles from "./Header.module.scss";
import arrowDown from "../../assets/arrowDown.svg";
import { Element } from "react-scroll/modules";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <Element name="home" className={styles.home}>
      <div>
        <h1>
          Mora <br></br> Cristian
        </h1>
        <h2>Full-Stack developer</h2>
      </div>
      <button className={styles.btn} type="button">
        <Link spy={true} smooth={true} duration={1000} to="about">
          <img src={arrowDown} alt="arrowDown" />
        </Link>
      </button>
    </Element>
  );
};

export default Header;
