import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaAngular,
  FaWordpress,
  FaSass,
  FaAws,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiRedux,
  SiBootstrap,
  SiWoocommerce,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiPhpmyadmin,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import styles from "./index.module.scss";

const SkillsTech = () => {
  return (
    <div className={styles.Skills}>
      <div className={styles.div}>
        <ul>
          <li>
            <FaHtml5 />
          </li>
          <li>
            <FaReact />
          </li>
          <li>
            <TbBrandReactNative />
          </li>
          <li>
            <SiRedux />
          </li>
          <li>
            <FaAngular />
          </li>
          <li>
            <FaCss3Alt />
          </li>
          <li>
            <FaSass />
          </li>
          <li>
            <SiBootstrap />
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
            <SiMongodb />
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
