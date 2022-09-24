import styles from "./Header.module.scss";
import arrowDown from "../../assets/arrowDown.svg";

const Header = ({ home }) => {
  return (
    <header ref={home} id="home">
      <div>
        <h1>Mora Cristian</h1>
        <h2>Full-Stack developer</h2>
      </div>
      <button className={styles.btn} type="button">
        <a href="#about">
          <img src={arrowDown} alt="arrowDown" />
        </a>
      </button>
    </header>
  );
};

export default Header;
