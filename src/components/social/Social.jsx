import Link from "next/link";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "./index.module.scss";

const Social = () => {
  return (
    <div className={styles.Social}>
      <ul>
        <Link href={"https://github.com/chiacirrito"}>
          <li>
            <FaGithub />
          </li>
        </Link>
        <Link href={"https://www.linkedin.com/in/chiara-cirrito-90a2021b7/"}>
          <li>
            <FaLinkedin />
          </li>
        </Link>
        <Link href={"https://www.facebook.com/chiara.cirrito.7/"}>
          <li>
            <FaFacebook />
          </li>
        </Link>
        <Link href={"https://www.instagram.com/chiarac16/"}>
          <li>
            <FaInstagram />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Social;
