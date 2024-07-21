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
  SiVite,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiPhpmyadmin,
} from "react-icons/si";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { TbBrandReactNative } from "react-icons/tb";

import styles from "./index.module.scss";

const SkillsTech = () => {
  return (
    <div className={styles.Skills}>
      <div className={styles.div}>
        <ul>
          <p>
            <ImStarFull />
            FrontEnd
          </p>
          <li>
            <FaHtml5 />
          </li>
          <li>
            <SiJavascript />
          </li>
          <li>
            <FaReact />
          </li>
          <li>
            <SiRedux />
          </li>
          <li>
            <SiNextdotjs />
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
            <FaGit />
          </li>
          <li>
            <FaGithub />
          </li>
        </ul>
        <ul>
          <p>
            <ImStarHalf />
            BackEnd
          </p>
          <li>
            <SiMysql />
          </li>
          <li>
            <SiMongodb />
          </li>
          <li>
            <SiPhpmyadmin />
          </li>
        </ul>
        <ul>
          <p>
            {" "}
            <ImStarFull />
            CMS
          </p>
          <li>
            <FaWordpress />
          </li>
          <li className={styles.special}>
            <SiWoocommerce />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsTech;
