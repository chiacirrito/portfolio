import styles from "./index.module.scss";
import { FaHandHoldingHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <p>
        Made with <FaHandHoldingHeart />
      </p>
    </div>
  );
};

export default Footer;
