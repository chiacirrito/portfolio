import Link from "next/link";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhoneVolume,
} from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
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
        <Link href={"mailto:chiara.cirrito1602@gmail.com"}>
          <li>
            <SiMaildotru />
          </li>
        </Link>
        <Link href={"tel:+393895578295"}>
          <li>
            <FaPhoneVolume />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Social;
