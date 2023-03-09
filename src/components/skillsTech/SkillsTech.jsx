import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaWordpress,
  FaSass,
  FaAws,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiWoocommerce,
  SiJavascript,
  SiMysql,
  SiPhpmyadmin,
} from "react-icons/si";

import styles from "./index.module.scss";

const SkillsTech = () => {
  return (
    <div className={styles.Skills}>
      <h3>Computer Skills</h3>
      <div className={styles.div}>
        <ul>
          <li>
            <FaReact />
          </li>
          <li>
            <FaHtml5 />
          </li>
          <li>
            <FaCss3Alt />
          </li>
          <li>
            <FaSass />
          </li>
          <li>
            <SiJavascript />
          </li>
          <li>
            <FaGit />
          </li>
          <li>
            <FaGithub />
          </li>
          <li>
            <SiMysql />
          </li>
          <li>
            <SiPhpmyadmin />
          </li>
          <li>
            <FaWordpress />
          </li>
          <li className={styles.special}>
            <SiWoocommerce />
          </li>
          <li>
            <FaAws />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsTech;
