import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaWordpress,
  FaSass,
  FaShopify,
  FaGit,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiWoocommerce,
  SiJavascript,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiPhpmyadmin,
  SiGoogleads,
  SiGoogleanalytics,
} from "react-icons/si";
import { ImStarFull, ImStarHalf } from "react-icons/im";

import styles from "./index.module.scss";

const SkillsTech = () => {
  return (
    <div className={styles.Skills}>
      <div className={styles.div}>
        <ul>
          <p>
            <ImStarFull />
            Digital Marketing
          </p>
          <li>
            <SiGoogleads />
          </li>
          <li>
            <SiGoogleanalytics />
          </li>
        </ul>
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
          <li>
            <FaShopify />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsTech;
